export const nebula = {
  start: "enter",

  pages: {
    "enter": {
      text: "The nebula pulses like a living organism.",
      image: "/art/nebula.png",
      choices: [
        { label: "Scan the anomaly", next: "nebula:scan", requiresItem: "scanner" },
        { label: "Push through aggressively", next: "nebula:force" },
        { label: "Meditate and listen", next: "nebula:listen" }
      ]
    },

    "scan": {
      text: "You discover an ancient Void Intelligence awakening.",
      image: "/art/void-intel.png",
      effects: { setFlag: "voidAwakened" },
      choices: [
        { label: "Contact it peacefully", next: "voidChapter:start" }
      ]
    },

    "force": {
      text: "Energy storms rip your ship apart.",
      image: "/art/ship-destroyed.png",
      choices: [] // ENDING 3
    },

    "listen": {
      text: "The nebula grants you cosmic awareness.",
      image: "/art/cosmic-awareness.png",
      effects: { setFlag: "enlightened" },
      choices: [
        { label: "Seek the Empire with new wisdom", next: "empire:start" },
        { label: "Transcend into energy", next: "nebula:transcend" }
      ]
    },

    "transcend": {
      text: "Your body dissolves into stardust. You become part of the nebula forever.",
      image: "/art/transcend.png",
      choices: [] // ENDING 4
    }
  }
};