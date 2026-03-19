addLayer("CT", {
    name: "Collapsed Timelines", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "CT", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
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
        style() {
                    return {
                        'background': 'transparent',
                        'background-image': 'radial-gradient(ellipse at top, #bc42f5d8, transparent),radial-gradient(ellipse at bottom, #8b22d1, transparent)',
                        'background-color': 'transparent',
                        'background-size': '100% 100%',
                        "background-position": "center"
                    }
                },
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
        if (player.CT.points.gte(2)) dis = "You are currently in Timeline 3 which is much different from the previous timelines...lets go meta. Also, Keep CT Challenges but they're hidden to prevent stuff from breaking severely!"
        return dis
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "t", description: "T: reset for Collapsed Timelines", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > this.row) layerDataReset(this.layer)
    },
    layerShown() {
        let value = false
        if (player.points.gte(1e9999) || player.CT.unlocked) value = true
        if (hasMilestone('O', 11)) value = false
        if (hasUpgrade('D', 45) || player.CT.points.gte(2)) value = true
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
        12: {
            requirementDescription: "2 Collapsed Timelines (Meta Time!)",
            effectDescription(){ 
                let des
                des = `Meta Everything, but with different functions`
                return des
            },
            done() { return player.CT.points.gte(2)},
            unlocked() { return player.CT.points.gte(2)},
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
                let unlock = (hasMilestone('EX', 11) || inChallenge('CT', 11) || hasChallenge('CT', 11))
                if (hasUpgrade('D', 45) || player.CT.points.gte(2)) unlock = false
                return unlock
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
                let unlock = (hasMilestone('FL', 11) || inChallenge('CT', 12) || hasChallenge('CT', 12))
                if (hasUpgrade('D', 45) || player.CT.points.gte(2)) unlock = false
                return unlock
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
            onExit(){if (player.SL.unlocked) player.SL.keep = false},
            unlocked(){
                let unlock = (hasUpgrade('EX', 22) || inChallenge('CT', 21) || hasChallenge('CT', 21))
                if (hasUpgrade('D', 45) || player.CT.points.gte(2)) unlock = false
                return unlock
            },
        },
        22: {
            name: "Soul Shield",
            challengeDescription: 
            `Souls are equiped with shields, but it's making it harder to progress.<br>
            Infect gain /500, Explosive gain /200<br>
            Floor Requirement is now 5 instead of 150!<br>
            Some Upgrades are also changed to make it easier (even some caps...)!<br>
            Soul Requirement is lower'd significantly!`,
            canComplete: function() {return player.SL.points.gte(1.77e22)},
            goalDescription: "1.77e22 Souls",
            rewardDescription() { return "Souls boosts itself (" + (format(player.SL.points.add(1).pow(0.06)) + "x)") + `<br> Keep Floors & Explosive Upgrades.`},
            onEnter(){ return player.SL.upgrades.push('11', '12', '13', '14', '15', '21')},
            onExit(){ return player.SL.upgrades.push('11', '12', '13', '14', '15', '21')},
            unlocked(){
                let unlock =  (hasUpgrade('SL', 21) || inChallenge('CT', 22) || hasChallenge('CT', 22))
                if (hasUpgrade('D', 45) || player.CT.points.gte(2)) unlock = false
                return unlock
            },
        },
        31: {
            name: "<glow-text>Unknown Fate [CT5]</glow-text>",
            challengeDescription: 
            `<metabox>Infection Wall</metabox> has been mutated into <glow-text>Collapsed Wall</glow-text>.<br>
            Be careful... as the wall is much stronger than before.<br>
            <glow-text>Collapsed Wall</glow-text> starts much earlier.<br><br>`,
            canComplete: function() {return getBuyableAmount('mF', 11).gte(2)},
            goalDescription: "Reach 'Experiment Breaker' Lv2",
            rewardDescription() { return "<metabox>Infection Wall</metabox> is much weaker outside of <glow-text>CT Challenges</glow-text>"},
            onEnter(){ player.mF.upgrades.push('11', '12', '13', '14', '15', '21')},
            onExit(){ player.mF.upgrades.keep('11', '12', '13', '14', '15', '21')},
            unlocked(){
                let unlock = (hasUpgrade('mF', 21) || inChallenge('CT', 31) || hasChallenge('CT', 31))
                return unlock
            },
        },
        32: {
            name: "<glow-text>Collapsive Generator [CT6]</glow-text>",
            challengeDescription: 
            `Unlock <glow-text>Corruptive Crystal</glow-text>'s Layer.<br>
            Disable all previous layers and <metabox>Infection Wall</metabox> starts much earlier.<br><br>`,
            canComplete: function() {return player.cC.generator.gte("1e40")},
            goalDescription: "Reach 1e40 <glow-text>Corruptive Generator Points</glow-text>",
            rewardDescription() { return "Unlock 5 more Meta-Experiment Upgrades"},
            onEnter(){ player.mF.upgrades.push('22')},
            onExit(){ player.mF.upgrades.keep('11', '12', '13', '14', '15', '21', '22')},
            unlocked(){
                let unlock = (hasUpgrade('mF', 22) || inChallenge('CT', 32) || hasChallenge('CT', 32))
                return unlock
            },
        },
    },
})