addLayer("mC", {
    name: "Meta-Crystals", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "mC", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 4, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        best: new Decimal(0),
    }},

    color: "#75d7ed",
    requires(){ 
        let requirement = new Decimal("4500")
        if (hasUpgrade('mC', 13)) requirement = requirement.div(upgradeEffect('mC', 13))
        return requirement
        
    }, // Can be a function that takes requirement increases into account
    resource: "Meta-Crystals", // Name of prestige currency
    baseResource: "infects",
    baseAmount() {return player.points}, 
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent(){ 
              let expo = 0.39
              if (hasUpgrade('mC', 15)) expo = 0.43 
              return expo
}, // Prestige currency exponent (can be changed/adjusted)
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        if (hasUpgrade('mC', 14)) mult = mult.times(upgradeEffect('mC', 14))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let expo = new Decimal(1)
        return expo
    },
    effect() {
        let eff4 = player.mC.points.add(1).pow(0.383)
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
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "C", description: "shift+C: reset for Meta-Crystals", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {return true},
    layerShown() {
        let value = false
        if (player.CT.points.gte(2)) value = true
        return value
    },
upgrades: {
        rows: 6,
        cols: 6,
        11: {
            title: "Meta-Feelings",
            description: "Infects boosts itself (simplicity?)",
            cost: new Decimal(3),
            effect() {
                let eff = (player.points.max(1).add(1).pow(0.07)).max(1).min(150);
                if (hasUpgrade('mC', 14)) eff = (player.points.max(1).add(1).pow(0.07).times(4)).max(1).min(150);
            return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(150) ? "(Capped)" : "";
                let text = `x${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
            unlocked(){
                return player.mC.points.gte(0)
            },
        },
        12: {
            title: "Meta-Submergence",
            description: "Meta Crystals boosts infects",
            cost: new Decimal(12),
            effect() {
                let eff = (player.mC.points.max(1).add(1).pow(0.085)).max(1).min(999);
                if (hasUpgrade('mC', 16)) eff = (player.mC.points.max(1).add(1).pow(0.085).times(upgradeEffect('mC', 16)).max(1).min(999);
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(999) ? "(Capped)" : "";
                let text = `x${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
            unlocked(){
                return hasUpgrade('mC', 11)
            },
        },
        13: {
            title: "Welcome to the 2nd Generation",
            description: "Meta Crystals boosts itself whilst boosting infects by halved the effect.",
            cost: new Decimal(34),
            effect() {
                let eff =  (player.mC.points.max(1).add(2).pow(0.09)).max(1).min(1753.22);
                if (hasUpgrade('mC',16)) eff = (player.mC.points.max(1).add(2).pow(0.11).times(1.3)).max(1).min(1753.22);
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(1753.22) ? "(Capped)" : "";
                let text = `x${format(upgradeEffect(this.layer, this.id))} (x${format(upgradeEffect(this.layer, this.id).div(2))}) ${capped}`;
                return text;
            },
            unlocked(){
                return hasUpgrade('mC', 12)
            },
        },
        14: {
            title: "Meta-Reformation",
            description: "Quadtruple 'Meta-Feelings' and infects boosts Meta-Crystals",
            cost: new Decimal(120),
            effect() {
                return (player.points.max(1).add(1.5).pow(0.089)).max(1).min(773.66);
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(773.66) ? "(Capped)" : "";
                let text = `x${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
            unlocked(){
                return hasUpgrade('mC', 13)
            },
        },
        15: {
            title: "Meta-Crystalization",
            description: "Meta-Crystal Exponent is better (^0.39 > ^0.43)",
            cost: new Decimal(500),
            unlocked(){
                return hasUpgrade('mC', 14)
            },
        },
        16: {
            title: "Meta-Strength",
            description: "'Wot2ndG' is now slightly better and Meta-Crystals boost 'Meta-Submergence'.
            cost: new Decimal(1200),
            effect() {
                return (player.mC.points.max(1).add(1.8).pow(0.13)).max(1).min(666.66);
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(666.66) ? "(Capped)" : "";
                let text = `x${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
            unlocked(){
                return hasUpgrade('mC', 15)
            },
        },
    },
})