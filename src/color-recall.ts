import { z } from "zod";
import { createGameMessage, GameConfig } from "./util";

export const gameParams = z.object({});
export type ColorRecallGameParams = z.infer<typeof gameParams>;

export const message = createGameMessage(gameParams, {
  rounds: z.number().nonnegative().int(),
});
export type ColorRecallMessage = z.infer<typeof message>;

export const game = {
  id: "CIMU_COLOR_RECALL",
  url: "https://stream-five.342games.com",
  name: "Color Recall",
  shortDescription: "Recall the positions of the colored dots ",
  message,

  // will be sanitized
  descriptionInHtml:
    "Users will have 3 rounds where they will be shown 4 different pair of color dots. The goal is to try and recall the positions of these dots as accurately as possible for the highest score.",
  launchInstructionInHtml: "Select the duration of the StreamDrop",
  scoringRulesInHtml:
    "Fans are scored based on the proximity of their guesses to the actual answer. They get 250 base games for passing and 500 bonus gems for making into Top 100.",
} as const satisfies GameConfig<typeof message>;
