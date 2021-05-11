export default {
  0: {
    letter: "A",
    description: "Flank Openings",
    codes: [
      {
        code: "A00-A39",
        description: "White First Moves other than 1. e4 1. d4",
      },
      { code: "A40-A44", description: "1. Atypical replies to 1.d4" },
      {
        code: "A45-A49",
        description: "1.d4 Nf6 without 2.c4: Atypical replies to 1...Nf6",
      },
      {
        code: "A50-A79",
        description:
          "1.d4 Nf6 2.c4 without 2...e6, 2...g6: Atypical Indian systems",
      },
      { code: "A80-A99", description: " 1.d4 f5: Dutch Defense" },
    ],
  },

  1: {
    letter: "B",
    description: "Semi-Open Games",
    codes: [
      {
        code: "B00-B09",
        description: "1.e4 without 1...c6, 1...c5, 1...e6, 1...e5 ",
      },
      { code: "B10-B19", description: "1.e4 c6: Caro–Kann Defence" },
      { code: "B20-B99", description: "1.e4 c5 Sicilian Defence" },
    ],
  },

  2: {
    letter: "C",
    description: "Open Games",
    codes: [
      { code: "C00-C19", description: "1.e4 e6 French Defense" },
      { code: "C20-C99", description: "1.e4 e4: Double King Pawn games" },
    ],
  },

  3: {
    letter: "D",
    description: "Closed Games and Semi-Closed Games",
    codes: [
      { code: "D00-D69", description: "1.d4 d5: Double Queen Pawn games" },
      {
        code: "D70-D99",
        description: "1.d4 Nf6 2.c4 g6 with 3...d5: Grünfeld Defence ",
      },
    ],
  },

  4: {
    letter: "E",
    description: "Indian Defences",
    codes: [
      {
        code: "E00-E59",
        description: "1.d4 Nf6 2.c4 e6: Indian systems with ...e6",
      },
      {
        code: "E60-E99",
        description:
          "1.d4 Nf6 2.c4 g6 without 3...d5: Indian systems with ...g6 (except Grünfeld)",
      },
    ],
  },
};
