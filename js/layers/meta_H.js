addLayer("mH", {
    name: "Meta-Humans", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "mH", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 4, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        best: new Decimal(0),
    }},

    color: "#5bd6cd",
    requires(){ 
        let requirement = new Decimal("1e99")
        return requirement
        
    }, // Can be a function that takes requirement increases into account
    resource: "Meta-Humans", // Name of prestige currency
    baseResource: "Meta-Experiments", // Name of resource prestige is based on
    baseAmount() {return player.mE.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent(){ 
        let expo1 = 3.1
        return expo1
     }, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let expo = new Decimal(1)
        return expo
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "H", description: "shift+H: reset for Meta-Humans", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {return true},
    layerShown() {
        let value = false
        if (hasMilestone('mE', 17) || player.mH.unlocked) value = true
        return value
    },
milestones: {
        11: {
            requirementDescription: "1 Meta-Humans",
            effectDescription: `Keep the current Meta-Crystals Milestones & Upgrades`,
            done() { return player.mH.points.gte(1) },
        },
        12: {
            requirementDescription: "3 Meta-Humans",
            effectDescription: `Keep the current Meta-Experiment Milestones & Upgrades`,
            done() { return player.mH.points.gte(3) },
        },
    },
upgrades: {
    rows: 4,
    cols: 4,
        11: {
            title: "Humanizating Meta",
            description: "100x Infects & 20x Meta-Experiments",
            cost: new Decimal(1),
            unlocked(){
                return player.mH.unlocked
            },
        },
        12: {
            title: "Meta MeTa META!!",
            description: "Quadruple Meta-Crystals & 1,500x Infects",
            cost: new Decimal(1),
            unlocked(){
                return hasUpgrade('mH', 11)
            },
        },
        13: {
            title: "Superization",
            description: "15x 'Experiment Regime IV' & 'Experiment Regime II'. 4e9x Meta-Experiments",
            cost: new Decimal(2),
            unlocked(){
                return hasUpgrade('mH', 12)
            },
        },
        14: {
            title: "Algutate",
            description: "1e15x Infects & 1e9x Meta-Crystals, also automate mE Buyables",
            cost: new Decimal(3),
            unlocked(){
                return hasUpgrade('mH', 13)
            },
        },
        21: {
            title: "Bloomative",
            description: "Break mC-U3 Cap not have a cap for a while!",
            cost: new Decimal(3),
            unlocked(){
                return hasMilestone('mH', 12)
            },
        },
        22: {
            title: "Desolative",
            description: "Meta-Humans boost Meta-Crystal effect significantly",
            cost: new Decimal(3),
            effect() {
                let eff = ((player.mH.points.div(12.5)).add(1).max(0)).max(1).min(3);
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(3) ? "(Capped)" : "";
                let text = `+^${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
            unlocked(){
                return hasUpgrade('mH', 21)
            },
        },
    },
})