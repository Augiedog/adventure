export const forest = {
    start: "entrance",

    pages: {
        "entrance": {
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
    }
};
