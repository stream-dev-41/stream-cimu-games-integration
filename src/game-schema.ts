import { z } from "zod";

export const createGameMessage = <
  GameParams extends z.ZodType,
  GameResults extends z.ZodType,
>(
  gameParams: GameParams,
  gameResults: GameResults,
) =>
  z
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
        scores: z.number().nonnegative().int(),
        elapsedTimeInSeconds: z
          .number()
          .nonnegative()
          .int()
          .describe(
            "Number of seconds elapsed since player stared the game until end or player finished it, should be 0 <= elapsed <= timeLeft",
          ),
        gameResults,
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

export type GameConfig<T extends z.ZodType> = {
  id: string;
  url: string;
  name: string;
  shortDescription: string;
  message: T;
  descriptionInHtml: string;
  launchInstructionInHtml: string;
  scoringRulesInHtml: string;
};
