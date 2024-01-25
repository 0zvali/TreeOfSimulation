addLayer("mF", {
    name: "Meta-Fusions", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "mF", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 6, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
    }},

    color: "#cfba8a",
    requires(){ 
        let requirement = new Decimal(12)
        if (hasMilestone('mF', 15)) requirement = requirement.minus(1)
        if (hasMilestone('mF', 16)) requirement = requirement.minus(2)
        if (hasMilestone('mF', 18)) requirement = requirement.minus(1)
        if (hasMilestone('mF', 19)) requirement = requirement.minus(3)
        return requirement
        
    }, // Can be a function that takes requirement increases into account
    resource: "Meta-Fusions", // Name of prestige currency
    baseResource: "Meta-Humans", // Name of resource prestige is based on
    baseAmount() {return player.mH.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent(){ 
        let expo1 = new Decimal(12)
        return expo1
     }, // Prestige currency exponent
    effect() {
        let eff4 = player.mF.points.add(2).pow(1.1)
        eff4 = eff4.times(tmp.mF.effectBase)
        return eff4
    },
    effectBase() {
        let base = new Decimal(1.15) 
        return base
    },
    effectDescription() {
        let dis = "which boosts all previous layers (Except Humans) by x" + format(tmp.mF.effect)
        return dis
    },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        if (hasMilestone('mF', 14)) mult = mult.times(2)
        if (hasMilestone('mF', 17)) mult = mult.times(3)
        if (hasMilestone('mF', 19)) mult = mult.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let expo = new Decimal(1)
        return expo
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "F", description: "shift+F: reset for Meta-Fusions", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {return true},
    layerShown() {
        let value = false
        if (hasUpgrade('mH', 34) || player.mF.unlocked) value = true
        return value
    },
    tabFormat: {
        "Main": {
            content: [
                "main-display",
                "blank",
                "prestige-button",
                "blank",
                ["display-text",
                    function () { return 'Notice: Buyables are in sections - 4th, 8th, and 12th buyables have a higher effect but are more expensive; it goes like that through 1-4, 5-8, and 9-12' },
                    {}],
                ["display-text",
                    function () { return 'Example: 1st Buyable 13x Infect Gain, but price is signifcantly lower. 4th Buyable: 1e8x Infect Gain, but price is significantly higher' },
                    {}],
                "blank",
                ["buyables",[1, 2, 3]],
                "blank",
            ]
        },
        "Upgrades": {
            content: [
                "main-display",
                "blank",
                "prestige-button",
                "blank",
                "blank",
                "upgrades",
            ]
        },
        "Milestones": {
            content: [
                "main-display",
                "blank",
                "prestige-button",
                "blank",
                ["display-text",
                function () { return "Notice: Some of These are asking for '15 mF_B11' > Which means 15 Meta-Fusion Buyable 11's" },
                {}],
                ["display-text",
                function () { return "Milestones will be a big play into this so PLEASE make sure you get them or it'll make it much much harder to progress.<br>You don't have to get these in order!" },
                {}],
                "blank",
                "milestones",
            ]
        },
    },



milestones: {
        11: {
            requirementDescription: "1 Meta-Fusions",
            effectDescription: `Keep the current Meta-Crystals Milestones & Upgrades`,
            done() { return player.mF.points.gte(1) },
        },
        12: {
            requirementDescription: "5 Meta-Fusions",
            effectDescription: `Keep the current Meta-Experiment Milestones & Upgrades`,
            done() { return player.mF.points.gte(5) },
        },
        13: {
            requirementDescription: "15 Meta-Fusions",
            effectDescription: `Meta-Humans don't reset anything; also 15% mC & mE passively`,
            done() { return player.mF.points.gte(15) },
        },
        14: {
            requirementDescription: "3 mF_B1's",
            effectDescription: `Double Meta-Fusion Gain`,
            done() { return (getBuyableAmount("mF", 11).gte(3)) },
        },
        15: {
            requirementDescription: "3 mF_B8's",
            effectDescription: `Lower Meta-Fusion Requirement by 1`,
            done() { return (getBuyableAmount("mF", 24).gte(3)) },
        },
        16: {
            requirementDescription: "5 mF_B12's",
            effectDescription: `Lower Meta-Fusion Requirement by 2`,
            done() { return (getBuyableAmount("mF", 34).gte(5)) },
        },
        17: {
            requirementDescription: "6 mF_B2's",
            effectDescription: `Triple Meta-Fusion Gain`,
            done() { return (getBuyableAmount("mF", 12).gte(6)) },
        },
        18: {
            requirementDescription: "4 mF_B6's & 2 mF_B11",
            effectDescription: `Lower Meta-Fusion Requirement by 1`,
            done() { return ((getBuyableAmount("mF", 22)).gte(6) && (getBuyableAmount("mF", 33).gte(2))) },
        },
        19: {
            requirementDescription: "4 mF_B4's & 4 mF_B8's & 4 mF_B12's",
            effectDescription: `The big 4's; Lower Meta-Fusion Requirement by 3 & double Meta-Fusion Gain`,
            done() { return ((getBuyableAmount("mF", 12)).gte(4) && (getBuyableAmount("mF", 24).gte(4)) && (getBuyableAmount("mF", 34).gte(4))) },
        },
    },

buyables: {
        11: {
            title: "Fusionitive",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(1.1)
                let exp2 = new Decimal(1.05)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id)+"/"+ formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit) + "<br>Effect: Boost Meta-Experiment gain by x" + format(buyableEffect(this.layer, this.id))
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal (1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit(){
                let limit = new Decimal(10)
                return limit
            },
            effect(x) {
                let base1 = new Decimal(1500)
                let base2 = x
                let expo = new Decimal(1.2)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        12: {
            title: "Metativity (Locked)",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(2)
                let exp2 = new Decimal(1.06)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost Infect gain by x" + format(buyableEffect(this.layer, this.id))
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            purchaseLimit(){
                let limit = 0
                return limit
            },
            buy() {
                let cost = new Decimal (1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let base1 = new Decimal(7.2e8)
                let base2 = x
                let expo = new Decimal(1.37)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        13: {
            title: "Longitivity (Locked)",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(1.55)
                let exp2 = new Decimal(1.065)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost Infect gain by x" + format(buyableEffect(this.layer, this.id))
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal (1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit(){
                let limit = 0
                return limit
            },
            effect(x) {
                let base1 = new Decimal(2.2e13)
                let base2 = x
                let expo = new Decimal(1.375)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        14: {
            title: "Definity (Locked)",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(1.6)
                let exp2 = new Decimal(1.065)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost Infect gain by x" + format(buyableEffect(this.layer, this.id))
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal (1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit(){
                let limit = 0
                return limit
            },
            effect(x) {
                let base1 = new Decimal(4.3e20)
                let base2 = x
                let expo = new Decimal(1.375)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        21: {
            title: "Crystalitivate (Locked)",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(1)
                let exp2 = new Decimal(1.025)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost Meta-Crystals gain by x" + format(buyableEffect(this.layer, this.id))
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal (1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit(){
                let limit = 0
                return limit
            },
            effect(x) {
                let base1 = new Decimal(66)
                let base2 = x
                let expo = new Decimal(1.1)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        22: {
            title: "Metativity II (Locked)",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(1.2)
                let exp2 = new Decimal(1.04)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost Meta-Crystals gain by x" + format(buyableEffect(this.layer, this.id))
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal (1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit(){
                let limit = 0
                return limit
            },
            effect(x) {
                let base1 = new Decimal(1300)
                let base2 = x
                let expo = new Decimal(1.2)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        23: {
            title: "Longitivity II (Locked)",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(1.4)
                let exp2 = new Decimal(1.07)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost Meta-Crystals gain by x" + format(buyableEffect(this.layer, this.id))
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal (1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit(){
                let limit = 0
                return limit
            },
            effect(x) {
                let base1 = new Decimal(1959200)
                let base2 = x
                let expo = new Decimal(1.3)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        24: {
            title: "Infinivate (Locked)",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(2)
                let exp2 = new Decimal(1.2)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost Meta-Crystals gain by x" + format(buyableEffect(this.layer, this.id))
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal (1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit(){
                let limit = 0
                return limit
            },
            effect(x) {
                let base1 = new Decimal(1.8e11)
                let base2 = x
                let expo = new Decimal(1.47)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        31: {
            title: "Experimate (Locked)",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(1)
                let exp2 = new Decimal(1.03)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost Meta-Experiments gain by x" + format(buyableEffect(this.layer, this.id))
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal (1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit(){
                let limit = 0
                return limit
            },
            effect(x) {
                let base1 = new Decimal(193)
                let base2 = x
                let expo = new Decimal(1.15)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        32: {
            title: "Metativity III (Locked)",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(1.2)
                let exp2 = new Decimal(1.06)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost Meta-Experiments gain by x" + format(buyableEffect(this.layer, this.id))
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal (1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit(){
                let limit = 0
                return limit
            },
            effect(x) {
                let base1 = new Decimal(6210)
                let base2 = x
                let expo = new Decimal(1.2)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        33: {
            title: "Longitivity III (Locked)",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(1.5)
                let exp2 = new Decimal(1.1)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost Meta-Experiments gain by x" + format(buyableEffect(this.layer, this.id))
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal (1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit(){
                let limit = 0
                return limit
            },
            effect(x) {
                let base1 = new Decimal(1.8e7)
                let base2 = x
                let expo = new Decimal(1.27)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        34: {
            title: "Enterative (Locked)",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(2)
                let exp2 = new Decimal(1.25)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost Meta-Experiments gain by x" + format(buyableEffect(this.layer, this.id))
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal (1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit(){
                let limit = 0
                return limit
            },
            effect(x) {
                let base1 = new Decimal(5.2e11)
                let base2 = x
                let expo = new Decimal(1.4)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
    }, 
})