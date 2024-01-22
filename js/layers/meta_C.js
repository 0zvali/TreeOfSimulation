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
        if (hasMilestone('mE', 11)) requirement = requirement.div(2.5)
        if (hasUpgrade('mE', 16)) requirement = requirement.div(9.5)
        if (getBuyableAmount('mE', 14).gte(1)) requirement = requirement.div(buyableEffect('mE', 14))
        return requirement
        
    }, // Can be a function that takes requirement increases into account
    resource: "Meta-Crystals", // Name of prestige currency
    baseResource: "infects",
    baseAmount() {return player.points}, 
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent(){ 
              let expo = new Decimal(0.39)
              if (hasUpgrade('mC', 15)) expo = expo.add(0.04) 
              if (hasUpgrade('mC', 23)) expo = expo.add(0.035) 
              if (hasUpgrade('mE', 26)) expo = expo.add(0.075)
              return expo
}, // Prestige currency exponent (can be changed/adjusted)
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        if (hasUpgrade('mC', 14)) mult = mult.times(upgradeEffect('mC', 14))
        if (hasUpgrade('mC', 21)) mult = mult.times(2.3)
        if (hasUpgrade('mC', 24)) mult = mult.times(upgradeEffect('mC', 24).div(2))
        if (hasUpgrade('mE', 11)) mult = mult.times(upgradeEffect('mE', 11).div(2.4))
        if (hasMilestone('mC', 13)) mult = mult.times(tmp.mC.effect.pow(0.06))
        if (hasUpgrade('mE', 23)) mult = mult.times(upgradeEffect('mE', 23))
        if (getBuyableAmount('mE', 11).gte(1)) mult = mult.times(buyableEffect('mE', 11))
        if (hasUpgrade('mE', 33)) mult = mult.times(28)
        if (hasUpgrade('mE', 34)) mult = mult.times(1e10)
        if (hasUpgrade('mH', 12)) mult = mult.times(4)
        if (hasUpgrade('mH', 14)) mult = mult.times(1e9)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let expo = new Decimal(1)
        return expo
    },
    effect() {
        let eff4 = player.mC.points.add(1).pow(0.383)
        eff4 = eff4.times(tmp.mC.effectBase)
        if (hasUpgrade('mC', 21)) eff4 = eff4.times(upgradeEffect('mC', 21))
        if (hasUpgrade('mC', 22)) eff4 = eff4.div(1.4)
        return eff4
    },
    effectBase() {
        let base = new Decimal(1) 
        if (hasUpgrade('mE', 11)) base = base.add(upgradeEffect('mE', 11).div(6.2))
        return base
    },
    effectDescription() {
        let dis = "which boosts infect gain by " + format(tmp.mC.effect) + "x"
        if (hasMilestone("mC", 13)) dis = "which boosts infect gain by " + format(tmp.mC.effect) + "x; also boost Meta-Crystals by " + format(tmp.mC.effect.pow(0.06)) + "x."
        return dis
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "C", description: "shift+C: reset for Meta-Crystals", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > this.row) layerDataReset(this.layer)
        if (hasUpgrade('mE', 22)) player.mC.upgrades.push("11", "12", "13", "14", "15" ,"16", "21", "22", "23", "24", "25", "26")
        if (hasUpgrade('mE', 22)) player.mC.milestones.push("11")
        if (hasMilestone('mE', 12)) player.mC.milestones.push("12")
        if (hasMilestone('mE', 16)) player.mC.milestones.push("13")
        if (hasMilestone('mH', 11)) player.mC.milestones.push("11","12","13")
        if (hasMilestone('mH', 11)) player.mC.upgrades.push("11", "12", "13", "14", "15" ,"16", "21", "22", "23", "24", "25", "26")
        if (hasMilestone('mH', 12)) player.mE.milestones.push("11","12","13","14","15","16","17")
        if (hasMilestone('mH', 12)) player.mE.upgrades.push("11", "12", "13", "14", "15" ,"16", "21", "22", "23", "24", "25", "26", "31", "32", "33", "34", "35", "36")
    },
    passiveGeneration() {
        let value1 = new Decimal(0);
        if (hasMilestone('mE', 12)) value1 = value1.add(0.3)
        return value1
    },
    layerShown() {return true},
    layerShown() {
        let value = false
        if (player.CT.points.gte(2)) value = true
        return value
    },
