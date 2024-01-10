addLayer("mE", {
    name: "Meta-Experiments", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "mE", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 4, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        best: new Decimal(0),
    }},

    color: "#9aa3cd",
    requires(){ 
        let requirement = new Decimal("5e10")
        return requirement
        
    }, // Can be a function that takes requirement increases into account
    resource: "Meta-Experiments", // Name of prestige currency
    baseResource: "Meta-Crystals", // Name of resource prestige is based on
    baseAmount() {return player.mC.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.25, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let expo = new Decimal(1)
        return expo
    },
    effect() {
        let eff4 = player.mE.points.add(1).pow(0.35)
        eff4 = eff4.times(tmp.mE.effectBase)
        return eff4
    },
    effectBase() {
        let base = new Decimal(1) 
        return base
    },
    effectDescription() {
        let dis = "which boosts 'MC Upgrade 3' by "+ format(tmp.mE.effect) + "x"
        return dis
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "E", description: "shift+E: reset for Meta-Experiments", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {return true},
    layerShown() {
        let value = false
        if (hasUpgrade('mC', 26) || player.mE.unlocked) value = true
        return value
    },
milestones: {
        11: {
            requirementDescription: "1 Meta-Experiments",
            effectDescription: `MC Req. /2.5 & 1.2x Infects`,
            done() { return player.mE.points.gte(1) },
        },
    },
    buyables: {
        11: {
            title: "Experiment Regime I",
            unlocked() { return hasUpgrade("mE", 11) },
            cost(x) {
                let exp1 = 1.2
                let exp2 = 1.1005
                if (hasUpgrade('mE', 13)) exp1 = 1.15 // hell yea!
                return new Decimal(2).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Experiments" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost Meta-Crystal(s) gain by x" + format(buyableEffect(this.layer, this.id)) + " (1.46*x^1.012)"
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
                let base1 = new Decimal(1.46)
                let base2 = x
                let expo = new Decimal(1.012)
                if (hasUpgrade('mE', 12)) base1 = base1.add(0.12)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        12: {
            title: "Experiment Regime II",
            unlocked() { return hasUpgrade("mE", 13) },
            cost(x) {
                let exp2 = 1.2
                return new Decimal(50).mul(Decimal.pow(1.2, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Experiments" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost infect gain by x" + format(buyableEffect(this.layer, this.id))
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
                let base1 = new Decimal(1.5)
                let base2 = x
                let expo = new Decimal(1.05)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
    },
upgrades: {
    rows: 6,
    cols: 3,
        11: {
            title: "Meta-Nyko",
            description: "Quadtruple Infect gain with another smaller boost based on infects, while boosting MC effect base by deformed formula balanced by a limited rate. Meta-Crystals are slightly boosted by a smaller rate of the original formula [xInf (xMC, +MCe)]",
            cost: new Decimal(2),
            effect() {
                let eff = (player.points.max(1).add(2).pow(0.016).times(4)).max(1).min(4000);
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(4000) ? "(Capped)" : "";
                let text = `x${format(upgradeEffect(this.layer, this.id))} (x${format(upgradeEffect(this.layer, this.id).div(2.4))}, +${format(upgradeEffect(this.layer, this.id).div(6.2))}) ${capped}`;
                return text;
            },
            unlocked(){
                return player.mE.unlocked
            },
        },
        12: {
            title: "Meta-Abys",
            description: "Have 'Experimental Regime I' get a slightly better effect than normal!",
            cost: new Decimal(50),
            unlocked(){
                return hasUpgrade('mE', 11)
            },
        },
        13: {
            title: "Meta-Cyberruin",
            description: "Unlock the next buyable & have 'Experimental Regime I' be slightly cheaper... because why not?",
            cost: new Decimal(200),
            unlocked(){
                return hasUpgrade('mE', 12)
            },
        },
        14: {
            title: "Meta-Lovebeast",
            description: "Reduce the Infect Nerf (Level 1 -> 3 Nerf) by 60%",
            cost: new Decimal(600),
            unlocked(){
                return hasUpgrade('mE', 13)
            },
        },
    },
})