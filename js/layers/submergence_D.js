addLayer("D", {
    name: "Distortion", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "D", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        best: new Decimal(0),
    }},
    color(){ 
        let color = `#87143b`
        return color
    },
    nodeStyle() {return {
        "background": (player.D.unlocked||canReset("D"))?"radial-gradient(#87143b, #9DD1C2)":"#bf8f8f" ,
    }},
    requires(){ 
        let requirement = new Decimal("4e2000");
        return requirement
    },
    resource: "Distortion", // Name of prestige currency
    baseResource: "infects", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.0001, // Prestige currency exponent
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
        let eff = player.D.points.add(1).pow(0.4)
        eff = eff.times(tmp.D.effectBase)
        return eff
    },
    effectDescription() {
        dis = "which is boosting Humans, Souls, & Experiment gain by "+format(tmp.D.effect)+"x"
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
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "d", description: "d: reset for Distortion", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {
        let value = false
        if (hasUpgrade('O', 15)) value = true
        return value
    },
    milestones: {
    },
    upgrades: {
        rows: 2,
        cols: 5,
        11: {
            title(){ 
                let title = "Distorted Crystals"
                return title
            },
            description: "1e694x Crystals",
            cost: new Decimal(1),
            unlocked(){
                return player.D.points.gte(0)
            },
        },
    },
})