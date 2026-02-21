export const monster = {
    start: "cookie",

    pages: {
        "cookie": {
            text: "A friendly Monster appears and offers you a cookie.",
            image: "/art/cookieMonster.jpg",
            choices: [ {
                    label: "Turn around",
                    next: "main:back"
                }]
        }
    }

};
