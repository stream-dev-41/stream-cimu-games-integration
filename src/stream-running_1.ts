import { z } from "zod";

export const gameParams = z
  .object({
    bestScores: z.number().nonnegative().int().describe("the game best scores"),
  })
  .describe("to be confirmed for each game, should be provided by CIMU");

export const streamRunningMessage_1 = z
  .discriminatedUnion("kind", [
    z.object({
      kind: z.literal("[game]:initialized"),
    }),
    z.object({
      kind: z.literal("[game]:is-ready"),
    }),
    z.object({
      kind: z.literal("[host]:initial-params"),
      userId: z.string().uuid("unique userId"),
      sessionId: z.string().describe("unique for each game session"),
      gameParams,
    }),
    z.object({
      kind: z.literal("[host]:start-game"),
    }),
    z.object({
      kind: z.literal("[game]:ended"),
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

export type StreamRunningMessage_1 = z.infer<typeof streamRunningMessage_1>;
export const experienceName = z.literal("STREAM_RUNNING");
export type ExperienceName = z.infer<typeof experienceName>;
