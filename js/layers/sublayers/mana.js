
addLayer("L", {
    name: "Lore",
    symbol: "L",
    position: 0,
    startData() {return {
        unlocked: true,
    }},
    color: "blue",
    tooltip() {return false},
    row: "side",
    infoboxes: {
        lore: {
            title: "Log I",
            body() {return "It's you? So Listen I don't have a lot of time I need to explain this to you fast! "
                    + "So you are the adventurer. Your job is to get Powerful to destroy the Celestials. Evil ones! "
                    + "My name is Jacorb. I am here to help you. You have to reach the ?????? layer. With that layer "
                    + "you'll be able to get powerful than before these layers are just the beggining. After you get"
                    + " that layer, I will send you with my reinforcements somewhere."},
        },
        lared: {
            title: "Log II",
            body() {return "Aarex doesn't want to talk with us anymore. After what happened to Acamada... I really wished"
                    + " she told us about her plan. It's too late."},
        },
    },
    layerShown() {return true},
})