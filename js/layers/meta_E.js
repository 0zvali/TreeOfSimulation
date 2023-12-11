addLayer("mE", {
    name: "Meta Experiments", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "mE", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        best: new Decimal(0),
    }},

    color: "#9aa3cd",
    requires(){ 
        let requirement = new Decimal("e1e10")
        return requirement
        
    }, // Can be a function that takes requirement increases into account
    resource: "Meta Experiments", // Name of prestige currency
    baseResource: "experiments", // Name of resource prestige is based on
    baseAmount() {return player.E.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.04, // Prestige currency exponent
    resetsNothing() {return hasUpgrade('D', 23)},
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let expo = new Decimal(1)
        return expo
    },
    effect() {
        let eff4 = player.mE.points.add(1).pow(0.004)
        eff4 = eff4.times(tmp.mE.effectBase)
        return eff4
    },
    effectBase() {
        let base = new Decimal(1) 
        return base
    },
    effectDescription() {
        dis = "which boosts experiment & 1st soul effect by ^"+format(tmp.mE.effect)
        return dis
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "E", description: "shift+E: reset for Meta-Experiments", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {return true},
    layerShown() {
        let value = false
        if (hasMilestone("D", 13)) value = true
        return value
    },
})