milestones: {
        11: {
            requirementDescription: "1e30 Meta-Crystals",
            effectDescription() {
                let text = "Boost 'Experiment Regime II' by a sly ammount";
                return text;
              },
            unlocked(){
                return hasUpgrade('mE', 16)
              },
            done() { return player.mC.points.gte(1e30) },
        },
        12: {
            requirementDescription: "1e39 Meta-Crystals",
            effectDescription() {
                let text = "Meta-Experiments gets another effect!";
                return text;
              },
            unlocked(){
                return hasMilestone('mC', 11)
            },
            done() { return player.mC.points.gte(1e39) },
        },
        13: {
            requirementDescription: "1e52 Meta-Crystals",
            effectDescription(){
                let text = "Meta-Crystal(s) effect now boosts Meta-Crystals by a downgraded rate";
                return text;
            },
            unlocked(){
                return hasMilestone('mC', 12)
            },
            done(){ return player.mC.points.gte(1e52) },
        },
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
                if (hasUpgrade('mE', 15)) eff = (player.points.max(1).add(1).pow(0.07).times(4)).max(1).min(650000);
               if (hasUpgrade('mE', 31)) eff = (player.points.max(1).add(1).pow(0.07).times(4)).max(1).min(422500000000);
            return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(150) ? "(Capped)" : "";
                if (hasUpgrade('mE', 15)) capped = upgradeEffect(this.layer, this.id).gte(650000) ? "(2nd Cap)" : "";
                if (hasUpgrade('mE', 31)) capped = upgradeEffect(this.layer, this.id).gte(422500000000) ? "(3rd Cap)" : "";
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
                if (hasUpgrade('mC', 16)) eff = (player.mC.points.max(1).add(1).pow(0.085).times(upgradeEffect('mC', 16))).max(1).min(999);
                if (hasUpgrade('mE', 15)) eff = (player.mC.points.max(1).add(1).pow(0.085).times(upgradeEffect('mC', 16))).max(1).min(9.99e9);
                if (hasUpgrade('mE', 31)) eff = (player.mC.points.max(1).add(1).pow(0.085).times(upgradeEffect('mC', 16))).max(1).min(1e20);
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(999) ? "(Capped)" : "";
                if (hasUpgrade('mE', 15)) capped = upgradeEffect(this.layer, this.id).gte(9.99e9) ? "(2nd Cap)" : "";
                if (hasUpgrade('mE', 31)) capped = upgradeEffect(this.layer, this.id).gte(1e20) ? "(3rd Cap)" : "";
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
                if (hasUpgrade('mC',22)) eff = (player.mC.points.max(1).add(2).pow(0.125).times(1.3).times(1.8)).max(1).min(1753.22);
                if (player.mE.unlocked) eff = (player.mC.points.max(1).add(2).pow(0.125).times(1.3).times(tmp.mE.effect)).max(1).min(1753.22);
                if (player.mE.unlocked && hasUpgrade('mC', 22)) eff = (player.mC.points.max(1).add(2).pow(0.125).times(1.3).times(1.8).times(tmp.mE.effect)).max(1).min(1753.22);
                if (hasUpgrade('mE', 15)) eff = (player.mC.points.max(1).add(2).pow(0.125).times(1.3).times(1.8).times(tmp.mE.effect)).max(1).min(1.4e8);
                if (hasUpgrade('mE', 31)) eff = (player.mC.points.max(1).add(2).pow(0.125).times(1.3).times(1.8).times(tmp.mE.effect)).max(1).min(1.96e16);
                if (hasUpgrade('mH', 21)) eff = (player.mC.points.max(1).add(2).pow(0.125).times(1.3).times(1.8).times(tmp.mE.effect)).max(1).min("1e9999");
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(1753.22) ? "(Capped)" : "";
                if (hasUpgrade('mE', 15)) capped = upgradeEffect(this.layer, this.id).gte(1.4e8) ? "(2nd Cap)": "";
                if (hasUpgrade('mE', 31)) capped = upgradeEffect(this.layer, this.id).gte(1.96e16) ? "(3rd Cap)": "";
                if (hasUpgrade('mH', 21)) capped = upgradeEffect(this.layer, this.id).gte("1e999") ? "(4th Cap)": "";
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
            cost: new Decimal(60),
            effect() {
                let cap = new Decimal(773.66)
                if (hasUpgrade('mE', 22)) cap = new Decimal(1.47e9)
                if (hasUpgrade('mE', 31)) cap = cap.pow(2)
                let eff = (player.points.max(1).add(1.5).pow(0.089)).max(1).min(cap);
                if (hasUpgrade('mC', 26)) eff = (player.points.max(1).add(1.5).pow(0.089).times(upgradeEffect('mC', 26))).max(1).min(cap);
                return eff
            },
            effectDisplay() {
                let cap = new Decimal(773.66)
                if (hasUpgrade('mE', 22)) cap = new Decimal(1.47e9)
                if (hasUpgrade('mE', 31)) cap = cap.pow(2)
                let capped = upgradeEffect(this.layer, this.id).gte(cap) ? "(Capped)" : "";
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
            cost: new Decimal(200),
            unlocked(){
                return hasUpgrade('mC', 14)
            },
        },
        16: {
            title: "Meta-Strength",
            description: "'Wot2ndG' is now slightly better and Meta-Crystals boost 'Meta-Submergence'.",
            cost: new Decimal(600),
            effect() {
                let cap = new Decimal (666.66)
                if (hasUpgrade('mE', 22)) cap = new Decimal(175000)
                if (hasUpgrade('mE', 31)) cap = cap.pow(2)
                let eff = (player.mC.points.max(1).add(1.8).pow(0.13)).max(1).min(cap);
                return eff
            },
            effectDisplay(){
                let cap = new Decimal (666.66)
                if (hasUpgrade('mE', 22)) cap = new Decimal(175000)
                if (hasUpgrade('mE', 31)) cap = cap.pow(2)
                let capped = upgradeEffect(this.layer, this.id).gte(cap) ? "(Capped)" : "";
                let text = `x${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
            unlocked(){
                return hasUpgrade('mC', 15)
            },
        },
        21: {
            title: "Infectious Society",
            description: "Meta-Crystal Effect is slightly better based on formula, also increase MC gain by the multicative of 2.3",
            cost: new Decimal(2000),
            effect() {
                let eff = (player.points.max(0.9).add(1).pow(0.07).div(1.2)).max(0.9).min(70.70);
                if (hasUpgrade('mE', 15)) eff = (player.points.max(0.9).add(1).pow(0.07).div(1.2)).max(0.9).min(1717);
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(70.70) ? "(Capped)" : "";
                if (hasUpgrade('mE', 15)) capped = upgradeEffect(this.layer, this.id).gte(1717) ? "(2nd Cap)" : "";
                let text = `x${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
            unlocked(){
                return hasUpgrade('mC', 16)
            },
        },
        22: {
            title: "Meta the Meta?",
            description: "'Wot2ndG' has a higher effect, but in return; decrease MC effect slightly...",
            cost: new Decimal(200000),
            unlocked(){
                return hasUpgrade('mC', 21)
            },
        },
        23: {
            title: "True Permacold",
            description(){ 
                let des = "Increase the Meta-Crystal Exponent to be slightly better! 6.2x Infects (^0.43 -> ^0.475)"
                if (hasUpgrade('mC', 25)) des = "Increase the Meta-Crystal Exponent to be slightly better! " + format(upgradeEffect('mC', 25).times(6.2)) + "x Infects (^0.43 -> ^0.475)"
                return des
            },
            cost: new Decimal(1100000),
            unlocked(){
                return hasUpgrade('mC', 22)
            },
        },
        24: {
            title: "Beelusioning Illusion",
            description: "Flip the effects from 'Wot2ndG' as this one...but better!",
            cost: new Decimal(22334455),
            effect() {
                let eff =  (player.points.max(1).add(2).pow(0.026).times(4)).max(1).min(1963.44);
                if (hasUpgrade('mC', 26)) eff = (player.points.max(1).add(2).pow(0.022).times(4).times(upgradeEffect('mC', 26))).max(1).min(1963.44);
                if (hasUpgrade('mE', 22)) eff = (player.points.max(1).add(2).pow(0.022).times(4).times(upgradeEffect('mC', 26)).times(upgradeEffect('mC', 25).div(3.8))).max(1).min(1963.44);
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(1963.44) ? "(Capped)" : "";
                let text = `x${format(upgradeEffect(this.layer, this.id))} (x${format(upgradeEffect(this.layer, this.id).div(2))}) ${capped}`;
                return text;
            },
            unlocked(){
                return hasUpgrade('mC', 23)
            },
        },
        25: {
            title: "Meta-Frosticality",
            description: "'True Permacold' Infect Boost is boosted by this upgrade's effect formula!",
            cost: new Decimal(1.22e8),
            effect() {
                let eff =  (player.mC.points.max(1).add(1).pow(0.028)).max(1).min(188.44);
                if (hasUpgrade("mE", 22)) eff = eff.times(1.8)
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(188.44) ? "(Capped)" : "";
                let text = `x${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                if (hasUpgrade("mE", 22)) text = `x${format(upgradeEffect(this.layer, this.id))} (x${format(upgradeEffect(this.layer, this.id).div(3.8))}) ${capped}`;
                return text;
            },
            unlocked(){
                return hasUpgrade('mC', 24)
            },
        },
        26: {
            title: "Lets repeat some stuff",
            description: "'Beelusioning Illusion' & 'Meta-Reformation' is slightly stronger. Experiments now?",
            cost: new Decimal(1.13e10),
            effect() {
                let cap = new Decimal(60)
                let eff = (player.points.max(1).add(1).pow(0.0122)).max(1).min(cap);
                if (hasMilestone('mC', 12)) eff = ((player.points.max(1).add(1).pow(0.0122)).times(tmp.mE.effect.pow(0.15))).max(1).min(cap);
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(60) ? "(Capped)" : "";
                let text = `x${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
            unlocked(){
                return hasUpgrade('mC', 25)
            },
        },
    },
})