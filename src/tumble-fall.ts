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
export type TumbleFallGameParams = z.infer<typeof gameParams>;

export const message = createGameMessage(gameParams, {
  falls: z.number().nonnegative().int(),
});
export type TumbleFallMessage = z.infer<typeof message>;

export const game = {
  id: "CIMU_TUMBLE_FALL",
  url: "https://stream-four.342games.com",
  name: "Tumble Fall",
  shortDescription: "Jump your way down to score points",
  message,

  // will be sanitized
  descriptionInHtml:
    "Users will tumble their way different sized platforms to get the highest score possible. Size of platforms depends on difficulty level selected by creators.",
  launchInstructionInHtml:
    "Normal mode: Larger sized platforms\nHard mode: Smaller sized platforms",
  scoringRulesInHtml:
    "Fans are scored based on the number of successful jumps. Landing in the middle consecutively builds a streak. They get 250 base gems for passing and 500 bonus gems for making into Top 100.",
} as const satisfies GameConfig<typeof message>;
