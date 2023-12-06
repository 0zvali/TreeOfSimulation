addLayer("O", {
    name: "Obfuscation", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "O", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
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
        let requirement = new Decimal(4e20);
        if (inChallenge('CT', 22)) requirement = requirement.pow(100)
        if (player.O.points >= 1) requirement = requirement.pow(25)
        return requirement
    },
    resource: "Obfuscation", // Name of prestige currency
    baseResource: "Souls", // Name of resource prestige is based on
    baseAmount() {return player.SL.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.013, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('O', 15)) mult = mult.times(1e30)
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
        let eff = player.O.points.add(2).pow(0.32)
        if (hasUpgrade('O', 21)) eff = eff.times(1e30)
        eff = eff.times(tmp.O.effectBase)
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
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "o", description: "s: reset for Obfuscation", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {
        let value = false
        if (player.SL.points >= 1e20 || player.O.unlocked) value = true
        return value
    },
    milestones: {
        11: {
            requirementDescription: "1 Obfuscation",
            effectDescription(){ 
                let des
                des = `Obfuscating Time...<br> Keep Soul Upgrades on reset`
                return des
            },
            done() { return player.O.points.gte(1)},
            unlocked() { return hasChallenge('CT', 22)},
        },
        12: {
            requirementDescription: "50 Obfuscation",
            effectDescription(){ 
                let des
                des = `^1.3 Weapons`
                return des
            },
            done() { return player.O.points.gte(50)},
            unlocked() { return hasMilestone('O', 11)},
        },
    },
    upgrades: {
        rows: 2,
        cols: 5,
        11: {
            title(){ 
                let title = "Ob-fusion-ing"
                return title
            },
            description: "^1.1 Humans, ^1.15 Fusions, ^1.1 Weapons, ^1.03 Floors, Decrease Human Requirement significantly. Weapons boost Weapons slightly",
            cost: new Decimal(650),
            effect() {
                let effect1 = (player.W.points.max(1).add(1.3).pow(0.2)).max(1).min(140000);
                return effect1
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(140000) ? "(Capped)" : "";
                let text = `x${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
            unlocked(){
                return hasMilestone("O", 12)
            },
        },
        12: {
            title(){ 
                let title = "Ob-Humanization"
                return title
            },
            description: "^1.2 Explosives, ^1.1 Crystals, ^1.35 Rooms, ^1.2 Experiments, Decrease Fusion Requirement significantly. Rooms boosts Weapons slightly",
            cost: new Decimal(300000000),
            effect() {
                let effect1 = (player.R.points.max(1).add(1).pow(0.13)).max(1).min(600000);
                return effect1
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(600000) ? "(Capped)" : "";
                let text = `x${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
            unlocked(){
                return hasUpgrade("O", 11)
            },
        },
        13: {
            title(){ 
                let title = "Deobfuscation"
                return title
            },
            description: "^1.2 all Effects, Humans Divide Fusion Requirement (Cap is /1e10)",
            cost: new Decimal(1.2e14),
            effect() {
                let effect1 = (player.H.points.max(1).add(1).pow(0.005)).max(1).min(1e10);
                return effect1
            },
            effectDisplay() { return "/"+format(upgradeEffect(this.layer, this.id)) },
            unlocked(){
                return hasUpgrade("O", 12)
            },
        },
        14: {
            title(){ 
                let title = "Ob-Room-ication"
                return title
            },
            description: "^1.1 Weapon Effect, Weapons Divide Room Gain Significantly (Cap is /1e20), also unlock an...crystal milestone?",
            cost: new Decimal(7.5e106),
            effect() {
                let effect1 = (player.W.points.max(1).add(1).pow(0.075)).max(1).min(1e20);
                return effect1
            },
            effectDisplay() { return "/"+format(upgradeEffect(this.layer, this.id)) },
            unlocked(){
                return hasUpgrade("O", 13)
            },
        },
        15: {
            title(){ 
                let title = "Obfuscationing (Highest is 1e134 O. you can't go farther))"
                return title
            },
            description: "Unlock another Layer & 1e30x Obfuscation",
            cost: new Decimal(1.8e185),
            unlocked(){
                return hasUpgrade("O", 14)
            },
        },
        21: {
            title(){ 
                let title = "Timeification"
                return title
            },
            description: "x1e30 O Effect, x1e50 Room Effect, x1e5 Weapon Effect",
            cost: new Decimal("3.14e332"),
            unlocked(){
                return hasUpgrade("O", 15) && hasUpgrade('D', 12)
            },
        },
        22: {
            title(){ 
                let title = "Fusionization"
                return title
            },
            description: "x1e170 Fusion Effect & x1e130 Experiment Effect",
            cost: new Decimal("1.3e385"),
            unlocked(){
                return hasUpgrade("O", 21)
            },
        },
        23: {
            title(){ 
                let title = "Obusate Rooming"
                return title
            },
            description: "x9.4 Distortion Effect & x1e50 Rooms",
            cost: new Decimal("5.8e583"),
            unlocked(){
                return hasUpgrade("O", 22)
            },
        },
        24: {
            title(){ 
                let title = "Explosivation"
                return title
            },
            description: "Explosives does something again holy cow! Explosives boosts Floors Significantly (Cap is 1e1500x)",
            cost: new Decimal("1.8e649"),
            effect() {
                let effect1 = (player.EX.points.max(1).add(1).pow(0.004)).max(1).min("1e1500");
                return effect1
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked(){
                return hasUpgrade("O", 23)
            },
        },
    },
})