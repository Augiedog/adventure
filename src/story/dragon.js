export const dragon = {
    start: "hank",
    pages: {
        "hank": {
            text: "You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure past the dragon. Another path would lead you away from the dragon altogether. Which path do you take?",
            image: "/art/dragon-sleeping.jpg",
            choices: [
                {
                    label: "Path past the Dragon",
                    next: "dragon:past"
                },
                {
                    label: "Path away from the Dragon",
                    next: "main:flower"
                }
            ]
        },

        "past": {
            text: "The dragon wakes up and sits upright. You only have a moment to respond, are you going to stay or run",
            image: "",
            choices: [
                {
                    label: "You stay still",
                    next: "dragon:stay"
                },
                {
                    label: "You run for it",
                    next: "dragon:run"
                }
            ]
        },

        "stay": {
            text: "You and the dragon have an uplifting conversation about local politics and become lifelong friends. The Dragon's name is Hank and he lets you ride him. One day, Hank asks for your help to retrieve a stolen artifact. Do you help him or decline?",
            image: "/art/dragon-rider.jpg",
            choices: [
                {
                    label: "Help Hank find the artifact",
                    next: "dragon:help"
                },
                {
                    label: "Decline the offer",
                    next: "dragon:decline"
                }
            ]
        },

        "help": {
            text: "You embark on a thrilling adventure with Hank and successfully retrieve the artifact. Do you keep it or give it back to Hank?",
            image: "",
            choices: [
                {
                    label: "Keep the artifact for your self",
                    next: "dragon:keep"
                },
                {
                    label: "Give the artifact to Hank",
                    next: "dragon:give"
                }
            ]
        },

        "keep": {
            text: "Hank is disappointed and dosen't really understand. You two get into a fight. You have gained immense power from the artifact and can easily hold your own against Hank. After laying Hank out unconscious, he never really comes around anymore. You've become lonly as no one understands you. The artifact has givin you a power that nothing can handle.",
            image: "/art/104310.jpg",
            choices: []
        },

        "give": {
            text: "Hank is grateful and you both continue to have many more adventures together.",
            image: "",
            effects: {
                setFlag: "dragonLord",
                addItem: "dragonLord"
            },
            choices: [{
                    label: "You see a the Cookie Monster again",
                    next: "monster:start",
                    requiresItem: "magicCookie"
                },{
                    label: "Fly to the start",
                    next: "forest:start"
                }]
        },

        "decline": {
            text: "Hank is disappointed but respects your decision. You continue to be friends and have smaller adventures together, but you don't get free rides anymore.",
            image: "",
            choices: []
        },

        "run": {
            text: "Quickly, you run back to the cave's entrance. Sheepish, you turn towards home. However, you look down and see a map dropped by the dragon. Do you follow it or discard it?",
            image: "",
            choices: [
                {
                    label: "follow",
                    next: "dragon:follow-map"
                }, {
                    label: "discard",
                    next: "main:discard"
                }]
        },

        "follow-map": {
            text: "The map leads to an ancient ruin filled with traps and treasures. Do you explore or turn back?",
            image: "",
            choices: [
                {
                    label: "explore",
                    next: "main:explore-map"
                },
                {
                    label: "turn back",
                    next: "main:back"
                }
            ]
        }
    }

};