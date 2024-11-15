"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  cardDash: () => card_dash_exports,
  mathCraft: () => mathcraft_exports,
  matrixRun: () => matrix_run_exports,
  surgeRun: () => surge_run_exports,
  thirdPartyExperience: () => thirdPartyExperience
});
module.exports = __toCommonJS(src_exports);

// src/common.ts
var import_zod4 = require("zod");

// src/card-dash.ts
var card_dash_exports = {};
__export(card_dash_exports, {
  game: () => game,
  gameParams: () => gameParams,
  message: () => message
});
var import_zod = require("zod");
var gameParams = import_zod.z.object({
  level: import_zod.z.number().nonnegative().int().min(1).max(2).describe("game difficulty")
});
var message = import_zod.z.discriminatedUnion("kind", [
  import_zod.z.object({
    kind: import_zod.z.literal("[game]:initialized").describe(
      "Should be the first event in the sequence, tells Stream when to send initial params"
    )
  }),
  import_zod.z.object({
    kind: import_zod.z.literal("[host]:initial-params").describe("Setup game with game params, after initialised"),
    userId: import_zod.z.string().uuid("unique userId"),
    sessionId: import_zod.z.string().describe("unique for each game session"),
    gameDurationInSeconds: import_zod.z.number().nonnegative().int().describe("the duration of the game in seconds"),
    gameParams
  }),
  import_zod.z.object({
    kind: import_zod.z.literal("[game]:is-ready").describe(
      "Sent after the game has been fully setup include loading asset/logic/etc...In other words, ready to play"
    )
  }),
  import_zod.z.object({
    kind: import_zod.z.literal("[host]:start-game").describe(
      "Start the game immediately, there should be no delay time after this event is sent to let the players play the game"
    ),
    timeLeftInSeconds: import_zod.z.number().nonnegative().int().describe(
      "how many seconds left before the game will end, should be 0 <= timeLeft <= gameDurationInSeconds"
    )
  }),
  import_zod.z.object({
    kind: import_zod.z.literal("[game]:ended").describe(
      "Game time is up or the player finishes early, then this event is sent"
    ),
    scores: import_zod.z.number().nonnegative().int(),
    pairs: import_zod.z.number().nonnegative().int(),
    mistakes: import_zod.z.number().nonnegative().int(),
    elapsedTimeInSeconds: import_zod.z.number().nonnegative().int().describe(
      "Number of seconds elapsed since player stared the game until end or player finished it, should be 0 <= elapsed <= timeLeft"
    )
  })
]).and(
  import_zod.z.object({
    version: import_zod.z.literal(1).describe(
      "this is to make sure our code knows how to handle if schema updated"
    )
  })
);
var game = {
  id: "CIMU_CARD_DASH",
  url: "https://stream.342games.com",
  name: "Card Dash",
  shortDescription: "Match the pairs as fast as you can",
  message,
  // will be sanitized
  descriptionInHtml: "A 3x4 board of cards will be displayed face down. Fans will have to memorize and try their best to match the hidden pairs on the board as fast as possible before the time runs out.",
  launchInstructionInHtml: "Normal mode: Each pair is accompanied with a distinct background color to aid with visual memory<br/>Hard mode: Each pair has the same background color, making it more challenging for fans",
  scoringRulesInHtml: "Fans are scored based on speed and accuracy. They get 250 Base Points for passing and 500 Bonus for making into Top 100."
};

// src/mathcraft.ts
var mathcraft_exports = {};
__export(mathcraft_exports, {
  game: () => game2,
  gameParams: () => gameParams2,
  message: () => message2
});
var import_zod2 = require("zod");
var gameParams2 = import_zod2.z.object({
  level: import_zod2.z.number().nonnegative().int().min(1).max(3).describe("game difficulty")
});
var message2 = import_zod2.z.discriminatedUnion("kind", [
  import_zod2.z.object({
    kind: import_zod2.z.literal("[game]:initialized").describe(
      "Should be the first event in the sequence, tells Stream when to send initial params"
    )
  }),
  import_zod2.z.object({
    kind: import_zod2.z.literal("[host]:initial-params").describe("Setup game with game params, after initialised"),
    userId: import_zod2.z.string().uuid("unique userId"),
    sessionId: import_zod2.z.string().describe("unique for each game session"),
    gameDurationInSeconds: import_zod2.z.number().nonnegative().int().describe("the duration of the game in seconds"),
    gameParams: gameParams2
  }),
  import_zod2.z.object({
    kind: import_zod2.z.literal("[game]:is-ready").describe(
      "Sent after the game has been fully setup include loading asset/logic/etc...In other words, ready to play"
    )
  }),
  import_zod2.z.object({
    kind: import_zod2.z.literal("[host]:start-game").describe(
      "Start the game immediately, there should be no delay time after this event is sent to let the players play the game"
    ),
    timeLeftInSeconds: import_zod2.z.number().nonnegative().int().describe(
      "how many seconds left before the game will end, should be 0 <= timeLeft <= gameDurationInSeconds"
    )
  }),
  import_zod2.z.object({
    kind: import_zod2.z.literal("[game]:ended").describe(
      "Game time is up or the player finishes early, then this event is sent"
    ),
    scores: import_zod2.z.number().nonnegative().int(),
    correctAnswers: import_zod2.z.number().nonnegative().int().describe("The number of questions answered correctly in the game."),
    mistakes: import_zod2.z.number().nonnegative().int(),
    elapsedTimeInSeconds: import_zod2.z.number().nonnegative().int().describe(
      "Number of seconds elapsed since player stared the game until end or player finished it, should be 0 <= elapsed <= timeLeft"
    )
  })
]).and(
  import_zod2.z.object({
    version: import_zod2.z.literal(1).describe(
      "this is to make sure our code knows how to handle if schema updated"
    )
  })
);
var game2 = {
  id: "CIMU_MATH_CRAFT",
  url: "https://stream-math.342games.com",
  name: "MathCraft",
  shortDescription: "Remove the right blocks to reach the answer",
  message: message2,
  // will be sanitized
  descriptionInHtml: "Users will select the right arithmetic blocks to eliminate in order to match the final answer. They will need to eliminate 1-2 blocks depending on the difficulty level. They need to correctly answer 2 rounds to earn rewards.",
  launchInstructionInHtml: "Select the duration of the StreamDrop and it\u2019s difficulty level.",
  scoringRulesInHtml: "Fans are scored based on speed and equations solved correctly. They get 250 base gems for passing and 500 bonus gems for making into Top 100."
};

