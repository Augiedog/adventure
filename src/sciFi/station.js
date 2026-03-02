export const station = {
  start: "arrival",

  pages: {
    "arrival": {
      text: "You dock at Orion Station, a hub on the edge of mapped space.",
      image: "/art/orion-station.png",
      choices: [
        { label: "Investigate strange signals", next: "station:signal" },
        { label: "Meet the station commander", next: "station:commander" },
        { label: "Accept a mining contract", next: "station:mining" }
      ]
    },

    "signal": {
      text: "The signal originates from a nearby nebula.",
      image: "/art/signal.png",
      effects: { setFlag: "signalTracked" },
      choices: [
        { label: "Travel to the Nebula", next: "nebula:start" }
      ]
    },

    "commander": {
      text: "The commander warns you about rising Imperial patrols.",
      image: "/art/commander.png",
      effects: { setFlag: "empireWarned" },
      choices: [
        { label: "Prepare for political tension", next: "empire:start" }
      ]
    },

    "mining": {
      text: "While mining an asteroid, your crew uncovers ancient alien ruins.",
      image: "/art/asteroid-ruins.png",
      effects: { addItem: "alienRelic" },
      choices: [
        { label: "Study the relic", next: "station:study" },
        { label: "Sell it quietly", next: "station:sell" }
      ]
    },

    "study": {
      text: "The relic activates and bonds to you.",
      image: "/art/relic-activate.png",
      effects: { setFlag: "relicBound" },
      choices: [
        { label: "Follow its pull toward the Nebula", next: "nebula:start" }
      ]
    },

    "sell": {
      text: "The buyer betrays you. You are spaced without trial.",
      image: "/art/betrayal.png",
      choices: [] // ENDING 2
    }
  }
};