import { z } from "zod";

export const gameParams = z.object({
  bestScores: z
    .number()
    .int()
    .min(0)
    .describe("used to display user's personal best score"),
  device: z.enum(["mobile", "desktop"]),
});
export type MatrixRunGameParams = z.infer<typeof gameParams>;

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
        .literal("[host]:key")
        .describe("Send key event to the game, e.g. keyboard or controller"),
    }),
    z.object({
      kind: z
        .literal("[host]:initial-params")
        .describe("Setup game with game params, after initialised"),
      userId: z.string().uuid("unique userId"),
      sessionId: z.string().describe("unique for each game session"),
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
    }),
    z.object({
      kind: z
        .literal("[game]:ended")
        .describe(
          "Game time is up or the player finishes early, then this event is sent",
        ),
      scores: z.number().nonnegative().int(),
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
export type MatrixRunMessage = z.infer<typeof message>;

export const game = {
  id: "CIMU_MATRIX_RUN",
  url: "https://stream-run30.342games.com",
  name: "Matrix Run",
  shortDescription: "TBU",
  message,

  // will be sanitized
  descriptionInHtml: "TBU",
  launchInstructionInHtml: "TBU",
  scoringRulesInHtml: "TBU",
} as const;