// src/matrix-run.ts
var matrix_run_exports = {};
__export(matrix_run_exports, {
  game: () => game3,
  gameParams: () => gameParams3,
  message: () => message3
});
var import_zod3 = require("zod");
var gameParams3 = import_zod3.z.object({
  level: import_zod3.z.number().nonnegative().int().min(1).max(3).describe("game difficulty")
});
var message3 = import_zod3.z.discriminatedUnion("kind", [
  import_zod3.z.object({
    kind: import_zod3.z.literal("[game]:initialized").describe(
      "Should be the first event in the sequence, tells Stream when to send initial params"
    )
  }),
  import_zod3.z.object({
    kind: import_zod3.z.literal("[host]:key").describe("Send key event to the game, e.g. keyboard or controller")
  }),
  import_zod3.z.object({
    kind: import_zod3.z.literal("[host]:initial-params").describe("Setup game with game params, after initialised"),
    userId: import_zod3.z.string().uuid("unique userId"),
    sessionId: import_zod3.z.string().describe("unique for each game session"),
    gameParams: gameParams3
  }),
  import_zod3.z.object({
    kind: import_zod3.z.literal("[game]:is-ready").describe(
      "Sent after the game has been fully setup include loading asset/logic/etc...In other words, ready to play"
    )
  }),
  import_zod3.z.object({
    kind: import_zod3.z.literal("[host]:start-game").describe(
      "Start the game immediately, there should be no delay time after this event is sent to let the players play the game"
    )
  }),
  import_zod3.z.object({
    kind: import_zod3.z.literal("[game]:ended").describe(
      "Game time is up or the player finishes early, then this event is sent"
    ),
    scores: import_zod3.z.number().nonnegative().int()
  })
]).and(
  import_zod3.z.object({
    version: import_zod3.z.literal(1).describe(
      "this is to make sure our code knows how to handle if schema updated"
    )
  })
);
var game3 = {
  id: "CIMU_MATRIX_RUN",
  url: "https://stream-run30.342games.com",
  name: "Matrix Run",
  shortDescription: "TBU",
  message: message3,
  // will be sanitized
  descriptionInHtml: "TBU",
  launchInstructionInHtml: "TBU",
  scoringRulesInHtml: "TBU"
};

// src/common.ts
var thirdPartyExperience = import_zod4.z.enum([
  game.id,
  game2.id,
  game3.id
  // add more games here
]);

// src/surge-run.ts
var surge_run_exports = {};
__export(surge_run_exports, {
  game: () => game4,
  gameParams: () => gameParams4,
  message: () => message4
});
var import_zod5 = require("zod");
var gameParams4 = import_zod5.z.object({
  bestScores: import_zod5.z.number().int().min(0).describe("used to display user's personal best score"),
  device: import_zod5.z.enum(["mobile", "desktop"])
});
var message4 = import_zod5.z.discriminatedUnion("kind", [
  import_zod5.z.object({
    kind: import_zod5.z.literal("[game]:initialized").describe(
      "Should be the first event in the sequence, tells Stream when to send initial params"
    )
  }),
  import_zod5.z.object({
    kind: import_zod5.z.literal("[host]:key").describe("Send key event to the game, e.g. keyboard or controller")
  }),
  import_zod5.z.object({
    kind: import_zod5.z.literal("[host]:initial-params").describe("Setup game with game params, after initialised"),
    userId: import_zod5.z.string().uuid("unique userId"),
    sessionId: import_zod5.z.string().describe("unique for each game session"),
    gameParams: gameParams4
  }),
  import_zod5.z.object({
    kind: import_zod5.z.literal("[game]:is-ready").describe(
      "Sent after the game has been fully setup include loading asset/logic/etc...In other words, ready to play"
    )
  }),
  import_zod5.z.object({
    kind: import_zod5.z.literal("[host]:start-game").describe(
      "Start the game immediately, there should be no delay time after this event is sent to let the players play the game"
    )
  }),
  import_zod5.z.object({
    kind: import_zod5.z.literal("[game]:ended").describe(
      "Game time is up or the player finishes early, then this event is sent"
    ),
    scores: import_zod5.z.number().nonnegative().int()
  })
]).and(
  import_zod5.z.object({
    version: import_zod5.z.literal(1).describe(
      "this is to make sure our code knows how to handle if schema updated"
    )
  })
);
var game4 = {
  id: "CIMU_SURGE_RUN",
  url: "https://stream-run.342games.com",
  name: "Surge Run",
  shortDescription: "TBU",
  message: message4,
  // will be sanitized
  descriptionInHtml: "TBU",
  launchInstructionInHtml: "TBU",
  scoringRulesInHtml: "TBU"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cardDash,
  mathCraft,
  matrixRun,
  surgeRun,
  thirdPartyExperience
});
