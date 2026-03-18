addLayer("cC", {
    name: "Corrupted Crystals", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "cC", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 5, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        best: new Decimal(0),
        generator: new Decimal(0),
        generator2: new Decimal(0),
    }},

    color: "#b447cf",
    requires(){ 
        let requirement = new Decimal("7000")
        if (hasUpgrade('cC', 12)) requirement = requirement.times(0.7)
        if (hasUpgrade('cC', 31)) requirement = requirement.div(upgradeEffect('cC', 31))
        return requirement
        
    }, // Can be a function that takes requirement increases into account
    resource: "Corrupted Crystals", // Name of prestige currency
    baseResource: "infects",
    baseAmount() {return player.points}, 
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    style() {
                    return {
                        'background': 'transparent',
                        'background-image': 'radial-gradient(ellipse at top, #69127ad8, transparent),radial-gradient(ellipse at bottom, #b338cc, transparent)',
                        'background-color': 'transparent',
                        'background-size': '100% 100%',
                        "background-position": "center"
                    }
                },
    exponent(){ 
    let expo = new Decimal(0.31)
    return expo
}, // Prestige currency exponent (can be changed/adjusted)
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        if (hasUpgrade('cC', 15)) mult = mult.times(upgradeEffect('cC', 15))
        if (hasUpgrade('cC', 34)) mult = mult.times(upgradeEffect('cC', 34))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let expo = new Decimal(1)
        return expo
    },
    
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "p: reset for Corrupted Crystals", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > this.row) layerDataReset(this.layer)
    },
    passiveGeneration() {
        let value1 = new Decimal(0);
        return value1
    },
    layerShown() {
        let value = false
        if (player.CT.points.gte(2) && inChallenge('CT', 32)) value = true
        return value
    },
    tabFormat: {
        "Corruption": {
            content: [
                "main-display",
                "blank",
                "prestige-button",
                ["display-text",
                    function () { 
                        if (hasUpgrade('cC', 11)) return 'You have ' + format(player.cC.generator) + ' <glow-text>Corruptive Generator Points</glow-text>,<br>which is boosting infect gain by ' + format(tmp.cC.effect2) + 'x' 
                    },
                    {}],
                "blank",
                ["display-text",
                    function () { 
                        if (hasUpgrade('cC', 23)) return 'You have ' + format(player.cC.generator2) + ' <glow-text>Secondary Corruptive Generator Points</glow-text>,<br>which is boosting <glow-text>Corruptive Generator Points</glow-text> by ' + format(tmp.cC.effect3) + 'x' 
                    },
                    {}],
                "blank",
                "h-line",
                "blank",
                "upgrades"
            ],
        },
    },

    effect(){
        if (!hasUpgrade('cC', 11)) 
            return new Decimal(0)
        let eff = Decimal.pow(player.cC.points, this.effBase()).sub(1).max(0);
        if (hasUpgrade('cC', 14)) eff = eff.times(upgradeEffect('cC', 14))
        if (hasUpgrade('cC', 21)) eff = eff.times(2)
        if (hasUpgrade('cC', 22)) eff = eff.times(3)
        if (player.cC.generator2.gte(1)) eff = eff.times(tmp.cC.effect3)
        if (hasUpgrade('cC', 32)) eff = eff.times(10)
        if (hasUpgrade('cC', 33)) eff = eff.times(65.3)
        if (hasUpgrade('cC', 35)) eff = eff.times(upgradeEffect('cC', 35))
        return eff
    },
    effBase() {
        let base = new Decimal(0.25)
        if (hasUpgrade('cC', 41)) base = base.add(0.65)
        return base
    },

    effect2(){
        if (!hasUpgrade('cC', 11)) 
            return new Decimal(0)
        let eff = player.cC.generator.pow(0.13).max(1)
        if (hasUpgrade('cC', 13)) eff = eff.times(1.25)
        if (hasUpgrade('cC', 24)) eff = eff.times(4.9)
        if (hasUpgrade('cC', 32)) eff = eff.times(10)
        if (hasUpgrade('cC', 35)) eff = eff.times(upgradeEffect('cC', 35))
        return eff
    },

    effect3(){
        if (!hasUpgrade('cC', 23)) 
            return new Decimal(0)
        let eff = player.cC.generator2.pow(0.19).max(1)
        if (hasUpgrade('cC', 24)) eff = eff.times(2.13)
        if (hasUpgrade('cC', 32)) eff = eff.times(10)
        if (hasUpgrade('cC', 35)) eff = eff.times(upgradeEffect('cC', 35))
        if (hasUpgrade('cC', 42)) eff = eff.pow(1.6)
        return eff
    },

    gen2effect(){
        let gen = tmp.cC.effect.div(19)
        if (hasUpgrade('cC', 25)) gen = gen.times(tmp.cC.effect2)
        return gen
    },

    effectDescription() {
        if (hasUpgrade('cC', 11)) return "which are generating " + format(tmp.cC.effect) + " Corruptive Generator Power/sec"
        else return ""
    },

    update(diff) {
        if (player.cC.unlocked && hasUpgrade('cC', 11))
            player.cC.generator = player.cC.generator.plus(tmp.cC.effect.times(diff));
        if (hasUpgrade('cC', 23)) 
            player.cC.generator2 = player.cC.generator2.plus(tmp.cC.gen2effect.times(diff));

    },

