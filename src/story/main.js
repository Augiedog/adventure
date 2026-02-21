export const main = {

    pages: {
        "rule": {
            text: "You become a feared sorcerer, ruling the land with an iron fist.",
            image: "/art/evil-dark-magician.webp",
            choices: []
        },
        "leave": {
            text: "You return to your normal life, forever pondering the mysteries you've encountered.",
            image: "/art/end-of-line.jpg",
            choices: []
        },

        "investigate": {
            text: "You discover another magical colony, but this time of mystical creatures.",
            image: "",
            choices: [
                {
                    label: "Do you join them",
                    next: "main:join"
                },
                {
                    label: "Do you leave them?",
                    next: "main:leave"
                }
            ]
        },

        "join": {
            text: "You live out your days in wonder and magic, surrounded by fantastical beings.",
            image: "",
            choices: []
        },

        "continue": {
            text: "You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?",
            image: "",
            choices: [
                {
                    label: "Take the staircase",
                    next: "main:staircase"
                },
                {
                    label: "Use the ladder",
                    next: "main:ladder"
                }
            ]
        },

        "ladder": {
            text: "After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home. However, you notice a hidden passageway in the cave. Do you enter it or ignore it?",
            image: "",
            choices: [
                {
                    label: "Enter the hiddin passageway",
                    next: "main:enter"
                },
                {
                    label: "Ignore the hiddin passageway",
                    next: "main:leave"
                }
            ]
        },
        "enter": {
            text: "The passageway leads to a hidden treasure chamber. Do you take the treasure or leave it?",
            image: "",
            choices: [
                {
                    label: "Take the treasure",
                    next: "main:take"
                },
                {
                    label: "Leave the treasure",
                    next: "main:leave"
                }
            ]
        },
        "take": {
            text: "You become incredibly wealthy, but live in constant fear of being discovered.",
            image: "",
            choices: []
        },

        "staircase": {
            text: "After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.",
            image: "",
            choices: []
        },



        "explore-map": {
            text: "You navigate the traps and discover a hidden treasure, becoming wealthy.",
            image: "",
            choices: []
        },

        "back": {
            text: "You turn back, falling into a trap! You find yourself hanging from an edge over a cliff with a very long fall. A fariy appears before you and askes give yourself to me or fall",
            image: "",
            choices: [
                {
                    label: "fall",
                    next: "main:fall"
                },
                {
                    label: "give",
                    next: "main:give"
                }
            ]
        },

        "give": {
            text: "As you slip, and begin to fall the fairy quickly flies to you and everything fades to white! When you awaking you are confused at first, but soon relize you have become a Tree!! The fairies have binded your soul and now your branches cover the forest caonopy. You are where the fairies call home!",
            image: "",
            choices: []
        },

        "fall": {
            text: "You begin to fall, thinking about your life and all the things you've run from. You manage to orient yourself before the impact! As the flash of light hits your eyes, you wake up in your bed and think What's for breakfast?",
            image: "",
            choices: []
        },

        "discard": {
            text: "You return home, wondering what had gotton into you. Why you had ever thought you could go on an adventure!",
            image: "",
            choices: []
        },

        "away": {
            text: "After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?",
            image: "",
            choices: [
                {
                    label: "draw",
                    next: "main:draw"
                },
                {
                    label: "pick",
                    next: "main:pick"
                }
            ]
        },

        "draw": {
            text: "You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.",
            image: "",
            choices: []
        },

        "pick": {
            text: "You pick the flower and bring it home, and all marvel at its brilliance. However, over a short time it fades and eventually crumbles to dust.",
            image: "",
            choices: [
                // {
                //     label: "",
                //     next: ""
                // },
                // {
                //     label: "",
                //     next: ""
                // }
            ]
        },

    }
};
