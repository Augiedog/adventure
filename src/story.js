const story = {
    start: "forest-entrance",

    pages: {
        "forest-entrance": {
            text: "You are walking alone in a dark ancient forest, where deep into a path you come across a fork in the road.",
            image: "/art/forest-entrance.png",
            choices: [
                {
                    label: "Take the left path",
                    next: "left-path"
                },
                {
                    label: "Take the right path",
                    next: "right-path"
                }
                // {
                //     label: "dragon",
                //     next: "monster.dragon"
                // }
            ]
        },

        "left-path": {
            text: "You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through.",
            image: "/art/left-path.png",
            choices: [
                {
                    label: "Follow the cat",
                    next: "follow-cat"
                },
                {
                    label: "Continue on the path",
                    next: "continue"
                }
            ]
        },

        "follow-cat": {
            text: "You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.",
            image: "/art/kitty-cat-den.jpg",
            choices: [
                {
                    label: "Stay in the cat haven",
                    next: "stay-cat"
                },
                {
                    label: "Tell the World about this magical place",
                    next: "spread"
                }
            ]
        },

        "stay-cat": {
            text: "You live happily amongst the cats for the rest of your days. One day, you find a hidden tunnel in the colony.",
            image: "",
            choices: [
                {
                    label: "Explore the hidden tunnel",
                    next: "explore"
                },
                {
                    label: "Ignore the tunnel",
                    next: "ignore"
                }
            ]
        },

        "explore": {
            text: "The tunnel leads you to an ancient underground library filled with magical books.",
            image: "",
            choices: [
                {
                    label: "Read the Books",
                    next: "read"
                },
                {
                    label: "Leave the Library",
                    next: "leave"
                }
            ]
        },

        "read": {
            text: "You gain immense knowledge and become a powerful wizard. You decide to use your powers to help the world or rule it.",
            image: "",
            choices: [
                {
                    label: "Help the world",
                    next: "help"
                },
                {
                    label: "Rule the world",
                    next: "rule"
                }
            ]
        },

        "help": {
            text: "You become a legendary hero, known for your wisdom and kindness. And you have some pretty Awesome cat friends!",
            image: "/art/105706.jpg",
            choices: []
        },

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

        "ignore": {
            text: "You continue living peacefully with the cats.",
            image: "",
            choices: []
        },

        "spread": {
            text: "After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless. Years later, you hear rumors of a similar colony.",
            image: "",
            choices: [
                {
                    label: "Investigate the rumors",
                    next: "investigate"
                },
                {
                    label: "Ignore the rumors",
                    next: "leave"
                }
            ]
        },

        "investigate": {
            text: "You discover another magical colony, but this time of mystical creatures.",
            image: "",
            choices: [
                {
                    label: "Do you join them",
                    next: "join"
                },
                {
                    label: "Do you leave them?",
                    next: "leave"
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
                    next: "staircase"
                },
                {
                    label: "Use the ladder",
                    next: "ladder"
                }
            ]
        },

        "ladder": {
            text: "After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home. However, you notice a hidden passageway in the cave. Do you enter it or ignore it?",
            image: "",
            choices: [
                {
                    label: "Enter the hiddin passageway",
                    next: "enter"
                },
                {
                    label: "Ignore the hiddin passageway",
                    next: "leave"
                }
            ]
        },
        "enter": {
            text: "The passageway leads to a hidden treasure chamber. Do you take the treasure or leave it?",
            image: "",
            choices: [
                {
                    label: "Take the treasure",
                    next: "take"
                },
                {
                    label: "Leave the treasure",
                    next: "leave"
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

        "right-path": {
            text: "You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure past the dragon. Another path would lead you away from the dragon altogether. Which path do you take?",
            image: "/art/dragon-sleeping.jpg",
            choices: [
                {
                    label: "Path past the Dragon",
                    next: "past"
                },
                {
                    label: "Path away from the Dragon",
                    next: "away"
                }
            ]
        },

        "past": {
            text: "The dragon wakes up and sits upright. You only have a moment to respond, are you going to stay or run",
            image: "",
            choices: [
                {
                    label: "You stay still",
                    next: "stay-dragon"
                },
                {
                    label: "You run for it",
                    next: "run-dragon"
                }
            ]
        },

        "stay-dragon": {
            text: "You and the dragon have an uplifting conversation about local politics and become lifelong friends. The Dragon's name is Hank and he lets you ride him. One day, Hank asks for your help to retrieve a stolen artifact. Do you help him or decline?",
            image: "/art/dragon-rider.jpg",
            choices: [
                {
                    label: "Help Hank find the artifact",
                    next: "help-dragon"
                },
                {
                    label: "Decline the offer",
                    next: "decline"
                }
            ]
        },

        "help-dragon": {
            text: "You embark on a thrilling adventure with Hank and successfully retrieve the artifact. Do you keep it or give it back to Hank?",
            image: "",
            choices: [
                {
                    label: "Keep the artifact for your self",
                    next: "keep-dragon"
                },
                {
                    label: "Give the artifact to Hank",
                    next: "give-dragon"
                }
            ]
        },

        "keep-dragon": {
            text: "Hank is disappointed and dosen't really understand. You two get into a fight. You have gained immense power from the artifact and can easily hold your own against Hank. After laying Hank out unconscious, he never really comes around anymore. You've become lonly as no one understands you. The artifact has givin you a power that nothing can handle.",
            image: "/art/104310.jpg",
            choices: []
        },

        "give-dragon": {
            text: "Hank is grateful and you both continue to have many more adventures together.",
            image: "",
            choices: []
        },

        "delcine": {
            text: "Hank is disappointed but respects your decision. You continue to be friends and have smaller adventures together, but you don't get free rides anymore.",
            image: "",
            choices: []
        },

        "run-dragon": {
            text: "Quickly, you run back to the cave's entrance. Sheepish, you turn towards home. However, you look down and see a map dropped by the dragon. Do you follow it or discard it?",
            image: "",
            choices: [
                {
                    label: "follow",
                    next: "follow-map"
                }, {
                    label: "discard",
                    next: "discard"
                }]
        },

        "follow-map": {
            text: "The map leads to an ancient ruin filled with traps and treasures. Do you explore or turn back?",
            image: "",
            choices: [
                {
                    label: "explore",
                    next: "explore-map"
                },
                {
                    label: "turn back",
                    next: "back"
                }
            ]
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
                    next: "fall"
                },
                {
                    label: "give",
                    next: "give-into"
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
                    next: "draw"
                },
                {
                    label: "pick",
                    next: "pick"
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

export default story;
