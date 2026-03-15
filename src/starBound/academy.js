export const academy = {
  start: "graduation",

  pages: {
    "graduation": {
      text: "You stand at the edge of the launch platform of the Star Academy. Today you receive your first deep space assignment.",
      image: "/art/academy-graduation.png",
      choices: [
        { label: "Request a science vessel", next: "academy:science" },
        { label: "Request a combat frigate", next: "academy:combat" },
        { label: "Take a risky experimental ship", next: "academy:experimental" }
      ]
    },

    "science": {
      text: "You are assigned the research vessel Horizon.",
      image: "/art/science-ship.png",
      effects: { setFlag: "scientist", addItem: "scanner" },
      choices: [
        { label: "Depart for Deep Space Station Orion", next: "station:start" }
      ]
    },

    "combat": {
      text: "You are assigned the combat frigate Valkyrie.",
      image: "/art/combat-ship.png",
      effects: { setFlag: "soldier", addItem: "plasmaCannon" },
      choices: [
        { label: "Depart for Deep Space Station Orion", next: "station:start" }
      ]
    },

    "experimental": {
      text: "You board a prototype ship powered by unstable alien tech.",
      image: "/art/experimental-ship.png",
      effects: { setFlag: "reckless", addItem: "voidCore" },
      choices: [
        { label: "Engage warp immediately", next: "academy:lost" },
        { label: "Plot a safe course to Orion Station", next: "station:start" }
      ]
    },

    "lost": {
      text: "The unstable core tears space open. Your ship vanishes into a fold in reality.",
      image: "/art/warp-failure.png",
      choices: [] // ENDING 1
    }
  }
};