import { z } from 'zod';

declare const thirdPartyExperience: z.ZodEnum<["CIMU_CARD_DASH"]>;
type ThirdPartyExperienceEnum = z.infer<typeof thirdPartyExperience>;

declare const gameParams: z.ZodObject<{
    level: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    level: number;
}, {
    level: number;
}>;
type GameParams = z.infer<typeof gameParams>;
declare const message: z.ZodIntersection<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
    kind: z.ZodLiteral<"[game]:is-ready">;
}, "strip", z.ZodTypeAny, {
    kind: "[game]:is-ready";
}, {
    kind: "[game]:is-ready";
}>, z.ZodObject<{
    kind: z.ZodLiteral<"[host]:initial-params">;
    userId: z.ZodString;
    sessionId: z.ZodString;
    gameDurationInSeconds: z.ZodNumber;
    gameParams: z.ZodObject<{
        level: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        level: number;
    }, {
        level: number;
    }>;
}, "strip", z.ZodTypeAny, {
    kind: "[host]:initial-params";
    userId: string;
    sessionId: string;
    gameDurationInSeconds: number;
    gameParams: {
        level: number;
    };
}, {
    kind: "[host]:initial-params";
    userId: string;
    sessionId: string;
    gameDurationInSeconds: number;
    gameParams: {
        level: number;
    };
}>, z.ZodObject<{
    kind: z.ZodLiteral<"[host]:start-game">;
    timeLeftInSeconds: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    kind: "[host]:start-game";
    timeLeftInSeconds: number;
}, {
    kind: "[host]:start-game";
    timeLeftInSeconds: number;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"[game]:ended">;
    scores: z.ZodNumber;
    pairs: z.ZodNumber;
    mistakes: z.ZodNumber;
    elapsedTimeInSeconds: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    kind: "[game]:ended";
    scores: number;
    pairs: number;
    mistakes: number;
    elapsedTimeInSeconds: number;
}, {
    kind: "[game]:ended";
    scores: number;
    pairs: number;
    mistakes: number;
    elapsedTimeInSeconds: number;
}>]>, z.ZodObject<{
    version: z.ZodLiteral<1>;
}, "strip", z.ZodTypeAny, {
    version: 1;
}, {
    version: 1;
}>>;
type Message = z.infer<typeof message>;
declare const game: {
    readonly id: "CIMU_CARD_DASH";
    readonly url: "https://stream.342games.com";
    readonly name: "Card Dash";
    readonly shortDescription: "Match the pairs as fast as you can";
    readonly message: z.ZodIntersection<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"[game]:is-ready">;
    }, "strip", z.ZodTypeAny, {
        kind: "[game]:is-ready";
    }, {
        kind: "[game]:is-ready";
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"[host]:initial-params">;
        userId: z.ZodString;
        sessionId: z.ZodString;
        gameDurationInSeconds: z.ZodNumber;
        gameParams: z.ZodObject<{
            level: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            level: number;
        }, {
            level: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        kind: "[host]:initial-params";
        userId: string;
        sessionId: string;
        gameDurationInSeconds: number;
        gameParams: {
            level: number;
        };
    }, {
        kind: "[host]:initial-params";
        userId: string;
        sessionId: string;
        gameDurationInSeconds: number;
        gameParams: {
            level: number;
        };
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"[host]:start-game">;
        timeLeftInSeconds: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "[host]:start-game";
        timeLeftInSeconds: number;
    }, {
        kind: "[host]:start-game";
        timeLeftInSeconds: number;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"[game]:ended">;
        scores: z.ZodNumber;
        pairs: z.ZodNumber;
        mistakes: z.ZodNumber;
        elapsedTimeInSeconds: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "[game]:ended";
        scores: number;
        pairs: number;
        mistakes: number;
        elapsedTimeInSeconds: number;
    }, {
        kind: "[game]:ended";
        scores: number;
        pairs: number;
        mistakes: number;
        elapsedTimeInSeconds: number;
    }>]>, z.ZodObject<{
        version: z.ZodLiteral<1>;
    }, "strip", z.ZodTypeAny, {
        version: 1;
    }, {
        version: 1;
    }>>;
    readonly descriptionInHtml: "A 3x4 board of cards will be displayed face down. Fans will have to memorize and try their best to match the hidden pairs on the board as fast as possible before the time runs out.";
    readonly launchInstructionInHtml: "Normal mode: Each pair is accompanied with a distinct background color to aid with visual memory<br/>Hard mode: Each pair has the same background color, making it more challenging for fans";
    readonly scoringRulesInHtml: "Fans are scored based on speed and accuracy. They get 250 Base Points for passing and 500 Bonus for making into Top 100.";
};

export { type GameParams, type Message, type ThirdPartyExperienceEnum, game, gameParams, message, thirdPartyExperience };
