addLayer("FL", {
    name: "Floors", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "FL", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        best: new Decimal(0),
    }},
    color(){ 
        let color = `#9c422a`
        return color
    },
    requires(){ 
        let requirement = new Decimal(150);
        if (inChallenge('CT', 12)) requirement = new Decimal(75);
        if (inChallenge('CT', 21)) requirement = new Decimal(40);
        if (inChallenge('CT', 22)) requirement = new Decimal(5);
        if (hasUpgrade('FL', 23)) requirement = requirement.div(upgradeEffect('FL', 23));
        if (hasUpgrade('SL', 12)) requirement = requirement.div(1.2);
        if (hasUpgrade('SL', 13)) requirement = requirement.div(1.5);
        if (hasUpgrade('SL', 21)) requirement = requirement.div(player.SL.points.add(1).pow(0.15));
        if (requirement <= 0.99) requirement = new Decimal(1)
        if (player.CT.points.gte(2)) requirement = new Decimal("1ee50")
        
        return requirement
    },// Can be a function that takes requirement increases into account
    resource: "Floors", // Name of prestige currency
    baseResource: "infects", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.8, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1);
        if (hasUpgrade('FL', 11)) mult = mult.times(upgradeEffect('FL', 11));
        if (hasUpgrade('FL', 13)) mult = mult.times(upgradeEffect('FL', 13));
        if (hasUpgrade('FL', 14)) mult = mult.times(upgradeEffect('FL', 14));
        if (hasUpgrade('EX', 14)) mult = mult.times(upgradeEffect('EX', 14));
        if (hasUpgrade('EX', 15)) mult = mult.times(upgradeEffect('EX', 15));
        if (hasUpgrade('EX', 21)) mult = mult.times(upgradeEffect('EX', 21));
        if (hasUpgrade('EX', 24)) mult = mult.times(upgradeEffect('EX', 24));
        if (hasUpgrade('SL', 11)) mult = mult.times(3);
        if (hasChallenge('CT', 11)) mult = mult.times(3);
        if (inChallenge('CT', 12)) mult = mult.times(3);
        if (inChallenge('CT', 21)) mult = mult.times(250);
        if (hasUpgrade('EX', 25)) mult = mult.times(100);
        if (player.SL.unlocked) mult = mult.times(tmp.SL.effect);
        if (player.O.unlocked) mult = mult.times(tmp.O.effect);
        if (hasUpgrade('SL', 23)) mult = mult.times(tmp.SL.effect.pow(0.15)); 
        if (hasMilestone('c', 11)) mult = mult.times(1e100);
        if (hasUpgrade('D', 12)) mult = mult.times("1e355");
        if (hasMilestone('EX', 12)) mult = mult.times("1e400");
        if (hasUpgrade('O', 24)) mult = mult.times(upgradeEffect('O', 24));
        if (hasUpgrade('D', 14)) mult = mult.times(upgradeEffect('D', 14));
        if (hasUpgrade('D', 15)) mult = mult.times(upgradeEffect('D', 15));
        if (hasUpgrade('D', 21)) mult = mult.times(upgradeEffect('D', 21));
        return mult;
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let exp = new Decimal(1)
        if (hasUpgrade('FL', 24)) exp = exp.add(.3)
        if (hasUpgrade('SL', 14)) exp = exp.add(.05)
        if (hasUpgrade('EX', 25)) exp = exp.add(.0165)
        if (hasMilestone('SL', 11)) exp = exp.add(.1)
        if (hasMilestone('SL', 11)) exp = exp.add(.1)
        if (hasUpgrade('SL', 25)) exp = exp.add(upgradeEffect("SL", 25).sub(0.999))
        if (hasUpgrade('O', 11)) exp = exp.add(.03)
        return exp
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > this.row) layerDataReset(this.layer)
        if (inChallenge('CT', 11)) player.EX.milestones.push('11')
        if (inChallenge('CT', 12)) player.EX.milestones.push('11')
        if (inChallenge('CT', 12)) player.FL.milestones.push('11')
        if (inChallenge('CT', 21)) player.EX.milestones.push('11')
        if (inChallenge('CT', 21)) player.FL.milestones.push('11')
        if (inChallenge('CT', 21)) player.EX.upgrades.push('21')
        if (hasChallenge('CT', 21)) player.FL.milestones.push('11')
        if (inChallenge('CT', 22)) player.SL.upgrades.push('11', '12', '13', '14', '15', '21')
        if (hasMilestone('O', 11)) player.SL.upgrades.push('11', '12', '13', '14', '15', '21', '22', '23', '24', '25')
        if (hasChallenge('CT', 22)) player.FL.upgrades.push('11', '12', '13', '14', '21', '22', '23', '24')
    },
    passiveGeneration() {
        let value1 = new Decimal(0);
        if (hasMilestone('SL', 11)) value1 = value1.add(0.1)
        if (hasMilestone('W', 14)) value1 = value1.add(0.9)
        if (hasMilestone('D', 11)) value1 = new Decimal(1e50)
        if (inChallenge('D', 11)) value1 = new Decimal(0)
        if (inChallenge('D', 12)) value1 = new Decimal(0)
        return value1;
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "l", description: "l: reset for Floors", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {
        let value = false
        if (player.CT.unlocked) value = true
        if (player.CT.points.gte(2) || hasUpgrade('D', 45)) value = false
        return value
    },
    milestones: {
        11: {
            requirementDescription: "1e11 Floors",
            effectDescription(){ 
                let des
                des = `Are we at Pluto yet...`
                if (player.FL.points.gte(1e11) || hasMilestone('FL', 11)) des = "Unlock another Collapsed Challenge & infects boosts itself (" + format(player.points.add(1).pow(0.07)) + "x)"
                return des
            },
            done() { return player.FL.points.gte(1e11) || hasMilestone('FL', 11)},
            unlocked(){ return hasUpgrade('EX', 15) || hasMilestone('FL', 11)}
        },
    },
    upgrades: {
        rows: 3,
        cols: 4,
        11: {
            title: "1st Floor",
            description: "Floors boosts Floors (Cap is 300x)",
            cost: new Decimal(1),
            effect() {
                let effect1 = (player.FL.points.max(1).add(1.22).pow(0.15)).max(1).min(300);
                if (inChallenge('CT', 11)) effect1 = (player.FL.points.max(1).add(1.66).pow(0.26)).max(1).min(300);
                if (inChallenge('CT', 22)) effect1 = (player.FL.points.max(1).add(2).pow(0.7)).max(1).min(300);
                return effect1
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked(){
                return player.FL.points.gte(0)
            },
        },
        12: {
            title: "7th Floor",
            description: "Floors boosts Infects (Cap is 800x)",
            cost: new Decimal(7),
            effect() {
                let effect1 = (player.FL.points.max(1).add(1).pow(0.19)).max(1).min(800);
                if (inChallenge('CT', 11)) effect1 = (player.FL.points.max(1).add(1.2).pow(0.26)).max(1).min(800);
                if (inChallenge('CT', 12)) effect1 = (player.FL.points.max(1).add(1.5).pow(0.3)).max(1).min(800);
                return effect1
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked(){
                return hasUpgrade('FL', 11)
            },
        },
        13: {
            title: "44th Floor",
            description: "Floors boosts Floors (Cap is 240x)",
            cost: new Decimal(44),
            effect() {
                let effect1 = (player.FL.points.max(1).add(1.8).pow(0.22)).max(1).min(240);
                if (inChallenge('CT', 11)) effect1 = (player.FL.points.max(1).add(1.9).pow(0.23)).max(1).min(240);
                return effect1
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked(){
                return hasUpgrade('FL', 12)
            },
        },
        14: {
            title: "295th Floor",
            description: "Infects boosts Floors (Cap is 1930x) & Unlock a new Layer (Explosives)",
            cost: new Decimal(295),
            effect() {
                return (player.points.max(1).add(1.2).pow(0.06)).max(1).min(1930);
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked(){
                return hasUpgrade('FL', 13)
            },
        },
        21: {
            title(){ 
                let title = "50,000th Floor"
                if (inChallenge('CT', 12)) title = "10,000th Floor"
                if (inChallenge('CT', 21)) title = "2,800,000th Floor"
                return title
            },
            description: "Floors boosts Infects & Explosives (Cap is 95x)",
            cost(){
                let cost = new Decimal(50000)
                if (inChallenge('CT', 12)) cost = new Decimal(10000)
                if (inChallenge('CT', 21)) cost = new Decimal(2800000)
                return cost
            },
            effect() {
                let effect1 = (player.FL.points.max(1).add(1.3).pow(0.075)).max(1).min(95);
                if (inChallenge('CT', 12)) effect1 = (player.FL.points.max(1).add(1.5).pow(0.08)).max(1).min(95);
                if (inChallenge('CT', 21)) effect1 = (player.FL.points.max(1).add(1.5).pow(0.1)).max(1).min(95);
                return effect1
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked(){
                return hasUpgrade('FL', 14) && hasChallenge('CT', 11)
            },
        },
        22: {
            title(){
            let title = "650,000th Floor"
                if (inChallenge('CT', 21)) title = "12,000,000th Floor"
                return title
            },
            description: "Divide Explosive Requirement based on Infects (Cap is /39)",
            cost(){ 
            let cost = new Decimal(650000)
                if (inChallenge('CT', 21)) cost = new Decimal(12000000)
                return cost
            },
            effect() {
                let effect = (player.points.max(1).add(1.1).pow(0.0555)).max(1).min(39);
                if (inChallenge('CT', 21)) effect = (player.points.max(1).add(1.15).pow(0.07)).max(1).min(39);
                if (inChallenge('CT', 22)) effect = (player.points.max(1).add(7.6).pow(0.6)).max(1).min(1500);
                return effect
            },
            effectDisplay() { return "/"+format(upgradeEffect(this.layer, this.id)) },
            unlocked(){
                return hasUpgrade('FL', 21)
            },
        },
        23: {
            title: "1,500,000,000th Floor",
            description: "Divide Floor Requirement based on Explosives (Cap is /15)",
            cost: new Decimal(1500000000),
            effect() {
                return (player.EX.points.max(1).add(1.1).pow(0.02)).max(1).min(15);
            },
            effectDisplay() { return "/"+format(upgradeEffect(this.layer, this.id)) },
            unlocked(){
                return hasUpgrade('FL', 22)
            },
        },
        24: {
            title: `9,500,000,000,<br>000,000,000th Floor`,
            description: "Add a base of .3 to Floor Gain",
            cost: new Decimal(9.5e18),
            unlocked(){
                return hasUpgrade('FL', 23)
            },
        },
    },
})