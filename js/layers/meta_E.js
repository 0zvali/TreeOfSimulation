addLayer("mE", {
    name: "Meta-Experiments", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "mE", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 4, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        best: new Decimal(0),
    }},

    color: "#9aa3cd",
    requires(){ 
        let requirement = new Decimal("5e10")
        if (getBuyableAmount('mE', 14).gte(1)) requirement = requirement.div(buyableEffect('mE', 14))
        return requirement
        
    }, // Can be a function that takes requirement increases into account
    resource: "Meta-Experiments", // Name of prestige currency
    baseResource: "Meta-Crystals", // Name of resource prestige is based on
    baseAmount() {return player.mC.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent(){ 
        let expo1 = 0.27
        if (hasUpgrade('mE', 21)) expo1 = 0.32
        return expo1
     }, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        if (hasUpgrade('mE', 16)) mult = mult.times(upgradeEffect('mE', 16))
        if (hasUpgrade('mE', 24)) mult = mult.times(64)
        if (getBuyableAmount('mE', 13).gte(1)) mult = mult.times(buyableEffect('mE', 13).div(1.5))
        if (getBuyableAmount('mH', 11).gte(1)) mult = mult.times(buyableEffect('mH', 11))
        if (hasUpgrade('mE', 25)) mult = mult.times(upgradeEffect('mE', 25))
        if (hasUpgrade('mE', 32)) mult = mult.times(upgradeEffect('mE', 32))
        if (hasUpgrade('mE', 11)) mult = mult.times(3)
        if (hasMilestone('mE', 13)) mult = mult.times(1.4)
        if (hasMilestone('mE', 14)) mult = mult.times(2.8)
        if (hasUpgrade('mE', 33)) mult = mult.times(7)
        if (hasUpgrade('mE', 34)) mult = mult.times(1e15)
        if (hasUpgrade('mE', 36)) mult = mult.times(1e9)
        if (hasUpgrade('mH', 11)) mult = mult.times(20)
        if (getBuyableAmount('mF', 11).gte(1)) mult = mult.times(buyableEffect('mF', 11))
        if (player.mF.unlocked) mult = mult.times(tmp.mF.effect)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let expo = new Decimal(1)
        if (hasUpgrade('mH', 33)) expo = expo.add(0.03)
        if (hasUpgrade('mF', 43)) expo = expo.add(upgradeEffect('mF', 43).minus(1))
        return expo
    },
    effect() {
        let eff4 = player.mE.points.add(1).pow(0.35)
        eff4 = eff4.times(tmp.mE.effectBase)
        return eff4
    },
    effectBase() {
        let base = new Decimal(1) 
        if (hasUpgrade('mE', 26)) base = base.times(4)
        return base
    },
    effectDescription() {
        let dis = "which boosts 'MC Upgrade 3' by "+ format(tmp.mE.effect) + "x"
        if (hasMilestone('mC', 12)) dis = "which boosts 'MC Upgrade 3' & 'MC Upgrade 12' by "+ format(tmp.mE.effect) + "x ("+format(tmp.mE.effect.pow(0.15))+"x)<br> [MC-U3x (MC-U12x)]"
        return dis
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "E", description: "shift+E: reset for Meta-Experiments", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {return true},
    layerShown() {
        let value = false
        if (hasUpgrade('mC', 26) || player.mE.unlocked) value = true
        return value
    },
    automate() {
		if (hasUpgrade('mH', 14)) {
			if (layers.mE.buyables[11].canAfford()) {
				layers.mE.buyables[11].buy();
			};
		};
        if (hasUpgrade('mH', 14)) {
			if (layers.mE.buyables[12].canAfford()) {
				layers.mE.buyables[12].buy();
			};
		};
        if (hasUpgrade('mH', 14)) {
			if (layers.mE.buyables[13].canAfford()) {
				layers.mE.buyables[13].buy();
			};
		};
        if (hasUpgrade('mH', 14)) {
			if (layers.mE.buyables[14].canAfford()) {
				layers.mE.buyables[14].buy();
			};
		};
	},
    passiveGeneration() {
        let value1 = new Decimal(0);
        if (hasMilestone('mH', 13)) value1 = value1.add(0.01)
        if (hasMilestone('mF', 13)) value1 = value1.add(0.15)
        return value1
    },
milestones: {
        11: {
            requirementDescription: "1 Meta-Experiments",
            effectDescription: `MC Req. /2.5 & 1.2x Infects`,
            done() { return player.mE.points.gte(1) },
        },
        12: {
            requirementDescription: "10 'Experimental Regime III' Bought",
            effectDescription: `'Experimental Regime III' Effect is stronger, passively gain 30% of Meta-Crystals, and keep the 2nd mC Milestone`,
            done() { return (getBuyableAmount('mE', 13).gte(10)) },
            unlocked(){ return (hasUpgrade('mE', 25) && hasMilestone('mE', 11))},
        },
        13: {
            requirementDescription: "1.34e22 Meta-Experiments",
            effectDescription: `'Experiment Regime II' has a higher effect, also boost Meta-Experiments by 40% `,
            done() { return player.mE.points.gte(1.34e22) },
            unlocked() { return hasMilestone('mE', 12)},
        },
        14: {
            requirementDescription: "3.14e22 Meta-Experiments",
            effectDescription: `'Experiment Regime I' has a higher effect, boost Meta-Experiments by 180%, and decrease 'Experiment Regime II' cost significantly.`,
            done() { return player.mE.points.gte(3.14e22) },
            unlocked() { return hasMilestone('mE', 13)},
        },
        15: {
            requirementDescription: "6e24 Meta-Experiments",
            effectDescription: `Remove Infect Nerf entirely. (Hint: Passive doesn't help!)`,
            done() { return player.mE.points.gte(6e24) },
            unlocked() { return hasMilestone('mE', 14)},
        },
        16: {
            requirementDescription: "3.14e35 Meta-Experiments",
            effectDescription: `Keep the 3rd Meta-Crystal(s) Milestone; decrease the price of 'Experimental Regime I'; unlock another row of Meta-Experiment(s) Upgrades; and 1.4e9x infect gain.`,
            done() { return player.mE.points.gte(3.14e35) },
            unlocked() { return hasMilestone('mE', 15)},
        },
        17: {
            requirementDescription: "1e106 Meta-Experiments (Current Endgame)",
            effectDescription: `Unlock Meta-Humans`,
            done() { return player.mE.points.gte(1e106) || player.mH.unlocked },
            unlocked() { return (hasUpgrade('mE', 36) && hasMilestone('mE', 16)) || player.mH.unlocked},
        },
    },
buyables: {
        11: {
            title: "Experiment Regime I",
            unlocked() { return hasUpgrade("mE", 11) },
            cost(x) {
                let exp1 = new Decimal(1.2)
                let exp2 = new Decimal (1.1005)
                let costdef = new Decimal(2)
                if (hasUpgrade('mE', 13)) exp1 = exp1.minus(0.05) // hell yea!
                if (hasMilestone('mE', 16)) exp2 = exp2.minus(0.015) // hell yea!
                if (getBuyableAmount(this.layer, this.id).gte(20)) exp2 = exp2.add(0.0245)
                return new Decimal(costdef).mul(Decimal.pow(exp1, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).div(buyableEffect("mE", 13)).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Experiments" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost Meta-Crystal(s) gain by x" + format(buyableEffect(this.layer, this.id))
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal (1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let base1 = new Decimal(1.46)
                let base2 = x
                let expo = new Decimal(1.012)
                if (hasUpgrade('mE', 12)) base1 = base1.add(0.12)
                if (hasUpgrade('mE', 14)) base1 = base1.add(0.15)
                if (hasUpgrade('mE', 32)) base1 = base1.add(0.35)
                if (hasMilestone('mE', 14)) base1 = base1.add(0.1)
                if (hasUpgrade('mF', 22)) base1 = base1.add(0.8)
                let eff = base1.pow(Decimal.pow(base2, expo)).times(buyableEffect('mE', 14).pow(0.2))
                if (hasUpgrade('mE', 35)) eff = eff.times(25)
                return eff
            },
            buyMax(){ return hasUpgrade('mH', 22) },
        },
        12: {
            title: "Experiment Regime II",
            unlocked() { return hasUpgrade("mE", 13) },
            cost(x) {
                let exp2 = new Decimal(1.2)
                let costdef = new Decimal(50)
                if (getBuyableAmount(this.layer, this.id).gte(15)) exp2 = exp2.add(0.05)
                if (hasMilestone('mE',14)) exp2 = exp2.minus(0.075)
                return new Decimal(costdef).mul(Decimal.pow(1.2, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).div(buyableEffect("mE", 13)).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Experiments" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Boost infect gain by x" + format(buyableEffect(this.layer, this.id))
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal (1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let base1 = new Decimal(1.5)
                let base2 = x
                let expo = new Decimal(1.05)
                if (hasMilestone('mC', 11)) base1 = base1.add(0.33)
                if (hasUpgrade('mE', 21)) base1 = base1.add(upgradeEffect('mE', 21))
                if (hasMilestone('mE', 13)) base1 = base1.add(0.45)
                if (hasUpgrade('mF', 32)) base1 = base1.add(0.73)
                let eff = base1.pow(Decimal.pow(base2, expo))
                if (hasUpgrade('mE', 24)) eff = base1.pow(Decimal.pow(base2, expo)).times(4).times(buyableEffect('mE', 14).pow(0.2))
                if (hasUpgrade('mH', 13)) eff = eff.times(23)
                if (hasUpgrade('mH', 32)) eff = eff.pow(1.4)
                return eff
            },
            buyMax(){ return hasUpgrade('mH', 22) },
        },
        13: {
            title: "Experiment Regime III",
            unlocked() { return hasUpgrade("mE", 25) },
            cost(x) {
                let exp2 = new Decimal(1.22)
                let costdef = new Decimal(1.5e8)
                if (hasUpgrade('mH', 32)) costdef = costdef.div(100)
                if (getBuyableAmount(this.layer, this.id).gte(15)) exp2 = exp2.minus(0.07)
                return new Decimal(costdef).mul(Decimal.pow(1.125, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Experiments" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: 'Experimental Regime I' & 'Experimental Regime II' cost is /" + format(buyableEffect(this.layer, this.id)) + " cheaper; and increase Meta-Experiment gain by x" + format(buyableEffect(this.layer, this.id).div(1.5)) 
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal (1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let base1 = new Decimal(1.75)
                if (hasMilestone('mE', 12)) base1 = base1.add(0.35)
                if (hasUpgrade('mE', 26)) base1 = base1.add(0.25)
                if (hasUpgrade('mF', 42)) base1 = base1.add(1.2)
                let base2 = x
                let expo = new Decimal(1.05)
                let eff = base1.pow(Decimal.pow(base2, expo)).times(buyableEffect('mE', 14).pow(0.2))
                
                if (hasUpgrade('mE', 35)) eff = base1.pow(Decimal.pow(base2, expo)).times(buyableEffect('mE', 14).pow(0.2)).times(6.4) 
                return eff
            },
            buyMax(){ return hasUpgrade('mH', 22) },
        },
        14: {
            title: "Experiment Regime IV",
            unlocked() { return hasUpgrade("mE", 33) },
            cost(x) {
                let exp2 = new Decimal(2.5)
                let costdef = new Decimal(1e52)
                if (hasUpgrade('mH', 23)) exp2 = exp2.minus(0.9)
                if (hasUpgrade('mH', 23)) costdef = costdef.pow(0.8)
                if (getBuyableAmount(this.layer, this.id).gte(2500)) exp2 = exp2.add(1)
                return new Decimal(costdef).mul(Decimal.pow(1.125, x)).mul(Decimal.pow(x , Decimal.pow(exp2 , x))).floor()
            },
            display() {
                return "Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Meta-Experiments" + "<br>Bought: " + getBuyableAmount(this.layer, this.id) + "<br>Effect: Decrease Meta-Crystals & Meta-Experiments requirement by /" + format(buyableEffect(this.layer, this.id)) + " and boost all three other buyables by " + format(buyableEffect(this.layer, this.id).pow(0.2)) + "x"
            },
            canAfford() {
                return player[this.layer].points.gte(this.cost())
            },
            buy() {
                let cost = new Decimal (1)
                player[this.layer].points = player[this.layer].points.sub(this.cost().mul(cost))
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                let base1 = new Decimal(5.5)
                let base2 = x
                let expo = new Decimal(1.1)
                if (hasUpgrade('mH', 32)) base1 = base1.add(2)
                let eff = base1.pow(Decimal.pow(base2, expo))
                if (hasUpgrade('mH', 13)) eff = eff.times(23)
                return eff
            },
            buyMax(){ return hasUpgrade('mH', 22) },
        },
    },
upgrades: {
    rows: 6,
    cols: 6,
        11: {
            title: "Meta-Nyko",
            description: "Quadtruple Infect gain with another smaller boost based on infects, while boosting MC effect base by deformed formula balanced by a limited rate. Meta-Crystals are slightly boosted by a smaller rate of the original formula [xInf (xMC, +MCe)]",
            cost: new Decimal(2),
            effect() {
                let eff = (player.points.max(1).add(2).pow(0.016).times(4)).max(1).min(4000);
                if (hasUpgrade("mE", 16)) eff = (player.points.max(1).add(2).pow(0.0185).times(4.5)).max(1).min(4000);
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(4000) ? "(Capped)" : "";
                let text = `x${format(upgradeEffect(this.layer, this.id))} (x${format(upgradeEffect(this.layer, this.id).div(2.4))}, +${format(upgradeEffect(this.layer, this.id).div(6.2))}) ${capped}`;
                return text;
            },
            unlocked(){
                return player.mE.unlocked
            },
        },
        12: {
            title: "Meta-Abys",
            description: "Have 'Experimental Regime I' get a slightly better effect than normal!",
            cost: new Decimal(50),
            unlocked(){
                return hasUpgrade('mE', 11)
            },
        },
        13: {
            title: "Meta-Cyberruin",
            description: "Unlock the next buyable & have 'Experimental Regime I' be slightly cheaper... because why not?",
            cost: new Decimal(200),
            unlocked(){
                return hasUpgrade('mE', 12)
            },
        },
        14: {
            title: "Meta-Lovebeast",
            description: "Reduce the Infect Nerf (Level 1 -> 3 Nerf) by /9.2, also boost 'Experimental Regime I' effect slightly.",
            cost: new Decimal(600),
            unlocked(){
                return hasUpgrade('mE', 13)
            },
        },
        15: {
            title: "Cap Breaker I",
            description: "Break 3 MC Upgrade Caps for the first time.",
            cost: new Decimal(800),
            unlocked(){
                return hasUpgrade('mE', 14)
            },
        },
        16: {
            title: "Meta-Kryptox",
            description: "'Meta-Nyko' effect is even better, unlock 3 Meta-Crystal(s) Milestones that are kept on Meta-Experiment(s) Reset, also get an Meta-Experiment boost based on itself",
            cost: new Decimal(1200),
            effect() {
                let eff = (player.mE.points.max(1).add(1.5).pow(0.13)).max(1).min(150);
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(150) ? "(Capped)" : "";
                let text = `x${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
            unlocked(){
                return hasUpgrade('mE', 15)
            },
        },
        21: {
            title: "Meta-Snapper",
            description: "Lower Meta-Crystal(s) requirement; increase Meta-Experiment Base Exponenet by 0.05; Increase 'Experiment Regime II' effect based on formula",
            cost: new Decimal(15000),
            effect() {
                let eff = (player.mE.points.max(0.01).add(0.01).pow(0.02).div(5.5)).max(0.01).min(2);
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(2) ? "(Capped)" : "";
                let text = `+${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
            unlocked(){
                return hasUpgrade('mE', 16)
            },
        },
        22: {
            title: "Cap Breaker II",
            description: "Break 'Meta-Reformation' & 'Meta-Strength' Cap for the first time. Whilst breaking both caps; 'Meta-Frostically' has a higher effect: with the higher effect it now has, it boosts 'Beelusioning Illusion' with a decreased effect. Also keep Meta-Crystal(s) Upgrades while keeping the 1st mC Milestone",
            cost: new Decimal(17500000),
            unlocked(){
                return hasUpgrade('mE', 21)
            },
        },
        23: {
            title: "Meta-Honeycomb",
            description: "Meta-Crystal(s) Gain is increased based on how many Meta-Experiments Upgrades you have",
            cost: new Decimal(3.45e8),
            effect() {
                let eff = (new Decimal.pow(1.35, player.mE.upgrades.length).max(1)).max(1).min(1e15);
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(1e15) ? "(Experiment Cap)" : "";
                let text = `x${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
            unlocked(){
                return hasUpgrade('mE', 22)
            },
        },
        24: {
            title: "Meta-Azure",
            description: "wait didn't azure have the ability to duplicate up to 4 times...? 64x Meta-Experiments & 4x 'Experimental Regime II' Effect",
            cost: new Decimal(2.3e9),
            unlocked(){
                return hasUpgrade('mE', 23)
            },
        },
        25: {
            title: "Meta-Experimental Surge",
            description: "Meta-Experiments boosts itself, also unlock 'Experimental Surge III'",
            cost: new Decimal(3.45e12),
            effect() {
                let eff = (player.mE.points.max(1).add(1).pow(0.07)).max(1).min(1.2e8);
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(1.2e8) ? "(Capped)" : "";
                let text = `x${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
            unlocked(){
                return hasUpgrade('mE', 24)
            },
        },
        26: {
            title: "Meta-Frostical",
            description: "Increase Meta-Crystal(s) Exponent by 0.075, Qintruple Meta-Experiment(s) Effect, and improve 'Experimental Regime III' effect",
            cost: new Decimal(1e20),
            unlocked(){
                return hasUpgrade('mE', 25)
            },
        },
        31: {
            title: "Cap Breaker III",
            description: "Power the cap by 2 on the first row of mC Upgrades.",
            cost: new Decimal(3.14e40),
            currencyDisplayName: "infects",
            currencyInternalName: "points",
            unlocked(){
                return hasUpgrade('mE', 26) && hasMilestone('mE', 16)
            },
        },
        32: {
            title: "Meta-Experimental Surge II",
            description: "Meta-Experiments boosts itself again, buff 'Experimental Regime I' significantly.",
            cost: new Decimal(1.33e48),
            effect() {
                let eff = (player.mE.points.max(1).add(1).pow(0.036)).max(1).min(1.2e15);
                return eff
            },
            effectDisplay() {
                let capped = upgradeEffect(this.layer, this.id).gte(1.2e15) ? "(Capped)" : "";
                let text = `x${format(upgradeEffect(this.layer, this.id))} ${capped}`;
                return text;
            },
            unlocked(){
                return hasUpgrade('mE', 31)
            },
        },
        33: {
            title: "Meta-Somby",
            description: "120x Infects, 28x Meta-Crystals, 7x Meta-Experiments, and unlock 'Experimental Regime IV'",
            cost: new Decimal(1.33e53),
            unlocked(){
                return hasUpgrade('mE', 32)
            },
        },
        34: {
            title: "Meta-Experimental Boost I",
            description: "1e12x Infects, 1e10x Meta-Crystals, 1e15x Meta-Experiments",
            cost: new Decimal(3.5e58),
            unlocked(){
                return hasUpgrade('mE', 33)
            },
        },
        35: {
            title: "Meta-Experimental Boost II",
            description: "25x 'Experiment Regime I' Effect & 6.4x 'Experiment III' Effect",
            cost: new Decimal(1.3e87),
            unlocked(){
                return hasUpgrade('mE', 34)
            },
        },
        36: {
            title: "Meta-Experimental Boost III",
            description: "1e9x Meta-Experiments & 5.5x Infects",
            cost: new Decimal(2.3e88),
            unlocked(){
                return hasUpgrade('mE', 35)
            },
        },
    },
})