upgrades: {
        rows: 6,
        cols: 6,
        11: {
            title: "<glow-text>Corrupted Experiment</glow-text>",
            description: "Unlock <glow-text>Corrupted Generator Points</glow-text>",
            cost: new Decimal(3),
            unlocked(){
                return player.cC.points.gte(0)
            },
        },
        12: {
            title: "<glow-text>Generative Buff</glow-text>",
            description: "Lower Corruptive Crystal Requirement by 30%",
            cost: new Decimal(20),
            currencyInternalName: "generator",
            currencyDisplayName: "Corruptive G-Points",
            currencyLayer: "cC",
            unlocked(){
                return hasUpgrade('cC', 11)
            },
        },
        13: {
            title: "<glow-text>Repairing the Timeline</glow-text>",
            description: "Improve CG-Effect by a decent amount.",
            cost: new Decimal(100),
                currencyInternalName: "generator",
                currencyDisplayName: "Corruptive G-Points",
                currencyLayer: "cC",
            unlocked(){
                return hasUpgrade('cC', 12)
            },
        },
        14: {
            title: "<glow-text>Blossoming Purple</glow-text>",
            description: "CGPoints now boosts itself slightly",
            cost: new Decimal(50),
            effect() {
                let eff = (player.cC.generator.max(1).add(2).pow(0.13)).max(1).min(30);
                if (hasUpgrade('cC', 43)) eff = (player.cC.generator.max(1).add(2).pow(0.2)).max(1).min(1e99);
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(30) ? "(Capped)" : "";
                if (hasUpgrade('cC', 43)) capped = upgradeEffect(this.layer, this.id).gte(1e99) ? "(Capped)" : "";
                let text = `x${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
            unlocked(){
                return hasUpgrade('cC', 13)
            },
        },
        15: {
            title: "<glow-text>Breaking the Generator</glow-text>",
            description: "CGPoints now boost Corrupted Crystal Gain",
            cost: new Decimal(500),
            currencyInternalName: "generator",
            currencyDisplayName: "Corruptive G-Points",
            currencyLayer: "cC",
            effect() {
                let eff = (player.cC.generator.max(1).add(1.4).pow(0.19)).max(1).min(20);
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(20) ? "(Capped)" : "";
                let text = `x${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
            unlocked(){
                return hasUpgrade('cC', 14)
            },
        },
        21: {
            title: "<glow-text>Double Stacking Generators</glow-text>",
            description: "Double the Generator Output from Corruptive Crystals",
            cost: new Decimal(120),
            unlocked(){
                return hasUpgrade('cC', 15)
            },
        },
        22: {
            title: "<glow-text>Triple Stacking Generators</glow-text>",
            description: "Triple the Generator Output from Corruptive Crystals",
            cost: new Decimal(2300),
            currencyInternalName: "generator",
            currencyDisplayName: "Corruptive G-Points",
            currencyLayer: "cC",
            unlocked(){
                return hasUpgrade('cC', 21)
            },
        },
        23: {
            title: "<glow-text>Corruptive Approach</glow-text>",
            description: "Unlock Another Corruptive Generator",
            cost: new Decimal(10000),
            currencyInternalName: "generator",
            currencyDisplayName: "Corruptive G-Points",
            currencyLayer: "cC",
            unlocked(){
                return hasUpgrade('cC', 22)
            },
        },
        24: {
            title: "<glow-text>Upgraded Generators</glow-text>",
            description: "Improve Both Generator Effects",
            cost: new Decimal(300),
            unlocked(){
                return hasUpgrade('cC', 23)
            },
        },
        25: {
            title: "<glow-text>Synergy Power</glow-text>",
            description: "CGEffect now boosts 2nd-CG Gain",
            cost: new Decimal(140000),
            currencyInternalName: "generator",
            currencyDisplayName: "Corruptive G-Points",
            currencyLayer: "cC",
            unlocked(){
                return hasUpgrade('cC', 24)
            },
        },
        31: {
            title: "<glow-text>Overflowing Power</glow-text>",
            description: "Lower Corruptive Crystals requirement based on infects",
            cost: new Decimal(260000),
            currencyInternalName: "generator2",
            currencyDisplayName: "2nd CG-Points",
            currencyLayer: "cC",
            effect() {
                let eff = (player.points.max(1).add(1.4).pow(0.1)).max(1).min(25);
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(25) ? "(Capped)" : "";
                let text = `x${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
            unlocked(){
                return hasUpgrade('cC', 25)
            },
        },
        32: {
            title: "<glow-text>Metaficate the Generators</glow-text>",
            description: "Tenfold all effects in Corruptive Crystals",
            cost: new Decimal(1000000),
            currencyInternalName: "generator2",
            currencyDisplayName: "2nd CG-Points",
            currencyLayer: "cC",
            unlocked(){
                return hasUpgrade('cC', 31)
            },
        },
        33: {
            title: "<glow-text>Purifying Crystals</glow-text>",
            description: "Corrupted Crystals become stronger...",
            cost: new Decimal(15000),
            unlocked(){
                return hasUpgrade('cC', 32)
            },
        },
        34: {
            title: "<glow-text>Purifying Crystals</glow-text>",
            description: "Improve Corrupted Crystals Gain based on infects",
            cost: new Decimal("1.1e12"),
            currencyInternalName: "generator",
            currencyDisplayName: "Corruptive G-Points",
            currencyLayer: "cC",
            unlocked(){
                return hasUpgrade('cC', 33)
            },
            effect() {
                let eff = (player.points.max(1).add(1.7).pow(0.135)).max(1).min(44);
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(44) ? "(Capped)" : "";
                let text = `x${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
        },
        35: {
            title: "<glow-text>Perfect Synergy</glow-text>",
            description: "Improve all cC Effects based on infects",
            cost: new Decimal(100000),
            unlocked(){
                return hasUpgrade('cC', 34)
            },
            effect() {
                let eff = (player.points.max(1).add(1.83).pow(0.155)).max(1).min(55);
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(55) ? "(Capped)" : "";
                let text = `x${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
        },
        41: {
            title: "<glow-text>Generative Mess </glow-text>",
            description: "Improve Corrputed Crystals Effect Formula",
            cost: new Decimal(400000),
            unlocked(){
                return hasUpgrade('cC', 35)
            },
        },
        42: {
            title: "<glow-text>Secondary Perfection</glow-text>",
            description: "Raise Secondary Generator Effect by the 1.6th power",
            cost: new Decimal("2e10"),
            currencyInternalName: "points",
            currencyDisplayName: "infects",
            unlocked(){
                return hasUpgrade('cC', 41)
            },
        },
        43: {
            title: "<glow-text>Secondary Perfection</glow-text>",
            description: "<glow-text>Blossoming Purple</glow-text> is much stronger, and the cap is removed",
            cost: new Decimal(5000000),
            unlocked(){
                return hasUpgrade('cC', 42)
            },
        },
    },
})