addLayer("mF", {
    name: "Meta-Fusions", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "mF", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 6, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        total: new Decimal(0),
    }},

    color: "#cfba8a",
    requires(){ 
        let requirement = new Decimal(12)
        if (hasMilestone('mF', 15)) requirement = requirement.minus(1)
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
                    function () { return 'Buyables are locked behind either Upgrades, Bars, or Milestones...or even challenges...' },
                    {}],
                ["display-text",
                    function () { return "You can't see what effect the Locked Buyable will give until you've unlocked it..." },
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
        "Challenges": {
            content: [
                "main-display",
                "blank",
                "prestige-button",
                "blank",
                "blank",
                "challenges",
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
            requirementDescription: "2 Total Meta-Fusions",
            effectDescription: `Keep the current Meta-Experiment Milestones & Upgrades`,
            done() { return player.mF.points.total.gte(2) },
        },
        13: {
            requirementDescription: "10 Total Meta-Fusions",
            effectDescription: `Meta-Humans don't reset anything; also 15% mC & mE passively`,
            done() { return player.mF.points.total.gte(10) },
        },
        14: {
            requirementDescription: "2 mF_B1's",
            effectDescription: `Double Meta-Fusion Gain`,
            done() { return (getBuyableAmount("mF", 11).gte(2)) },
        },
        15: {
            requirementDescription: "1 mF_B2's",
            effectDescription: `Lower Meta-Fusion Requirement by 1`,
            done() { return (getBuyableAmount("mF", 12).gte(1)) },
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
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) +"/"+ formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit)  + "<br>Effect: ???????????? ??????????? ???????????????"
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
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) +"/"+ formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit)  + "<br>Effect: ???????????? ??????????? ???????????????"
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
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) +"/"+ formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit)  + "<br>Effect: ???????????? ??????????? ???????????????"
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
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) +"/"+ formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit)  + "<br>Effect: ???????????? ??????????? ???????????????"
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
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) +"/"+ formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit)  + "<br>Effect: ???????????? ??????????? ???????????????"
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
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) +"/"+ formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit)  + "<br>Effect: ???????????? ??????????? ???????????????"
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
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) +"/"+ formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit)  + "<br>Effect: ???????????? ??????????? ???????????????"
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
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) +"/"+ formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit)  + "<br>Effect: ???????????? ??????????? ???????????????"
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
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) +"/"+ formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit)  + "<br>Effect: ???????????? ??????????? ???????????????"
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
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) +"/"+ formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit)  + "<br>Effect: ???????????? ??????????? ???????????????"
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
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) +"/"+ formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit)  + "<br>Effect: ???????????? ??????????? ???????????????"
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
    upgrades: {
        rows: 5,
        cols: 5,
            11: {
                title: "Artifact I",
                description: "1,700x Infects & 15x Meta-Crystals",
                cost: new Decimal(1),
                unlocked(){
                    return player.mH.unlocked
                },
            },
            21: {
                title: "Artifact II",
                description: "1,800,000x Infects & 190,000x Meta-Crystals",
                cost: new Decimal(1),
                unlocked(){
                    return hasUpgrade('mF', 11)
                },
            },
            22: {
                title: "Relic I",
                description: "^1.1 Infects & Improved 'Experiment Regime I' Effect",
                cost: new Decimal(2),
                unlocked(){
                    return hasUpgrade('mF', 11)
                },
            },
            31: {
                title: "Artifact III",
                description: "1e17x Infects, 1.4e12x Meta-Crystals, 5x Meta-Experiments",
                cost: new Decimal(4),
                unlocked(){
                    return hasUpgrade('mF', 21)
                },
            },
            32: {
                title: "Relic II",
                description: "^1.12 Infects & Improved 'Experiment Regime II' Effect",
                cost: new Decimal(10),
                unlocked(){
                    return hasUpgrade('mF', 21) || hasUpgrade('mF', 22)
                },
            },
            33: {
                title: "Ancient I",
                description: "Meta-Experiments boosts Infects",
                cost: new Decimal(1700),
                effect() {
                    let eff = ((player.mE.points.pow(0.02)).add(1).max(0)).max(1).min(1.3);
                    return eff
                },
                effectDisplay() {
                    let capped = upgradeEffect(this.layer, this.id).gte(1.3) ? "(Capped)" : "";
                    let text = `^${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                    return text;
                },
                unlocked(){
                    return hasUpgrade('mF', 22)
                },
            },
        },
})