import { z } from "zod";
import { createGameMessage, GameConfig, withKeyEvent } from "./common";

export const gameParams = z.object({
  level: z
    .number()
    .nonnegative()
    .int()
    .min(1)
    .max(2)
    .describe("game difficulty"),
});
export type MatrixRunGameParams = z.infer<typeof gameParams>;

export const message = withKeyEvent(createGameMessage(gameParams));
export type MatrixRunMessage = z.infer<typeof message>;

export const game = {
  id: "CIMU_MATRIX_RUN",
  url: "https://stream-run30.342games.com",
  name: "Matrix Run",
  shortDescription: "Run and jump as far as your can",
  message,

  // will be sanitized
  descriptionInHtml:
    "Avoid the obstacles and escape as far as possible in the matrix. The speed increases with distance travelled. ",
  launchInstructionInHtml:
    "Normal mode: No flying obstacles<br/>Hard mode: Flying obstacles introduced",
  scoringRulesInHtml: "Fans are scored based on the final distance achieved",
} as const satisfies GameConfig<typeof message>;
