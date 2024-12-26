import { z } from "zod";
import { createGameMessage, GameConfig } from "./util";

export const gameParams = z.object({
  level: z
    .number()
    .nonnegative()
    .int()
    .min(1)
    .max(2)
    .describe("game difficulty"),
});
export type CardDashGameParams = z.infer<typeof gameParams>;

export const message = createGameMessage(gameParams, {
  pairs: z.number().nonnegative().int(),
  mistakes: z.number().nonnegative().int(),
});
export type CardDashMessage = z.infer<typeof message>;

export const game = {
  id: "CIMU_CARD_DASH",
  url: "https://stream.342games.com",
  name: "Card Dash",
  shortDescription: "Match the pairs as fast as you can",
  message,
  descriptionInHtml:
    "A 3x4 board of cards will be displayed face down. Fans will have to memorize and try their best to match the hidden pairs on the board as fast as possible before the time runs out.",
  launchInstructionInHtml:
    "Normal mode: Each pair is accompanied with a distinct background color to aid with visual memory<br/>Hard mode: Each pair has the same background color, making it more challenging for fans",
  scoringRulesInHtml:
    "Fans are scored based on speed and accuracy. They get 250 Base Points for passing and 500 Bonus for making into Top 100.",
} as const satisfies GameConfig<typeof message>;
