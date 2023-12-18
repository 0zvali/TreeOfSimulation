addLayer("mC", {
    name: "Meta Crystals", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "mC", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 4, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        best: new Decimal(0),
    }},

    color: "#75d7ed",
    requires(){ 
        let requirement = new Decimal("e1e10")
        return requirement
        
    }, // Can be a function that takes requirement increases into account
    resource: "Meta Crystals", // Name of prestige currency
    baseResource: "infects",
    baseAmount() {return player.points}, 
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.72, // Prestige currency exponent 
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let expo = new Decimal(1)
        return expo
    },
    effect() {
        let eff4 = player.mC.points.add(1).pow(0.463)
        eff4 = eff4.times(tmp.mC.effectBase)
        return eff4
    },
    effectBase() {
        let base = new Decimal(1) 
        return base
    },
    effectDescription() {
        let dis = "which boosts infect gain by " + format(tmp.mC.effect) + "x"
        return dis
    },
    row: 1,
}, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "C", description: "shift+C: reset for Meta-Crystals", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {return true},
    layerShown() {
        let value = false
        return value
    },
})