export const empire = {
  start: "border",

  pages: {
    "border": {
      text: "Imperial ships block your path.",
      image: "/art/empire-fleet.png",
      choices: [
        { label: "Fight", next: "empire:fight", requiresItem: "plasmaCannon" },
        { label: "Negotiate", next: "empire:negotiate" },
        { label: "Reveal alien relic", next: "empire:reveal", requiresItem: "alienRelic" }
      ]
    },

    "fight": {
      text: "You win the battle and inspire rebellion.",
      image: "/art/space-battle.png",
      effects: { setFlag: "rebelHero" },
      choices: [
        { label: "Lead the rebellion", next: "empire:rule" }
      ]
    },

    "rule": {
      text: "You overthrow the Emperor and rule the galaxy.",
      image: "/art/galactic-throne.png",
      choices: [] // ENDING 5
    },

    "negotiate": {
      text: "You are imprisoned for treason.",
      image: "/art/prison.png",
      choices: [] // ENDING 6
    },

    "reveal": {
      text: "The relic terrifies the Empire. They kneel.",
      image: "/art/relic-power.png",
      choices: [
        { label: "Use this power wisely", next: "empire:wise" },
        { label: "Seize control brutally", next: "empire:tyrant" }
      ]
    },

    "wise": {
      text: "Peace spreads across the galaxy under your guidance.",
      image: "/art/peace.png",
      choices: [] // ENDING 7
    },

    "tyrant": {
      text: "You become worse than the Emperor ever was.",
      image: "/art/tyrant.png",
      choices: [] // ENDING 8
    }
  }
};