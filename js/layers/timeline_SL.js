addLayer("SL", {
    name: "Souls", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SL", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        best: new Decimal(0),
    }},
    color(){ 
        let color = `#603736`
        return color
    },
    nodeStyle() {return {
        "background": (player.SL.unlocked||canReset("SL"))?"radial-gradient(#603736, #4a6261)":"#bf8f8f" ,
    }},
    requires(){ 
        let requirement = new Decimal(1e40);
        if (inChallenge('CT', 22)) requirement = requirement.div(1.66e32);
        return requirement
    },
    resource: "Souls", // Name of prestige currency
    baseResource: "Floors", // Name of resource prestige is based on
    baseAmount() {return player.FL.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasChallenge('CT', 22)) mult = mult.times(5).pow(challengeCompletions('CT', 22))
        if (hasUpgrade('SL', 15)) mult = mult.times(7)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        if (hasUpgrade('SL', 24)) exp = exp.add(0.13)
        return exp
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > this.row) layerDataReset(this.layer)
    },
    effect() {
        let eff = player.SL.points.add(1.25).pow(0.27)
        eff = eff.times(tmp.SL.effectBase)
        return eff
    },
    effectDescription() {
        dis = "which is boosting floor gain by "+format(tmp.SL.effect)+"x"
        if (hasUpgrade('SL', 21)) dis = "which is boosting floor gain by "+format(tmp.SL.effect)+`x<br>` + "and dividing explosive & floor requirement by /"+format(player.SL.points.add(1).pow(0.15))
        if (hasUpgrade('SL', 22)) dis = "which is boosting floor gain by "+format(tmp.SL.effect)+`x<br>` + "and dividing explosive & floor requirement by /"+format(player.SL.points.add(1).pow(0.36))
        if (hasUpgrade('SL', 23 && hasUpgrade('SL', 22))) dis = "which is boosting floor gain by "+format(tmp.SL.effect.pow(1.15))+`x<br>` + "and dividing explosive & floor requirement by /"+format(player.SL.points.add(1).pow(0.36))
        return dis
    },
    effectBase() {
        let base = new Decimal(1)
        return base
    },
    passiveGeneration() {
        let value1 = new Decimal(0);
        return value1
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "s", description: "s: reset for Souls", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {
        let value = false
        if (hasChallenge('CT', 21)) value = true
        return value
    },
milestones: {
    11: {
        requirementDescription: "250,000 Souls",
        effectDescription(){ 
            let des
            des = `Passively earn 10% Floors & Explosives & add a base of 0.1 to Floors`
            return des
        },
        done() { return player.SL.points.gte(250000)},
        unlocked() { return hasChallenge('CT', 22)},
    },
    12: {
        requirementDescription: "1e21 Souls",
        effectDescription(){ 
            let des
            des = `Add a base of 0.3 to Explosives`
            return des
        },
        done() { return player.SL.points.gte(1e21)},
        unlocked() { return hasChallenge('CT', 22)},
    },
    },

upgrades: {
        rows: 2,
        cols: 5,
        11: {
            title: "Contract with the Infection",
            description: "3x Floors & Explosives",
            cost: new Decimal(1),
            unlocked(){
                return player.SL.points.gte(0)
            },
        },
        12: {
            title: "Soulful Actions",
            description: "Divide Floor Requirement by 1.2",
            cost: new Decimal(5),
            unlocked(){
                return hasUpgrade('SL', 11)
            },
        },
        13: {
            title: "Heaven's Gift",
            description: "Divide Floor Requirement by 1.5",
            cost: new Decimal(40),
            unlocked(){
                return hasUpgrade('SL', 12)
            },
        },
        14: {
            title: "Explosive Souls",
            description: "Quadtruple Explosive Gain, Divide Soul Requirement by 2.3, and add a .05 base gain to Floors",
            cost: new Decimal(170),
            unlocked(){
                return hasUpgrade('SL', 13)
            },
        },
        15: {
            title: "Infectious Souls",
            description: "Divide Explosive Requirement by 5.4 & 7x Soul Gain",
            cost: new Decimal(450),
            unlocked(){
                return hasUpgrade('SL', 14)
            },
        },
        21: {
            title: "Souling the Souls",
            description: "Unlock another CT Challenge & Another Soul Effect",
            cost: new Decimal(4700),
            unlocked(){
                return hasUpgrade('SL', 15)
            },
        },
        22: {
            title: "Soulful Contract",
            description: "^1.33 to 2nd Soul Effect",
            cost: new Decimal(150000),
            unlocked(){
                return hasUpgrade('SL', 21) && hasChallenge('CT', 22)
            },
        },
        23: {
            title: "Explosive Effects",
            description: "^1.15 to 1st Soul Effect",
            cost: new Decimal(350000),
            unlocked(){
                return hasUpgrade('SL', 22)
            },
        },
        24: {
            title: "Effective Souls",
            description: "Add a base of 0.13 to soul gain",
            cost: new Decimal(1455666),
            unlocked(){
                return hasUpgrade('SL', 23)
            },
        },
    },
})