import { z } from "zod";

export const streamMatchMessage = z
  .discriminatedUnion("kind", [
    z.object({
      kind: z.literal("[game]:is-ready"),
    }),
    z.object({
      kind: z.literal("[host]:initial-params"),
      userId: z.string().uuid("unique userId"),
      sessionId: z.string().describe("unique for each game session"),
      gameDurationInSeconds: z
        .number()
        .nonnegative()
        .int()
        .describe("drop time unit second"),
      gameParams: z
        .object({
          level: z.number().nonnegative().int().describe("limit [1,2]"),
        })
        .describe("to be confirmed for each game, should be provided by CIMU"),
    }),
    z.object({
      kind: z.literal("[host]:start-game"),
    }),
    z.object({
      kind: z.literal("[game]:ended"),
      scores: z.number().nonnegative().int(),
      pairs: z.number().nonnegative().int(),
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

export type StreamMatchMessage = z.infer<typeof streamMatchMessage>;
