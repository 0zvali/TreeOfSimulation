addLayer("CT", {
    name: "Collapsed Timelines", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "CT", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        best: new Decimal(0),
    }},
    color(){ 
        let color = `#ea3add`
        if (inChallenge('CT', 11)) color = `#ed4046`
        if (inChallenge('CT', 12)) color = `#ed4046`
        if (inChallenge('CT', 21)) color = `#ed4046`
        if (inChallenge('CT', 22)) color = `#ed4046`
        return color
    },
    requires: new Decimal("e1e50"), // Can be a function that takes requirement increases into account
    resource: "Collapsed Timelines", // Name of prestige currency
    baseResource: "infects", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    effect() {
        let eff5 = player.CT.points.add(1).pow(1)
        eff5 = eff5.times(tmp.CT.effectBase)
        return eff5
    },
    effectBase() {
        let base = new Decimal(1) 
        return base
    },
    effectDescription() {
        dis = "You are currently in Timeline 1"
        if (player.CT.points.gte(1)) dis = "You are currently in Timeline 2 which is much different then Timeline 1"
        return dis
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "t", description: "T: reset for Collapsed Timelines", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {
        let value = false
        if (player.points.gte(1e9999) || player.CT.unlocked) value = true
        return value
    },
milestones: {
        11: {
            requirementDescription: "1 Collapsed Timelines (It's all gone)",
            effectDescription(){ 
                let des
                des = `Fix Everything`
                if (player.CT.points.gte(1)) des = `Everything is gone...Unlock Floors instead.`
                return des
            },
            done() { return player.CT.points.gte(1)},
        },
    },
challenges: {
        11: {
            name: "Explosive Floors",
            challengeDescription: 
            `Explosives are now becoming required on more floors!<br>
            Infect gain is divided by 2.5<br>
            To counter the Infect Gain, Floor Upgrade Effects are changed slightly!<br>
            EX Requirement is now 1,500 instead of 6,000!`,
            canComplete: function() {return player.EX.points.gte(1)},
            goalDescription: "1 Explosive",
            rewardDescription: "Triple Floor Gain",
            onEnter(){if (player.SL.unlocked) player.SL.keep = true},
            unlocked(){
                return hasMilestone('EX', 11) || inChallenge('CT', 11) || hasChallenge('CT', 11)
            },
        },
        12: {
            name: "Planetary Length",
            challengeDescription: 
            `Floors are going crazy high!<br>
            Infect gain /4, Explosive gain /1.5 & Floor gain *3<br>
            Some Upgrades are now buff'd higher and '50,000th Floor' Upgrade is lower.<br>
            Floor Requirement is now 75 instead of 150!`,
            canComplete: function() {return player.FL.points.gte(150000000)},
            goalDescription: "150,000,000 Floors",
            rewardDescription() { return "Infects boosts EX (" + format(player.points.add(1).pow(0.05)) + "x)"},
            onEnter(){if (player.SL.unlocked) player.SL.keep = true},
            unlocked(){
                return hasMilestone('FL', 11) || inChallenge('CT', 12) || hasChallenge('CT', 12)
            },
        },
        21: {
            name: "Universal Floors",
            challengeDescription: 
            `The Developers are preventing you from going farther than 1e28 Floors...<br>
            Infect gain /10, Explosive gain /2 & Floor gain *250<br>
            Some Upgrades are now buff'd higher<br>
            '50,000th Floor' & '650,000th Floor' Upgrade is higher.<br>
            Floor Requirement is now 40 instead of 150!`,
            canComplete: function() {return player.FL.points.gte(1e28)},
            goalDescription: "1e28 Floors (Break the universe...)",
            rewardDescription() { return "Floors boosts Infects & Unlock the next layer (" + format(player.FL.points.add(1).pow(0.066)) + "x)"},
            onEnter(){if (player.SL.unlocked) player.SL.keep = true},
            unlocked(){
                return hasUpgrade('EX', 22) || inChallenge('CT', 21) || hasChallenge('CT', 21)
            },
        },
        22: {
            name: "Soul Shield",
            challengeDescription(){ 
            `Souls now have shield, but it's making it harder to progress.<br>
            Infect gain /500, Explosive gain /200<br>
            Floor Requirement is now 5 instead of 150!<br>
            Some Upgrades are also changed to make it easier (even some caps...)!<br>
            Soul Requirement is lower'd significantly!<br>
            Completions: ${challengeCompletions("CT", 22)}/4`;
            if (challengeCompletions('CT', 22).gte(2))
                `Souls now have shield, but it's making it harder to progress.<br>
                Infect gain /500, Explosive gain /200<br>
                Floor Requirement is now 5 instead of 150!<br>
                Some Upgrades are also changed to make it easier (even some caps...)!<br>
                Soul Requirement is lower'd significantly!<br>
                Completions: ${challengeCompletions("CT", 22)}/4<br><br>
                
                Passives: 25% Floor & 10% Explosive`;
                if (challengeCompletions('CT', 22).gte(4))
                `Souls now have shield, but it's making it harder to progress.<br>
                Infect gain /500, Explosive gain /200<br>
                Floor Requirement is now 5 instead of 150!<br>
                Some Upgrades are also changed to make it easier (even some caps...)!<br>
                Soul Requirement is lower'd significantly!<br>
                Completions: ${challengeCompletions("CT", 22)}/4<br><br>
                
                Passives: 65% Floor & 30% Explosive`;    
            },
            canComplete: function() {
                let value = player.SL.points.gte(1e25)
                if (challengeCompletions("CT", 22).gte(1)) value = player.SL.points.gte(1e26)
                if (challengeCompletions("CT", 22).gte(2)) value = player.SL.points.gte(1e28)
                if (challengeCompletions("CT", 22).gte(3)) value = player.SL.points.gte(1e30)
                if (challengeCompletions("CT", 22).gte(4)) value = player.SL.points.gte(1e34)
                return value
                },
            goalDescription: function() {
                let description = "1e25 Souls"
                if (challengeCompletions("CT", 22).gte(1)) description = "1e26 Souls"
                if (challengeCompletions("CT", 22).gte(2)) description = "1e28 Souls"
                if (challengeCompletions("CT", 22).gte(3)) description = "1e30 Souls"
                if (challengeCompletions("CT", 22).gte(4)) description = "1e34 Souls"
                return description
            },
            rewardDescription() { return "Souls are boosted by the amount of completions"+ format(rewardEffect)},
            rewardEffect() {
                let value = new Decimal(5);
                let eff = new Decimal(challengeCompletions("CT", 22)).max(1);
                value = value.pow(eff).times(eff);
                value = value.times(value);
                if (inChallenge("CT", 22)) value = new Decimal(1);
                return value;
              },
            onEnter(){player.SL.keep = true, player.SL.upgrades.push("11", "12", "13", "14", "15", "21") = true},
            onExit(){player.SL.keep = false, player.SL.upgrades.push("11", "12", "13", "14", "15", "21") = true},
            completionLimit: new Decimal(4),
            unlocked(){
                return hasUpgrade('SL', 21) || inChallenge('CT', 22) || hasChallenge('CT', 22)
            },
        },
    },
})