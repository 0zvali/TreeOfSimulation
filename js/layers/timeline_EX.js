addLayer("EX", {
    name: "Explosives", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "EX", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        best: new Decimal(0),
        milestonePopups: false,
    }},
    color(){ 
        let color = `#7dee99`
        return color
    },
    requires(){ 
        let requirement = new Decimal(6000);
        if (inChallenge('CT', 11)) requirement = new Decimal(1500);
        if (inChallenge('CT', 12)) requirement = requirement.times(1.5)
        if (inChallenge('CT', 12)) requirement = requirement.times(2)
        if (inChallenge('CT', 22)) requirement = requirement.times(200)
        if (hasUpgrade('FL', 22)) requirement = requirement.div(upgradeEffect('FL', 22))
        if (hasUpgrade('SL', 15)) requirement = requirement.div(5.4);
        if (hasUpgrade('SL', 21)) requirement = requirement.div(player.SL.points.add(1).pow(0.15));
        if (requirement <= 0.99) requirement = new Decimal(1)
        return requirement
    },
    resource: "Explosives", // Name of prestige currency
    baseResource: "infects", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.75, // Prestige currency exponent
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > this.row) layerDataReset(this.layer)
        if (hasChallenge('CT', 21)) player.EX.milestones.push('11')
        if (hasUpgrade('D', 15)) player.EX.milestones.push('12')
        if (hasChallenge('CT', 22)) player.EX.upgrades.push('11', '12', '13', '14', '15', '21', '22', '23', '24', '25')
    },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('EX', 13)) mult = mult.times(upgradeEffect('EX', 13))
        if (hasUpgrade('FL', 21)) mult = mult.times(upgradeEffect('FL', 21))
        if (hasUpgrade('EX', 15)) mult = mult.times(upgradeEffect('EX', 15))
        if (hasChallenge('CT', 12)) mult = mult.times(player.points.add(1).pow(0.05))
        if (hasUpgrade('EX', 24)) mult = mult.times(upgradeEffect('EX', 24))
        if (hasUpgrade('D', 13)) mult = mult.times(upgradeEffect('D', 13))
        if (hasUpgrade('D', 21)) mult = mult.times(upgradeEffect('D', 21))
        if (hasUpgrade('SL', 11)) mult = mult.times(3)
        if (hasUpgrade('SL', 11)) mult = mult.times(4)
        if (hasUpgrade('D', 25)) mult = mult.times(upgradeEffect('D', 25))

        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        if (hasMilestone('SL', 12)) exp = exp.add(.3)
        if (hasUpgrade('O', 12)) exp = exp.add(.2)
        return exp
    },
    autoUpgrade(){
        let auto = false
        if (hasChallenge('CT', 22)) auto = true
        return auto
    },
    passiveGeneration() {
        let value1 = new Decimal(0);
        if (hasMilestone('SL', 11)) value1 = value1.add(0.1)
        if (hasMilestone('W', 14)) value1 = value1.add(0.9)
        if (hasMilestone('D', 11)) value1 = new Decimal(1e50)
        if (inChallenge('D', 11)) value1 = new Decimal(0)
        return value1;
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "x", description: "x: reset for Explosives", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {
        let value = false
        if (hasUpgrade('FL', 14) || inChallenge('CT', 11)) value = true
        return value
    },
milestones: {
        11: {
            requirementDescription: "3 Explosives",
            effectDescription(){ 
                let des
                des = `Explode, Explode, Explode!`
                if (player.EX.points.gte(3) || hasMilestone('EX', 11)) des = `Unlock a...Collapsed Timeline Challenge...?`
                return des
            },
            done() { return player.EX.points.gte(3) || hasMilestone('EX', 11)},
        },
        12: {
            requirementDescription: "1e30,000 Explosives",
            effectDescription(){ 
                let des
                des = `x1e400 Floors & x1e200 Crystals`
                return des
            },
            done() { return player.O.points.gte("1e500")},
        },
    },
upgrades: {
        rows: 2,
        cols: 5,
        11: {
            title: "Minor Explosive I",
            description: "Explosives boosts Infects (Cap is 4950x)",
            cost: new Decimal(1),
            effect() {
                return (player.EX.points.max(1).add(1.5).pow(0.2)).max(1).min(4950);
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked(){
                return player.FL.points.gte(0)
            },
        },
        12: {
            title: "Minor Explosive II",
            description: "Infects boosts itself (Cap is 2000x)",
            cost: new Decimal(1),
            effect() {
                return (player.points.max(1).add(1.5).pow(0.14)).max(1).min(2000);
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked(){
                return hasUpgrade('EX', 11)
            },
        },
        13: {
            title: "Minor Explosive III",
            description: "Infects boosts Explosives (Cap is 60x)",
            cost: new Decimal(1),
            effect() {
                return (player.points.max(1).add(1.3).pow(0.09)).max(1).min(60);
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked(){
                return hasUpgrade('EX', 12)
            },
        },
        14: {
            title: "Minor Explosive IV",
            description: "Explosives boosts Floors (Cap is 25x)",
            cost: new Decimal(1750),
            effect() {
                return (player.EX.points.max(1).add(1.1).pow(0.13)).max(1).min(25);
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked(){
                return hasUpgrade('EX', 13) & hasUpgrade('FL', 22)
            },
        },
        15: {
            title: "Minor Explosive V",
            description: "Infects boosts Floors & Explosives (Cap is 300x)...Unlock a Floor Milestone...",
            cost: new Decimal(65000),
            effect() {
                return (player.points.max(1).add(1).pow(0.1)).max(1).min(300);
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked(){
                return hasUpgrade('EX', 14) & hasUpgrade('FL', 23)
            },
        },
        21: {
            title: "Semi-Major Explosive I",
            description: "Explosives boosts Floors & Infects (Cap is 60x)",
            cost: new Decimal(1e9),
            effect() {
                return (player.EX.points.max(1).add(1.1).pow(0.08)).max(1).min(60);
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked(){
                return hasUpgrade('EX', 15) & hasChallenge('CT', 12)
            },
        },
        22: {
            title: "Semi-Major Explosive II",
            description: "Increase Floor gain (hover) & Unlock the next challenge...",
            tooltip: "((Floors^0.1)*(log(100))^0.45",
            cost: new Decimal(1.33e11),
            effect() {
                return ((player.FL.points.max(1).add(1).pow(0.1).log10(100)).pow(0.45)).max(1).min(1e100);
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked(){
                return hasUpgrade('EX', 21)
            },
        },
        23: {
            title: "Semi-Major Explosive III",
            description: "Increase infect gain baseed on formula on hover",
            tooltip: "((Floors^0.05) + (Explosives^0.05))",
            cost: new Decimal(1e16),
            effect() {
                return (player.FL.points.max(1).pow(0.05).add(player.EX.points.pow(0.05))).max(1).min(1e100);
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked(){
                return hasUpgrade('EX', 22) && hasChallenge('CT', 21)
            },
        },
        24: {
            title: "Semi-Major Explosive IV",
            description: "Infects boosts Floors & Explosives (Cap is 150x)",
            cost: new Decimal(3.14e17),
            effect() {
                return (player.points.max(1).add(1).pow(0.005)).max(1).min(150);
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked(){
                return hasUpgrade('EX', 23)
            },
        },
        25: {
            title: "Semi-Major Explosive V",
            description: "100x Floor Gain & 0.0165 base gain to Floors...",
            cost: new Decimal(7e19),
            unlocked(){
                return hasUpgrade('EX', 24)
            },
        },
    },
})