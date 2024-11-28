import { z } from "zod";
import { createGameMessage, GameConfig } from "./common";

export const gameParams = z.object({
  level: z
    .number()
    .nonnegative()
    .int()
    .min(1)
    .max(3)
    .describe("game difficulty"),
});
export type MathCraftGameParams = z.infer<typeof gameParams>;

export const message = createGameMessage(
  gameParams,
  z.object({
    mistakes: z.number().nonnegative().int(),
    correctAnswers: z
      .number()
      .nonnegative()
      .int()
      .describe("The number of questions answered correctly in the game."),
  }),
);

export type MathCraftMessage = z.infer<typeof message>;

export const game = {
  id: "CIMU_MATH_CRAFT",
  url: "https://stream-math.342games.com",
  name: "MathCraft",
  shortDescription: "Remove the right blocks to reach the answer",
  message,

  // will be sanitized
  descriptionInHtml:
    "Users will select the right arithmetic blocks to eliminate in order to match the final answer. They will need to eliminate 1-2 blocks depending on the difficulty level. They need to correctly answer 2 rounds to earn rewards.",
  launchInstructionInHtml:
    "Select the duration of the StreamDrop and it’s difficulty level.",
  scoringRulesInHtml:
    "Fans are scored based on speed and equations solved correctly. They get 250 base gems for passing and 500 bonus gems for making into Top 100.",
} as const satisfies GameConfig<typeof message>;
