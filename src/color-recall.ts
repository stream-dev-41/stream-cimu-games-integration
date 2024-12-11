import { z } from "zod";

export const gameParams = z.void();
export type ColorRecallGameParams = z.infer<typeof gameParams>;

export const message = z
  .discriminatedUnion("kind", [
    z.object({
      kind: z
        .literal("[game]:initialized")
        .describe(
          "Should be the first event in the sequence, tells Stream when to send initial params",
        ),
    }),
    z.object({
      kind: z
        .literal("[host]:initial-params")
        .describe("Setup game with game params, after initialised"),
      userId: z.string().uuid("unique userId"),
      sessionId: z.string().describe("unique for each game session"),
      gameDurationInSeconds: z
        .number()
        .nonnegative()
        .int()
        .describe("the duration of the game in seconds"),
      gameParams,
    }),
    z.object({
      kind: z
        .literal("[game]:is-ready")
        .describe(
          "Sent after the game has been fully setup include loading asset/logic/etc...In other words, ready to play",
        ),
    }),
    z.object({
      kind: z
        .literal("[host]:start-game")
        .describe(
          "Start the game immediately, there should be no delay time after this event is sent to let the players play the game",
        ),
      timeLeftInSeconds: z
        .number()
        .nonnegative()
        .int()
        .describe(
          "how many seconds left before the game will end, should be 0 <= timeLeft <= gameDurationInSeconds",
        ),
    }),
    z.object({
      kind: z
        .literal("[game]:ended")
        .describe(
          "Game time is up or the player finishes early, then this event is sent",
        ),
      rounds: z.number().nonnegative().int(),
      scores: z.number().nonnegative().int(),
      elapsedTimeInSeconds: z
        .number()
        .nonnegative()
        .int()
        .describe(
          "Number of seconds elapsed since player stared the game until end or player finished it, should be 0 <= elapsed <= timeLeft",
        ),
    }),
  ])
  .and(
    z.object({
      version: z
        .literal(1)
        .describe(
          "this is to make sure our code knows how to handle if schema updated",
        ),
    }),
  );
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
} as const;
