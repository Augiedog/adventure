export const cats = {
    pages: {
        "end": {
            text: "You find a colony of magical cats.",
            image: "",
            choices: []
        },

        "stray": {
            text: "You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through.",
            image: "/art/left-path.png",
            choices: [
                {
                    label: "Follow the cat",
                    next: "cats:follow"
                },
                {
                    label: "Continue on the path",
                    next: "main:continue"
                }
            ]
        },

        "follow": {
            text: "You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.",
            image: "/art/kitty-cat-den.jpg",
            choices: [
                {
                    label: "Stay in the cat haven",
                    next: "cats:stay"
                },
                {
                    label: "Tell the World about this magical place",
                    next: "cats:spread"
                }
            ]
        },

        "stay": {
            text: "You live happily amongst the cats for the rest of your days. One day, you find a hidden tunnel in the colony.",
            image: "",
            choices: [
                {
                    label: "Explore the hidden tunnel",
                    next: "cats:explore"
                },
                {
                    label: "Ignore the tunnel",
                    next: "cats:ignore"
                }
            ]
        },

        "ignore": {
            text: "You continue living peacefully with the cats.",
            image: "",
            choices: []
        },

        "explore": {
            text: "The tunnel leads you to an ancient underground library filled with magical books.",
            image: "",
            choices: [
                {
                    label: "Read the Books",
                    next: "cats:read"
                },
                {
                    label: "Leave the Library",
                    next: "main:leave"
                }
            ]
        },

        "read": {
            text: "You gain immense knowledge and become a powerful wizard. You decide to use your powers to help the world or rule it.",
            image: "",
            choices: [
                {
                    label: "Help the world",
                    next: "cats:help"
                },
                {
                    label: "Rule the world",
                    next: "main:rule"
                }
            ]
        },

        "help": {
            text: "You become a legendary hero, known for your wisdom and kindness. And you have some pretty Awesome cat friends!",
            image: "/art/105706.jpg",
            choices: []
        },

        "spread": {
            text: "After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless. Years later, you hear rumors of a similar colony.",
            image: "",
            choices: [
                {
                    label: "Investigate the rumors",
                    next: "cats:investigate"
                },
                {
                    label: "Ignore the rumors",
                    next: "main:leave"
                }
            ]
        }
    }
};
