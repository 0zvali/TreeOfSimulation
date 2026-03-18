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

    color: "#cc971d",
    requires() {
        let requirement = new Decimal(13)
        return requirement

    }, // Can be a function that takes requirement increases into account
    resource: "Meta-Fusions", // Name of prestige currency
    baseResource: "Meta-Humans", // Name of resource prestige is based on
    baseAmount() { return player.mH.points }, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent() {
        let expo1 = new Decimal(0.8)
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

    effect() {
        let eff4 = player.mF.points.add(1).pow(2.5)
        eff4 = eff4.times(tmp.mF.effectBase)
        return eff4
    },
    effectBase() {
        let base = new Decimal(1)
        return base
    },
    effectDescription() {
        let dis = "which boosts all previous layers (Except Meta-Humans) by x" + format(tmp.mF.effect)
        return dis
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
        "Fusionation I": {
            content: [
                "main-display",
                "blank",
                "prestige-button",
                ["display-text",
                    function () { return 'You have a total of ' + formatWhole(player.mF.total) + ' Meta-Fusions' },
                    {}],
                    ["display-text",
                        function () { return "<metabox>Infection Wall</metabox> is becoming a problem... there must be a way to push it back..." },
                        {}],
                    ["display-text",
                        function () { return "The wall is currently at <text style='color:cyan'>" + formatWhole(infectionWall()) + "</text> infects..."},
                    ],
                "blank",
                "buyables",
                "blank",
                "h-line",
                "blank",
                "upgrades"
            ],
            buttonStyle() { return { 'background': 'linear-gradient(to right,orange 33%, black 92%)', 'color': 'white', 'box-shadow': '2px 2px 2px orange' } },
            style() {
                    return {
                        'background': 'transparent',
                        'background-image': 'radial-gradient(ellipse at top, #9c6e09, transparent),radial-gradient(ellipse at bottom, #be3f3f, transparent)',
                        'background-color': 'transparent',
                        'background-size': '100% 100%',
                        "background-position": "center"
                    }
                },
        },
        "Fusionation II": {
            content: [
                "main-display",
                "blank",
                "h-line",
                "blank",
                "milestones"
            ],
            buttonStyle() { return { 'background': 'linear-gradient(to left,orange 33%, black 92%)', 'color': 'white', 'box-shadow': '2px 2px 2px orange' } },
            style() {
                    return {
                        'background': 'transparent',
                        'background-image': 'radial-gradient(ellipse at top, #9c6e09, transparent),radial-gradient(ellipse at bottom, #be3f3f, transparent)',
                        'background-color': 'transparent',
                        'background-size': '100% 100%',
                        "background-position": "center"
                    }
                },
        },
    },

    challenges: {
        11: {
            name() {return ("<chalbox>Facility's Redemptive Tower</chalbox>")},
            challengeDescription() {return (`<metabox>Infection Wall</metabox> nerf is <text style="color:cyan">15%</text> stronger<br>
            <text style="color:red">Disable Several Upgrades</text><br>
            For every OoMs,<br>Increase the <metabox>Infection Wall</metabox> nerf by <text style="color:cyan">0.1%</text>.<br>
            Each time you climb, whereever your infects reached will be the highest you reached that round<br>`)},
            canComplete: function() {return player.points.gte("1ee10")},
            goalDescription: "Climb the Tower as high as possible!<br><text style='color:orange'>Unlock 'Facility of Meta' at 1e2000 Infects!</text>",
            rewardDescription() {
                if (inChallenge("mF", 11)) return (`Increase Infect Gain based on highest infects (on round) reached on Tower<br><br><text style="color:lime">Highest (Round) Infects Achieved</text>:<br><fatigue>`+formatWhole(player[this.layer].tower)+`</fatigue> ( +`+ formatWhole(player.points) +` )<br>`)
                else return (`Increase Infect Gain based on highest infects (on round) reached on Tower<br><br><text style="color:lime">Highest (Round) Infects Achieved</text>:<br><fatigue>`+formatWhole(player[this.layer].tower)+`</fatigue> ( +0 )<br>`)},
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
            requirementDescription() {
                let desc = "??????"
                if (hasChallenge('CT', 31)) desc = "Complete <glow-text>CT Challenge 5</glow-text>"
                if (inChallenge('CT', 32)) desc = "Disabled inside <glow-text>'Corruptive Generator'</glow-text>"
                return desc},
            effectDescription: `Keep Meta-Crystals Milestones & Upgrades`,
            done() { return hasChallenge('CT', 31) && !inChallenge('CT', 32) },
        },
        12: {
             requirementDescription() {
                let desc = "??????"
                if (hasChallenge('CT', 32)) desc = "Complete <glow-text>CT Challenge 6</glow-text>"
                if (inChallenge('CT', 32)) desc = "Disabled inside <glow-text>'Corruptive Generator'</glow-text>"
                return desc},
            effectDescription: `Keep the current Meta-Experiment Milestones, Upgrades, and Buy max Meta-Humans`,
            done() { return hasChallenge('CT', 32) && !inChallenge('CT', 32) },
        },
    },

    buyables: {
        11: {
            title: "Experiment Breaker",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(1)
                let exp2 = new Decimal(1)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(x).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit) + "<br>Effect: Break through one of the walls<br> Raise the <metabox>Infection Wall</metabox> by <text style='color:cyan'>" + format(buyableEffect(this.layer, this.id))
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
                let limit = new Decimal(3)
                return limit
            },
            effect() {
                let eff = new Decimal("1e400").pow(getBuyableAmount('mF', 11))
                return eff
            }
        },
        12: {
            title: "Truth Striker",
            unlocked() { return player.mF.unlocked },
            cost(x) {
                let exp1 = new Decimal(1.1)
                let exp2 = new Decimal(1.03)
                let costdef = new Decimal(1)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).add(1).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Fusions" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "/" + formatWhole(tmp[this.layer].buyables[this.id].purchaseLimit) + "<br>Effect: Fusions weren't always safe.<br> Weaken <metabox>Infection Wall</metabox> by <text style='color:cyan'>" + format(buyableEffect(this.layer, this.id) * 100) + "%"
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
                let limit = new Decimal(6)
                return limit
            },
            effect() {
                let eff = new Decimal(0.15).times(getBuyableAmount('mF', 12))
                return eff
            },
            unlocked() {
                return hasMilestone('mH', 14) || getBuyableAmount('mF', 12).gte(1)
            }
        },
    },
    upgrades: {
        rows: 5,
        cols: 5,
        11: {
            title: "Into the Unknown",
            description: "Lower Meta-Human requirement by a decent amount",
            cost: new Decimal(1),
            unlocked() {
                return player.mH.unlocked
            },
        },
        12: {
            title: "Battle Bounding Experiments",
            description: "Raise 'Experiment Regime IV' Effect to be stronger",
            cost: new Decimal(13),
            currencyDisplayName: "Meta Humans",
            currencyInternalName: "points",
            currencyLayer: "mH",
            unlocked() {
                return hasUpgrade('mF', 11)
            },
        },
        13: {
            title: "Perfected Mutations",
            description: "Raise 'Experiment Regime I' effect to be stronger",
            cost: new Decimal("1e935"),
            currencyDisplayName: "Meta Experiments",
            currencyInternalName: "points",
            currencyLayer: "mE",
            unlocked() {
                return hasUpgrade('mF', 12)
            },
        },
        14: {
            title: "Breaker's Reunion",
            description: "Weaken the <metabox>Infection Wall</metabox> by 17%",
            cost: new Decimal("1.3e987"),
            currencyDisplayName: "Meta Experiments",
            currencyInternalName: "points",
            currencyLayer: "mE",
            unlocked() {
                return hasUpgrade('mF', 13)
            },
        },
        15: {
            title: "Wall Breaker",
            description: "Break the 'mC-U12', 'mC-U4', and 'mC-U10 Cap to be much higher",
            cost: new Decimal("1.1e1011"),
            currencyDisplayName: "Meta Experiments",
            currencyInternalName: "points",
            currencyLayer: "mE",
            unlocked() {
                return hasUpgrade('mF', 14)
            },
        },
        21: {
            title: "Undisputed Rights",
            description: "Unlock another <glow-text>Collapsed Timeline</glow-text> Challenge",
            cost: new Decimal(1),
            unlocked() {
                return hasUpgrade('mF', 15)
            },
        },
        22: {
            title: "Mutated Azure",
            description: "Unlock yet another <glow-text>Collapsed Timeline</glow-text> Challenge.",
            cost: new Decimal(1),
            unlocked() {
                return hasChallenge('CT', 31)
            },
        },
        31: {
            title: "Artifact III",
            description: "1e17x Infects, 1.4e12x Meta-Crystals, 5x Meta-Experiments",
            cost: new Decimal(999),
            unlocked() {
                return hasUpgrade('mF', 22)
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
                return hasUpgrade('mF', 12)
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