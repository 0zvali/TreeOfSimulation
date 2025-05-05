addLayer("mF", {
    name: "Meta-Fusions", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "mF", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 6, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() {
        return {
            unlocked: false,
            points: new Decimal(0),
            total: new Decimal(0),
            tower: new Decimal(0),
        }
    },

    color: "#cfba8a",
    requires() {
        let requirement = new Decimal(13)
        if (hasMilestone('mF', 15)) requirement = requirement.minus(1)
        return requirement

    }, // Can be a function that takes requirement increases into account
    resource: "Meta-Fusions", // Name of prestige currency
    baseResource: "Meta-Humans", // Name of resource prestige is based on
    baseAmount() { return player.mH.points }, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent() {
        let expo1 = new Decimal(12)
        return expo1
    }, // Prestige currency exponent
    effect() {
        let eff4 = player.mF.points.add(1).pow(1)
        eff4 = eff4.times(tmp.mF.effectBase)
        return eff4
    },
    effectBase() {
        let base = new Decimal(1)
        return base
    },
    effectDescription() {
        let dis = "which boosts all previous layers (Except Humans) by x" + format(tmp.mF.effect)
        return dis
    },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        if (hasMilestone('mF', 14)) mult = mult.times(2)
        if (hasUpgrade('mF', 44)) mult = mult.times(upgradeEffect('mF', 44))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let expo = new Decimal(1)
        return expo
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        { key: "F", description: "shift+F: reset for Meta-Fusions", onPress() { if (canReset(this.layer)) doReset(this.layer) } },
    ],
    layerShown() { return true },
    layerShown() {
        let value = false
        if (hasUpgrade('mH', 34) || player.mF.unlocked) value = true
        return value
    },

    update(diff) {
    },



    tabFormat: {
        "Tower of Space": {
            content: [
                "main-display",
                "blank",
                "prestige-button",
                ["milestones",[11]]
                ["display-text",
                    function () { return 'You have a total of ' + formatWhole(player.mF.total) + ' Meta-Fusions' },
                    {}],
                    ["display-text",
                        function () { return "<metabox>Infection Wall</metabox> is a barrier between the <text style='color:red'>Experiments</text> and <text style='color:orange'>Humans</text>. After 1e1500 Infects or in<br><chalbox>Facility's Redemptive Tower</chalbox>, <metabox>Infection Wall</metabox> will be nerfing your infect gain... <text style='color:cyan'>Exponentially</text><br><br>" },
                        {}],
                ["display-text",
                    function () { return "Redemption Tower Effect: " + format(challengeEffect("mF", 11)) + "x boost to Infect Gain" },
                    {}],
                    
                "blank",
                "challenges",
            ]
        },
    },

    challenges: {
        11: {
            name() {return ("<chalbox>Facility's Redemptive Tower</chalbox>")},
            challengeDescription() {return (`<metabox>Infection Wall</metabox> nerf is <text style="color:cyan">15%</text> stronger<br>
            <text style="color:red">Wot2ndG & Meta-Submergeance does nothing</text><br>
            For every OoMs,<br>Increase the <metabox>Infection Wall</metabox> nerf by <text style="color:cyan">0.1%</text>.<br>
            Each time you climb, whereever your infects reached will be the highest you reached that round<br>`)},
            canComplete: function() {return player.points.gte("1ee10")},
            goalDescription: "Climb the Tower as high as possible!<br><text style='color:orange'>Unlock 'Facility of Meta' at 1e2000 Infects!</text>",
            rewardDescription() {return (`Increase Infect Gain based on highest infects (on round) reached on Tower<br><br><text style="color:lime">Highest (Round) Infects Achieved</text>:<br><fatigue>`+formatWhole(player[this.layer].tower)+` (+ `+ formatWhole(player.points) +`)</fatigue><br>`)},
            rewardEffect() {
                let tower = new Decimal(player[this.layer].tower.log10().times(50).pow(1.3).max(1))
                if (isNaN(tower))
                    tower = new Decimal(1)
                
                return tower 
            },
            onExit() {
                player[this.layer].tower = new Decimal(player.points)
            },
            unlocked() {
                let unlock = true
                return unlock
            },
            style() {
                return {
                    "background" : "#636965",
                    "border-color" : "#a1170d",
                    "color" : "#bdbbbb",
                    "width": "380px"
                }
            }
        },
    },

    milestones: {
        11: {
            requirementDescription: "1 Meta-Fusions",
            effectDescription: `Keep the current Meta-Crystals Milestones & Upgrades`,
            done() { return player.mF.points.gte(1) },
        },
        12: {
            requirementDescription: "2 Total Meta-Fusions",
            effectDescription: `Keep the current Meta-Experiment Milestones & Upgrades & Buy max Meta-Humans`,
            done() { return player.mF.total.gte(2) },
        },
        13: {
            requirementDescription: "10 Total Meta-Fusions",
            effectDescription: `Meta-Humans don't reset anything; also 15% mC & mE passively`,
            done() { return player.mF.total.gte(10) },
        },
        14: {
            requirementDescription: "2 mF_B1's",
            effectDescription: `Double Meta-Fusion Gain`,
            done() { return (getBuyableAmount("mF", 11).gte(2)) },
        },
        15: {
            requirementDescription: "1 mF_B2's",
            effectDescription: `Lower Meta-Fusion Requirement by 1`,
            done() { return (getBuyableAmount("mF", 12).gte(1)) },
        },
    },

    buyables: {
        11: {
            title: "Fusionitive",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(1.1)
                let exp2 = new Decimal(1.05)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x, Decimal.pow(exp2, x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit) + "<br>Effect: Boost Meta-Experiment gain by x" + format(buyableEffect(this.layer, this.id))
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal(1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {
                let limit = new Decimal(10)
                return limit
            },
            effect(x) {
                let base1 = new Decimal(1500)
                let base2 = x
                let expo = new Decimal(1.2)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        12: {
            title() {
                let title = "Metativity (Locked)"
                if (hasUpgrade('mF', 42)) title = "Metativity"
                return title
            },
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(1.5)
                let exp2 = new Decimal(1.1)
                let costdef = new Decimal(1e7)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x, Decimal.pow(exp2, x))).floor()
            },
            display() {
                let dis = "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit) + "<br>Effect: ???????????? ??????????? ???????????????"
                if (hasUpgrade('mF', 42)) dis = "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit) + "<br>Effect: Boosts infect gain by " + format(buyableEffect(this.layer, this.id)) + "x"
                return dis
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            purchaseLimit() {
                let limit = 0
                if (hasUpgrade('mF', 42)) limit = 10
                return limit
            },
            buy() {
                let cost = new Decimal(1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let base1 = new Decimal(1e15)
                let base2 = x
                let expo = new Decimal(1.37)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        13: {
            title: "Longitivity (Locked)",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(1.55)
                let exp2 = new Decimal(1.065)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x, Decimal.pow(exp2, x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit) + "<br>Effect: ???????????? ??????????? ???????????????"
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal(1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {
                let limit = 0
                return limit
            },
            effect(x) {
                let base1 = new Decimal(2.2e13)
                let base2 = x
                let expo = new Decimal(1.375)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        14: {
            title: "Definity (Locked)",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(1.6)
                let exp2 = new Decimal(1.065)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x, Decimal.pow(exp2, x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit) + "<br>Effect: ???????????? ??????????? ???????????????"
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal(1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {
                let limit = 0
                return limit
            },
            effect(x) {
                let base1 = new Decimal(4.3e20)
                let base2 = x
                let expo = new Decimal(1.375)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        21: {
            title: "Crystalitivate (Locked)",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(1)
                let exp2 = new Decimal(1.025)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x, Decimal.pow(exp2, x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit) + "<br>Effect: ???????????? ??????????? ???????????????"
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal(1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {
                let limit = 0
                return limit
            },
            effect(x) {
                let base1 = new Decimal(66)
                let base2 = x
                let expo = new Decimal(1.1)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        22: {
            title: "Metativity II (Locked)",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(1.2)
                let exp2 = new Decimal(1.04)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x, Decimal.pow(exp2, x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit) + "<br>Effect: ???????????? ??????????? ???????????????"
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal(1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {
                let limit = 0
                return limit
            },
            effect(x) {
                let base1 = new Decimal(1300)
                let base2 = x
                let expo = new Decimal(1.2)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        23: {
            title: "Longitivity II (Locked)",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(1.4)
                let exp2 = new Decimal(1.07)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x, Decimal.pow(exp2, x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit) + "<br>Effect: ???????????? ??????????? ???????????????"
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal(1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {
                let limit = 0
                return limit
            },
            effect(x) {
                let base1 = new Decimal(1959200)
                let base2 = x
                let expo = new Decimal(1.3)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        24: {
            title: "Infinivate (Locked)",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(2)
                let exp2 = new Decimal(1.2)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x, Decimal.pow(exp2, x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit) + "<br>Effect: ???????????? ??????????? ???????????????"
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal(1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {
                let limit = 0
                return limit
            },
            effect(x) {
                let base1 = new Decimal(1.8e11)
                let base2 = x
                let expo = new Decimal(1.47)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        31: {
            title: "Experimate (Locked)",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(1)
                let exp2 = new Decimal(1.03)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x, Decimal.pow(exp2, x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit) + "<br>Effect: ???????????? ??????????? ???????????????"
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal(1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {
                let limit = 0
                return limit
            },
            effect(x) {
                let base1 = new Decimal(193)
                let base2 = x
                let expo = new Decimal(1.15)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        32: {
            title: "Metativity III (Locked)",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(1.2)
                let exp2 = new Decimal(1.06)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x, Decimal.pow(exp2, x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit) + "<br>Effect: ???????????? ??????????? ???????????????"
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal(1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {
                let limit = 0
                return limit
            },
            effect(x) {
                let base1 = new Decimal(6210)
                let base2 = x
                let expo = new Decimal(1.2)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        33: {
            title: "Longitivity III (Locked)",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(1.5)
                let exp2 = new Decimal(1.1)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x, Decimal.pow(exp2, x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit) + "<br>Effect: ???????????? ??????????? ???????????????"
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal(1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {
                let limit = 0
                return limit
            },
            effect(x) {
                let base1 = new Decimal(1.8e7)
                let base2 = x
                let expo = new Decimal(1.27)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
        34: {
            title: "Enterative (Locked)",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(2)
                let exp2 = new Decimal(1.25)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x, Decimal.pow(exp2, x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit) + "<br>Effect: ???????????? ??????????? ???????????????"
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal(1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {
                let limit = 0
                return limit
            },
            effect(x) {
                let base1 = new Decimal(5.2e11)
                let base2 = x
                let expo = new Decimal(1.4)
                let eff = base1.pow(Decimal.pow(base2, expo))
                return eff
            },
        },
    },
    upgrades: {
        rows: 5,
        cols: 5,
        11: {
            title: "Artifact I",
            description: "1,700x Infects & 15x Meta-Crystals",
            cost: new Decimal(999),
            unlocked() {
                return player.mH.unlocked
            },
        },
        21: {
            title: "Artifact II",
            description: "1,800,000x Infects & 190,000x Meta-Crystals",
            cost: new Decimal(999),
            unlocked() {
                return hasUpgrade('mF', 11)
            },
        },
        22: {
            title: "Relic I",
            description: "^1.1 Infects & Improved 'Experiment Regime I' Effect",
            cost: new Decimal(999),
            unlocked() {
                return hasUpgrade('mF', 11)
            },
        },
        31: {
            title: "Artifact III",
            description: "1e17x Infects, 1.4e12x Meta-Crystals, 5x Meta-Experiments",
            cost: new Decimal(999),
            unlocked() {
                return hasUpgrade('mF', 21)
            },
        },
        32: {
            title: "Relic II",
            description: "^1.12 Infects & Improved 'Experiment Regime II' Effect",
            cost: new Decimal(10),
            unlocked() {
                return hasUpgrade('mF', 21) && hasUpgrade('mF', 22)
            },
        },
        33: {
            title: "Ancient I",
            description: "Meta-Experiments boosts Infects",
            cost: new Decimal(1700),
            effect() {
                let eff = ((player.mE.points.pow(0.02)).add(1).max(0)).max(1).min(1.3);
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(1.3) ? "(Capped)" : "";
                let text = `^${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
            unlocked() {
                return hasUpgrade('mF', 22)
            },
        },
        41: {
            title: "Artifact IV",
            description: "1e31x Infects & 1e23 Meta-Crystals & 850x Meta-Experiments",
            cost: new Decimal(1200000),
            unlocked() {
                return hasUpgrade('mF', 11)
            },
        },
        42: {
            title: "Relic III",
            description: "^1.15 Infects & Improved 'Experiment Regime III' Effect, unlock the 2nd buyable",
            cost: new Decimal(4.2e9),
            unlocked() {
                return hasUpgrade('mF', 31) && hasUpgrade('mF', 32) && hasUpgrade('mF', 33)
            },
        },
        43: {
            title: "Ancient II",
            description: "Meta-Fusions boosts Meta-Crystals & Meta-Experiments",
            cost: new Decimal(1e16),
            effect() {
                let eff = ((player.mF.points.pow(0.02)).add(1).max(0)).max(1).min(1.25);
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(1.25) ? "(Capped)" : "";
                let text = `^${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
            unlocked() {
                return hasUpgrade('mF', 31) && hasUpgrade('mF', 32) && hasUpgrade('mF', 33)
            },
        },
        44: {
            title: "Meta I",
            description: "Meta-Fusions boosts itself",
            cost: new Decimal(1e40),
            effect() {
                let eff = ((player.mF.points.pow(0.04)).add(1).max(0)).max(1).min(1e50);
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(1e50) ? "(Capped)" : "";
                let text = `${format(upgradeEffect(this.layer, this.id))}x ${capped}`;
                return text;
            },
            unlocked() {
                return hasUpgrade('mF', 33)
            },
        },
    },
})