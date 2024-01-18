addLayer("mH", {
    name: "Meta-Humans", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "mH", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 4, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        best: new Decimal(0),
    }},

    color: "#5bd3cd",
    requires(){ 
        let requirement = new Decimal("1e99")
        return requirement
        
    }, // Can be a function that takes requirement increases into account
    resource: "Meta-Humans", // Name of prestige currency
    baseResource: "Meta-Experiments", // Name of resource prestige is based on
    baseAmount() {return player.mE.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent(){ 
        let expo1 = 0.7
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
    effect() {
        let eff4 = player.mH.points.add(1).pow(0.62)
        eff4 = eff4.times(tmp.mH.effectBase.add(tmp.mE.effectBase))
        return eff4
    },
    effectBase() {
        let base = new Decimal(1)
        return base
    },
    effectDescription() {
        let dis = "which boosts Meta-Experiments & Meta-Crystals by "+ format(tmp.mH.effect) + "x"
        return dis
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
milestones: {
        11: {
            requirementDescription: "1 Meta-Humans",
            effectDescription: `Keep the current Meta-Crystals Milestones & Upgrades`,
            done() { return player.mH.points.gte(1) },
        },
        12: {
            requirementDescription: "1e35 Meta-Humans",
            effectDescription: `Keep the current Meta-Experiment Milestones & Upgrades`,
            done() { return player.mH.points.gte(1e35) },
        },
    },
    buyables: {
        11: {
            title: "Human Metas",
            unlocked() { return hasUpgrade("mH", 13) },
            cost(x) {
                let exp1 = new Decimal(1.6)
                let exp2 = new Decimal (1.1005)
                if (getBuyableAmount(this.layer, this.id).gte(20)) exp2 = exp2.add(0.05)
                if (getBuyableAmount(this.layer, this.id).gte(50)) exp2 = exp2.add(0.1)
                return new Decimal(250).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Humans" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost Meta-Experiments gain by x" + format(buyableEffect(this.layer, this.id))
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal (1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let base1 = new Decimal(3.5)
                let base2 = x
                let expo = new Decimal(1.04)
                let eff = base1.pow(Decimal.pow(base2, expo))
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
            cost: new Decimal(5),
            unlocked(){
                return hasUpgrade('mH', 11)
            },
        },
        13: {
            title: "Superization",
            description: "Unlock 'Human Metas' Buyable as another shift into meta.",
            cost: new Decimal(45),
            unlocked(){
                return hasUpgrade('mH', 12)
            },
        },
        14: {
            title: "Algutate",
            description: "1e15x Infects & 1e9x Meta-Crystals, also automate mE Buyables",
            cost: new Decimal(1e15),
            unlocked(){
                return getBuyableAmount('mH', 11).gte(10) && hasUpgrade('mH', 13)
            },
        },
    },
})