export const monster = {
    start: "cookie",

    pages: {
        "cookie": {
            text: "A friendly Monster appears and offers you a magic cookie.",
            image: "/art/cookieMonster.jpg",
            effects: {
                addItem: "magicCookie"
            },
            choices: [{
                label: "Turn around",
                next: "main:back"
            },
            {
                label: "You accept the cookie and take a bite",
                next: "cats:read"
            },
            {
                label: "Give the Cookie monster a ride on the dragon",
                next: "monster:dragonEnd",
                requiresItem: "dragonLord"
            }]
        },

        "dragonEnd": {
             text: "You, Hank, and the Cookie Monster are best of friends",
             image: "",
             choices: []
        }
    }

};
