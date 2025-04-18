addLayer("mH", {
    name: "Meta-Humans", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "mH", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 4, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        best: new Decimal(0),
    }},

    color: "#5bd6cd",
    requires(){ 
        let requirement = new Decimal("2.3e106")
        return requirement
        
    }, // Can be a function that takes requirement increases into account
    resource: "Meta-Humans", // Name of prestige currency
    baseResource: "Meta-Experiments", // Name of resource prestige is based on
    baseAmount() {return player.mE.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent(){ 
        let expo1 = new Decimal(3.08)
        return expo1
     }, // Prestige currency exponent

    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let expo = new Decimal(1)
        return expo
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "H", description: "shift+H: reset for Meta-Humans", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {return true},
    layerShown() {
        let value = false
        if (hasMilestone('mE', 17) || player.mH.unlocked) value = true
        return value
    },
    autoPrestige(){
        let prestige = false
        if (hasMilestone('mH', 14)) prestige = true
        return prestige
    },
    canBuyMax(){
        let prestige = false
        if (hasMilestone('mH', 12) || hasMilestone('mF', 12)) prestige = true
        return prestige
    },
    resetsNothing(){
        let nothing = false
        if (hasMilestone('mH', 15) || hasMilestone('mF', 13)) nothing = true
        return nothing
    },

milestones: {
        11: {
            requirementDescription: "1 Meta-Humans",
            effectDescription: `Keep the current Meta-Crystals Milestones & Upgrades`,
            done() { return player.mH.points.gte(1) },
        },
        12: {
            requirementDescription: "3 Meta-Humans",
            effectDescription: `Keep the current Meta-Experiment Milestones & Upgrades; while having that, you can buy the max amount of Meta-Humans possible.`,
            done() { return player.mH.points.gte(3) },
        },
        13: {
            requirementDescription: "15 Meta-Humans",
            effectDescription: `Passively Gain 5% Meta-Experiments`,
            done() { return player.mH.points.gte(15) },
            unlocked(){ return hasMilestone('mH', 12) }, 
        },
        14: {
            requirementDescription: "35 Meta-Humans",
            effectDescription: `Automate Meta-Humans. With that, unlock a Meta-Human Buyable`,
            done() { return player.mH.points.gte(35) },
            unlocked(){ return hasMilestone('mH', 13) }, 
        },
        15: {
            requirementDescription: "42 Meta-Humans",
            effectDescription: `Meta-Humans doesn't reset the previous layers anymore`,
            done() { return player.mH.points.gte(42) },
            unlocked(){ return hasMilestone('mH', 14) }, 
        },
    },

buyables: {
        11: {
            title: "Human Regime",
            unlocked() { return hasMilestone("mH", 14) },
            cost(x) {
                let exp1 = new Decimal(2)
                if (getBuyableAmount(this.layer, this.id).gte(5)) exp1 = exp1.times(4)
                let costdef = new Decimal(4)
                if (getBuyableAmount(this.layer, this.id).gte(15)) exp1 = exp1.times(2)
                return new Decimal(costdef).mul(exp1, x).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Humans" + "<br>Bought: " + getBuyableAmount(this.layer, this.id)+"/"+ formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit) + "<br>Effect: Boost Meta-Experiment gain by x" + format(buyableEffect(this.layer, this.id))
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            purchaseLimit(){
                let limit = 15
                return limit
            },
            buy() {
                let cost = new Decimal (1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let base1 = new Decimal("5e1933")
                let base2 = x
                let expo = new Decimal(1.15)
                let eff = base1.pow(Decimal.pow(base2, expo)).pow(1.04)
                return eff
            },
        },
},


upgrades: {
    rows: 4,
    cols: 4,
        11: {
            title: "Humanizating Meta",
            description: "100x Infects & 20x Meta-Experiments",
            cost: new Decimal(1),
            unlocked(){
                return player.mH.unlocked
            },
        },
        12: {
            title: "Meta MeTa META!!",
            description: "Quadruple Meta-Crystals & 1,500x Infects",
            cost: new Decimal(1),
            unlocked(){
                return hasUpgrade('mH', 11)
            },
        },
        13: {
            title: "Superization",
            description: "23x 'Experiment Regime IV' & 'Experiment Regime II'.",
            cost: new Decimal(2),
            unlocked(){
                return hasUpgrade('mH', 12)
            },
        },
        14: {
            title: "Algutate",
            description: "1e15x Infects & 1e9x Meta-Crystals, also automate mE Buyables",
            cost: new Decimal(3),
            unlocked(){
                return hasUpgrade('mH', 13)
            },
        },
        21: {
            title: "Bloomative",
            description: "Break mC-U3 Cap not have a cap for a while!",
            cost: new Decimal(4),
            unlocked(){
                return hasUpgrade('mH', 14)
            },
        },
        22: {
            title: "Desolative",
            description: "Meta-Humans boost Meta-Crystal effect significantly",
            cost: new Decimal(6),
            effect() {
                let eff = ((player.mH.points.div(45)).add(1).max(0)).max(1).min(1.4);
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(1.4) ? "(Capped)" : "";
                let text = `^${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
            unlocked(){
                return hasUpgrade('mH', 21)
            },
        },
        23: {
            title: "Insulative",
            description: "Drop 'Experiment Regime IV' cost significantly",
            cost: new Decimal(6),
            unlocked(){
                return hasUpgrade('mH', 22)
            },
        },
        24: {
            title: "Regimes",
            description: "Infect gain is boosted by Meta-Humans",
            cost: new Decimal(7),
            effect() {
                let eff = ((player.mH.points.div(27)).add(1).max(0)).max(1).min(1.45);
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(1.45) ? "(Capped)" : "";
                let text = `^${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
            unlocked(){
                return hasUpgrade('mH', 23)
            },
        },
        31: {
            title: "Cap^Cap Breaker",
            description: "Bro are you telling me that mC-U12 was never really getting a boost in the first place? Increase the Cap for the 2nd row of Meta-Crystal(s) Upgrades",
            cost: new Decimal(8),
            unlocked(){
                return hasUpgrade('mH', 24)
            },
        },
        32: {
            title: "Personification",
            description: "Significantly improve 'Experimental Regime IV' Effect & ^1.4 'Experiment Regime II' Effect AND reduce 'Experiment Regime III' cost",
            cost: new Decimal("1e1700"),
            currencyDisplayName: "infects",
            currencyInternalName: "points",
            unlocked(){
                return hasUpgrade('mH', 31)
            },
        },
        33: {
            title: "Economic Success",
            description: "^1.03 Infects & ^1.03 Meta-Experiments",
            cost: new Decimal(11),
            unlocked(){
                return hasUpgrade('mH', 32)
            },
        },
        34: {
            title: "We skipped a layer!",
            description: "Unlock Meta-Fusions, ^1.033 Infect Gain",
            cost: new Decimal(99),
            unlocked(){
                return hasUpgrade('mH', 33)
            },
        },
    },
})