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
  game: () => game,
  gameParams: () => gameParams,
  streamMatchMessage: () => streamMatchMessage,
  thirdPartyExperience: () => thirdPartyExperience
});
module.exports = __toCommonJS(src_exports);

// src/common.ts
var import_zod2 = require("zod");

// src/stream-match.ts
var import_zod = require("zod");
var gameParams = import_zod.z.object({
  level: import_zod.z.number().nonnegative().int().min(1).max(2).describe("game difficulty")
}).describe("to be confirmed for each game, should be provided by CIMU");
var streamMatchMessage = import_zod.z.discriminatedUnion("kind", [
  import_zod.z.object({
    kind: import_zod.z.literal("[game]:is-ready")
  }),
  import_zod.z.object({
    kind: import_zod.z.literal("[host]:initial-params"),
    userId: import_zod.z.string().uuid("unique userId"),
    sessionId: import_zod.z.string().describe("unique for each game session"),
    gameDurationInSeconds: import_zod.z.number().nonnegative().int().describe("the duration of the game in seconds"),
    gameParams
  }),
  import_zod.z.object({
    kind: import_zod.z.literal("[host]:start-game"),
    timeLeftInSeconds: import_zod.z.number().nonnegative().int().describe(
      "how many seconds left before the game will end, should be 0 <= timeLeft <= gameDurationInSeconds"
    )
  }),
  import_zod.z.object({
    kind: import_zod.z.literal("[game]:ended"),
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
  id: "CIMU_STREAM_MATCH",
  url: "https://stream.342games.com",
  name: "Stream Match",
  shortDescription: "Match the pairs as fast as you can",
  // will be sanitized
  descriptionInHtml: "A 3x4 board of cards will be displayed face down. Fans will have to memorize and try their best to match the hidden pairs on the board as fast as possible before the time runs out.",
  launchInstructionInHtml: "Normal mode: Each pair is accompanied with a distinct background color to aid with visual memory<br/>Hard mode: Each pair has the same background color, making it more challenging for fans",
  scoringRulesInHtml: "Fans are scored based on speed and accuracy. They get 250 Base Points for passing and 500 Bonus for making into Top 100."
};

// src/common.ts
var thirdPartyExperience = import_zod2.z.enum([
  game.id
  // add more games here
]);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  game,
  gameParams,
  streamMatchMessage,
  thirdPartyExperience
});
