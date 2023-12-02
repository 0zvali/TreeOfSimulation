addLayer("O", {
    name: "Obfuscation", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "O", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        best: new Decimal(0),
    }},
    color(){ 
        let color = `#c7148b`
        return color
    },
    nodeStyle() {return {
        "background": (player.O.unlocked||canReset("O"))?"radial-gradient(#c7148b, #516fc2)":"#bf8f8f" ,
    }},
    requires(){ 
        let requirement = new Decimal(1e999);
        return requirement
    },
    resource: "Obfuscation", // Name of prestige currency
    baseResource: "Souls", // Name of resource prestige is based on
    baseAmount() {return player.SL.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.55, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        return exp
    },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > this.row) layerDataReset(this.layer)
    },
    effect() {
        let eff = player.O.points.add(1.25).pow(0.32)
        eff = eff.times(tmp.SL.effectBase)
        return eff
    },
    effectDescription() {
        dis = "which is boosting floor & soul gain by "+format(tmp.O.effect)+"x"
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
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "o", description: "s: reset for Obfuscation", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {
        let value = false
        if (player.SL.points >= 1e21) value = true
        return value
    },
milestones: {
},

upgrades: {
        rows: 2,
        cols: 5,
},
})