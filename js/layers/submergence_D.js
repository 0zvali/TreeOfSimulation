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
    resource: "Distortion", // Name R prestige currency
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
        if (hasUpgrade('O', 23)) eff = eff.times(9.4)
        if (hasUpgrade('D', 21)) eff = eff.pow(2.2)
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
    tabFormat: {
        "Main Distortion": {
            content: [
                "main-display",
                "blank",
                "prestige-button",
                "blank",
                ["display-text",
                    function () { return 'You have ' + formatWhole(player.D.best) + ' best Distortion.' },
                    {}],
                ["display-text",
                    function () { return 'You have ' + formatWhole(player.D.total) + ' total Distortion.' },
                    {}],
                "blank",
                "milestones",
                "blank",
                ["upgrades", [1]],
            ]
        },
        "Distortion Rows 2 & 3": {
            content: [
                "main-display",
                "blank",
                "prestige-button",
                "blank",
                ["display-text",
                    function () { return 'You have ' + formatWhole(player.D.best) + ' best Distortion.' },
                    {}],
                ["display-text",
                    function () { return 'You have ' + formatWhole(player.D.total) + ' total Distortion.' },
                    {}],
                "blank",
                ["bar", "bigBar"],
                "blank",
                ["upgrades", [2]],
                "blank",
                ["bar", "big2Bar"],
            ]
        },
        "Distortion Challenges": {
            content: [
                "main-display",
                "blank",
                "prestige-button",
                "blank",
                ["display-text",
                function () { return 'You have ' + formatWhole(player.D.best) + ' best Distortion.' },
                {}],
                ["display-text",
                function () { return 'You have ' + formatWhole(player.D.total) + ' total Distortion.' },
                {}],
                "blank",
                "challenges",
            ]
        },
    },
    bars: {
        bigBar: {
            direction: RIGHT,
            width: 670,
            height: 50,
            fillStyle: { 'background-color': "#107a2c" },
            borderStyle() { return { "border-color": "#9DD1C2" } },
            progress() {
                let prog = player.O.points.div("1e1500")
                if (player.O.best.gte("1e1500")) prog = 1
                if (hasUpgrade('D', 25)) prog = player.O.points.div("1e8500")
                if (player.O.best.gte("1e8500")) prog = 1
                return prog
            },
            display() {
                if (player.O.best.lte("9.99e1499"))
                    return format(player.O.points) + "/1e1500 Obfuscation"
                if (player.O.best.gte("1e1500"))
                    return "Unlock Row 2 Designated Distortion Upgrades"
                if (hasUpgrade('D', 25) && player.O.best.lte("9.99e8499"))
                    return "Unlock Row 2 Designated Distortion Upgrades<br>" + format(player.O.points) + " /1e8500 Obfuscation"
                else
                    return "Unlock Row 2 Designated Distortion Upgrades<br> Unlock 2nd Row 2 Designated Distortion Upgrades"
            },
            unlocked(){
                return hasUpgrade('D', 12)
            },
        },
        big2Bar: {
            direction: RIGHT,
            width: 670,
            height: 50,
            fillStyle: { 'background-color': "#107a2c" },
            borderStyle() { return { "border-color": "#9DD1C2" } },
            progress() {
                let prog = player.SL.points.div("1e666666")
                if (player.SL.best.gte("1e666666")) prog = 1
                return prog
            },
            display() {
                if (player.O.best.lte("9.99e666665"))
                    return format(player.SL.points) + "/1e666,666 Souls"
                else
                    return "Unlock Row 3 Designated Distortion Upgrades"
            },
            unlocked(){
                return hasUpgrade('D', 15)
            },
        },
    },
    milestones: {
        11: {
            requirementDescription: "300,000,000 Distortion",
            effectDescription(){ 
                let des
                des = `Passively Gain 1e50x R Everything (Except Obfuscation, Weapons, and Distortion)<br> Now that's fast!`
                return des
            },
            done() { return player.D.points.gte(300000000) && hasUpgrade('D', 21)},
            unlocked() { return hasUpgrade('D', 21)}
        },
        12: {
            requirementDescription: "Placeholder I",
            effectDescription(){ 
                let des
                des = ` `
                return des
            },
            done() { return player.D.points.gte("1e999") && hasUpgrade('D', 25)},
            unlocked() { return hasUpgrade('D', 25)}
        },
        13: {
            requirementDescription: "Placeholder II",
            effectDescription(){ 
                let des
                des = ` `
                return des
            },
            done() { return player.D.points.gte("1e999") && hasUpgrade('D', 25)},
            unlocked() { return hasUpgrade('D', 25)}
        },
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
        12: {
            title(){ 
                let title = "Distorted Floors"
                return title
            },
            description: "1e355x Floors & Unlock more O Upgrades",
            cost: new Decimal(100),
            unlocked(){
                return hasUpgrade('D', 11)
            },
        },
        13: {
            title(){ 
                let title = "Distorted Explosives"
                return title
            },
            description: "Floors boosts Explosives (Cap is x1e18500) & x1e600 Fusions",
            cost: new Decimal(25000),
            effect() {
                let effect1 = (player.FL.points.max(1).add(1).pow(0.021)).max(1).min("1e18500");
                return effect1
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked(){
                return hasUpgrade("O", 25) && hasUpgrade("D", 12)
            },
        },
        14: {
            title(){ 
                let title = "Distorted Crystals II"
                return title
            },
            description: "Crystals boosts Floors (Cap is x1e4900) & x1e675 Humans",
            cost: new Decimal(125000),
            effect() {
                let effect1 = (player.c.points.max(1).add(1).pow(0.014)).max(1).min("1e4900");
                return effect1
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked(){
                return hasUpgrade("D", 13)
            },
        },
        15: {
            title(){ 
                let title = "Distorted Floors II"
                return title
            },
            description: "Floors boosts itself (Cap is x1e6600) & x1e354 Rooms",
            cost: new Decimal(1950000),
            effect() {
                let effect1 = (player.FL.points.max(1).add(1).pow(0.00305)).max(1).min("1e6600");
                return effect1
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked(){
                return hasUpgrade("D", 14)
            },
        },
        21: {
            title(){ 
                let title = "Distorted Experiments"
                return title
            },
            description: "Experiments now boosts Explosives & Floors significantly (Cap is 1e16700x). ^2.2 Distortion Effect. Unlock an Distortion Milestone",
            cost: new Decimal(120000000),
            effect() {
                let effect1 = (player.E.points.max(1).add(1).pow(0.017)).max(1).min("1e16700");
                return effect1
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked(){
                return player.O.points.gte("1e1500")
            },
        },
        22: {
            title(){ 
                let title = "Distorted Souls"
                return title
            },
            description: "1e400x Souls & 1e150x Soul Effect I",
            cost: new Decimal(730000000),
            unlocked(){
                return  player.O.points.gte("1e1500")
            },
        },
        23: {
            title(){ 
                let title = "Distorted Rows"
                return title
            },
            description: "Only Distortion resets previous stuff...What's going on? 1e666x Infects",
            cost: new Decimal(1.3e9),
            unlocked(){
                return  player.O.points.gte("1e1500")
            },
        },
        24: {
            title(){ 
                let title = "Distorted Experiments II"
                return title
            },
            description: "Distortion boosts Experiment Effect (Cap is ^1.35). Passively Gain 25% Weapons until 1e10000",
            cost: new Decimal(4.9e10),
            effect() {
                let effect1 = (player.D.points.max(1).add(1).log10(3).pow(0.011)).max(1).min(1.35);
                return effect1
            },
            effectDisplay() { return "+^"+ format(upgradeEffect(this.layer, this.id))},
            unlocked(){
                return  player.O.points.gte("1e1500")
            },
        },
        25: {
            title(){ 
                let title = "Distorted Souls II (Endgame Currently)"
                return title
            },
            description: "1e390x Souls & Souls boosts Explosives significantly (Cap is 1e394500x), unlock 2 Milestones",
            cost: new Decimal(2.9e12),
            effect() {
                let effect1 = (player.SL.points.max(1).add(1).pow(0.032)).max(1).min("1e394500");
                return effect1
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            unlocked(){
                return  player.O.points.gte("1e1500")
            },
        },
    },
})