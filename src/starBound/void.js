export const voidChapter = {
  start: "awakening",

  pages: {
    "awakening": {
      text: "The Void Intelligence speaks directly into your mind.",
      image: "/art/void-awaken.png",
      choices: [
        { label: "Merge with it", next: "voidChapter:merge" },
        { label: "Destroy it", next: "voidChapter:destroy" },
        { label: "Seal it away", next: "voidChapter:seal" }
      ]
    },

    "merge": {
      text: "You become a godlike entity beyond time.",
      image: "/art/void-merge.png",
      choices: [] // ENDING 9
    },

    "destroy": {
      text: "The explosion wipes out nearby systems — including yours.",
      image: "/art/supernova.png",
      choices: [] // ENDING 10
    },

    "seal": {
      text: "You imprison the Void Intelligence but lose your memories forever.",
      image: "/art/seal.png",
      choices: [] // ENDING 11
    }
  }
};