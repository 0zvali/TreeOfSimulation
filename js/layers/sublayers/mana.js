addLayer("rb", {
    name: "rebirths",
    symbol: "RB",
    position: 0,
    startData() { return {
        unlocked: true,
        points: new Decimal("0"),
    }},
    color: "4A8FFF",
    requires: new Decimal(1),
    resource: "rebirth",
    baseResource: "multiplier",
    baseAmount() { return player.p.points },
    type: "normal",
    exponent: 0.3,
    gainMult() {
        mult = new Decimal(1)
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 1,
    hotkeys: [
        {key: "r", description: "R: Reset for Rebirths", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    effect(){
        let eff = player.rb.points.times("1").add("1")
        return eff
        },
        effectDescription(){
        let des = "which is boosting multiplier by x" + format(tmp.rb.effect)
        return des
        },
})