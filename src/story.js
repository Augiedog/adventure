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
            ]
        },

        "left-path": {
            text: "You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through.",
            image: "/art/left-path.png",
            choices: [
                {
                    label: "Follow the cat",
                    next: "follow"
                },
                {
                    label: "Continue on the path",
                    next: "take-path"
                }
            ]
        },

        "follow": {
            text: "You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.",
            image: "",
            choices: [
                {
                    label: "Stay in the cat haven",
                    next: "stay"
                },
                {
                    label: "Tell the World about this magical place",
                    next: "spread"
                }
            ]
        },

        "stay": {
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
            text: "You become a legendary hero, known for your wisdom and kindness.",
            image: "",
            choices: []
        },

        "rule": {
            text: "You become a feared sorcerer, ruling the land with an iron fist.",
            image: "",
            choices: []
        },

        "leave": {
            text: "You return to the cat colony, content with your simple life.",
            image: "",
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
                    next: "ignore"
                }
            ]
        },

        "layout": {
            text: "",
            image: "",
            choices: [
                {
                    label: "",
                    next: ""
                },
                {
                    label: "",
                    next: ""
                }
            ]
        },

        // "layout": {
        //     text: "",
        //     image: "",
        //     choices: [
        //         {
        //             label: "",
        //             next: ""
        //         },
        //         {
        //             label: "",
        //             next: ""
        //         }
        //     ]
        // },

        "monster": {
            text: "A friendly monster appears and offers you a cookie.",
            image: "/art/dragon.jpg",
            choices: []
        }
    }
};

export default story;
