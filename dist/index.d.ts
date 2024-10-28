import { z } from 'zod';

declare const thirdPartyExperience: z.ZodEnum<["CIMU_CARD_DASH", "CIMU_SURGE_RUN"]>;
type ThirdPartyExperienceEnum = z.infer<typeof thirdPartyExperience>;

declare const gameParams$2: z.ZodObject<{
    level: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    level: number;
}, {
    level: number;
}>;
type CardDashGameParams = z.infer<typeof gameParams$2>;
declare const message$2: z.ZodIntersection<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
    kind: z.ZodLiteral<"[game]:initialized">;
}, "strip", z.ZodTypeAny, {
    kind: "[game]:initialized";
}, {
    kind: "[game]:initialized";
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
    kind: z.ZodLiteral<"[game]:is-ready">;
}, "strip", z.ZodTypeAny, {
    kind: "[game]:is-ready";
}, {
    kind: "[game]:is-ready";
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
type CardDashMessage = z.infer<typeof message$2>;
declare const game$2: {
    readonly id: "CIMU_CARD_DASH";
    readonly url: "https://stream.342games.com";
    readonly name: "Card Dash";
    readonly shortDescription: "Match the pairs as fast as you can";
    readonly message: z.ZodIntersection<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"[game]:initialized">;
    }, "strip", z.ZodTypeAny, {
        kind: "[game]:initialized";
    }, {
        kind: "[game]:initialized";
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
        kind: z.ZodLiteral<"[game]:is-ready">;
    }, "strip", z.ZodTypeAny, {
        kind: "[game]:is-ready";
    }, {
        kind: "[game]:is-ready";
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

type cardDash_CardDashGameParams = CardDashGameParams;
type cardDash_CardDashMessage = CardDashMessage;
declare namespace cardDash {
  export { type cardDash_CardDashGameParams as CardDashGameParams, type cardDash_CardDashMessage as CardDashMessage, game$2 as game, gameParams$2 as gameParams, message$2 as message };
}

declare const gameParams$1: z.ZodObject<{
    level: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    level: number;
}, {
    level: number;
}>;
type MathcraftGameParams = z.infer<typeof gameParams$1>;
declare const message$1: z.ZodIntersection<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
    kind: z.ZodLiteral<"[game]:initialized">;
}, "strip", z.ZodTypeAny, {
    kind: "[game]:initialized";
}, {
    kind: "[game]:initialized";
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
    kind: z.ZodLiteral<"[game]:is-ready">;
}, "strip", z.ZodTypeAny, {
    kind: "[game]:is-ready";
}, {
    kind: "[game]:is-ready";
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
    correctAnswers: z.ZodNumber;
    mistakes: z.ZodNumber;
    elapsedTimeInSeconds: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    kind: "[game]:ended";
    scores: number;
    mistakes: number;
    elapsedTimeInSeconds: number;
    correctAnswers: number;
}, {
    kind: "[game]:ended";
    scores: number;
    mistakes: number;
    elapsedTimeInSeconds: number;
    correctAnswers: number;
}>]>, z.ZodObject<{
    version: z.ZodLiteral<1>;
}, "strip", z.ZodTypeAny, {
    version: 1;
}, {
    version: 1;
}>>;
type MathcraftMessage = z.infer<typeof message$1>;
declare const game$1: {
    readonly id: "CIMU_MATHCRAFT";
    readonly url: "https://stream-math.342games.com/";
    readonly name: "Mathcraft";
    readonly shortDescription: "TBU";
    readonly message: z.ZodIntersection<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"[game]:initialized">;
    }, "strip", z.ZodTypeAny, {
        kind: "[game]:initialized";
    }, {
        kind: "[game]:initialized";
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
        kind: z.ZodLiteral<"[game]:is-ready">;
    }, "strip", z.ZodTypeAny, {
        kind: "[game]:is-ready";
    }, {
        kind: "[game]:is-ready";
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
        correctAnswers: z.ZodNumber;
        mistakes: z.ZodNumber;
        elapsedTimeInSeconds: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "[game]:ended";
        scores: number;
        mistakes: number;
        elapsedTimeInSeconds: number;
        correctAnswers: number;
    }, {
        kind: "[game]:ended";
        scores: number;
        mistakes: number;
        elapsedTimeInSeconds: number;
        correctAnswers: number;
    }>]>, z.ZodObject<{
        version: z.ZodLiteral<1>;
    }, "strip", z.ZodTypeAny, {
        version: 1;
    }, {
        version: 1;
    }>>;
    readonly descriptionInHtml: "Users will select the right arithmetic blocks to eliminate in order to match the final answer. They will need to eliminate 1-3 blocks depending on the difficulty level. They need to correctly answer 2 rounds to earn rewards.";
    readonly launchInstructionInHtml: "Select the duration of the StreamDrop and it’s difficulty level.";
    readonly scoringRulesInHtml: "Fans are scored based on speed and equations solved correctly. They get 250 base gems for passing and 500 bonus gems for making into Top 100.";
};

type mathcraft_MathcraftGameParams = MathcraftGameParams;
type mathcraft_MathcraftMessage = MathcraftMessage;
declare namespace mathcraft {
  export { type mathcraft_MathcraftGameParams as MathcraftGameParams, type mathcraft_MathcraftMessage as MathcraftMessage, game$1 as game, gameParams$1 as gameParams, message$1 as message };
}

declare const gameParams: z.ZodObject<{
    bestScores: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    bestScores: number;
}, {
    bestScores: number;
}>;
type SurgeRunGameParams = z.infer<typeof gameParams>;
declare const message: z.ZodIntersection<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
    kind: z.ZodLiteral<"[game]:initialized">;
}, "strip", z.ZodTypeAny, {
    kind: "[game]:initialized";
}, {
    kind: "[game]:initialized";
}>, z.ZodObject<{
    kind: z.ZodLiteral<"[host]:initial-params">;
    userId: z.ZodString;
    sessionId: z.ZodString;
    gameParams: z.ZodObject<{
        bestScores: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        bestScores: number;
    }, {
        bestScores: number;
    }>;
}, "strip", z.ZodTypeAny, {
    kind: "[host]:initial-params";
    userId: string;
    sessionId: string;
    gameParams: {
        bestScores: number;
    };
}, {
    kind: "[host]:initial-params";
    userId: string;
    sessionId: string;
    gameParams: {
        bestScores: number;
    };
}>, z.ZodObject<{
    kind: z.ZodLiteral<"[game]:is-ready">;
}, "strip", z.ZodTypeAny, {
    kind: "[game]:is-ready";
}, {
    kind: "[game]:is-ready";
}>, z.ZodObject<{
    kind: z.ZodLiteral<"[host]:start-game">;
}, "strip", z.ZodTypeAny, {
    kind: "[host]:start-game";
}, {
    kind: "[host]:start-game";
}>, z.ZodObject<{
    kind: z.ZodLiteral<"[game]:ended">;
    scores: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    kind: "[game]:ended";
    scores: number;
}, {
    kind: "[game]:ended";
    scores: number;
}>]>, z.ZodObject<{
    version: z.ZodLiteral<1>;
}, "strip", z.ZodTypeAny, {
    version: 1;
}, {
    version: 1;
}>>;
type SurgeRunMessage = z.infer<typeof message>;
declare const game: {
    readonly id: "CIMU_SURGE_RUN";
    readonly url: "https://stream-run.342games.com";
    readonly name: "Surge Run";
    readonly shortDescription: "TBU";
    readonly message: z.ZodIntersection<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"[game]:initialized">;
    }, "strip", z.ZodTypeAny, {
        kind: "[game]:initialized";
    }, {
        kind: "[game]:initialized";
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"[host]:initial-params">;
        userId: z.ZodString;
        sessionId: z.ZodString;
        gameParams: z.ZodObject<{
            bestScores: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            bestScores: number;
        }, {
            bestScores: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        kind: "[host]:initial-params";
        userId: string;
        sessionId: string;
        gameParams: {
            bestScores: number;
        };
    }, {
        kind: "[host]:initial-params";
        userId: string;
        sessionId: string;
        gameParams: {
            bestScores: number;
        };
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"[game]:is-ready">;
    }, "strip", z.ZodTypeAny, {
        kind: "[game]:is-ready";
    }, {
        kind: "[game]:is-ready";
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"[host]:start-game">;
    }, "strip", z.ZodTypeAny, {
        kind: "[host]:start-game";
    }, {
        kind: "[host]:start-game";
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"[game]:ended">;
        scores: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "[game]:ended";
        scores: number;
    }, {
        kind: "[game]:ended";
        scores: number;
    }>]>, z.ZodObject<{
        version: z.ZodLiteral<1>;
    }, "strip", z.ZodTypeAny, {
        version: 1;
    }, {
        version: 1;
    }>>;
    readonly descriptionInHtml: "TBU";
    readonly launchInstructionInHtml: "TBU";
    readonly scoringRulesInHtml: "TBU";
};

type surgeRun_SurgeRunGameParams = SurgeRunGameParams;
type surgeRun_SurgeRunMessage = SurgeRunMessage;
declare const surgeRun_game: typeof game;
declare const surgeRun_gameParams: typeof gameParams;
declare const surgeRun_message: typeof message;
declare namespace surgeRun {
  export { type surgeRun_SurgeRunGameParams as SurgeRunGameParams, type surgeRun_SurgeRunMessage as SurgeRunMessage, surgeRun_game as game, surgeRun_gameParams as gameParams, surgeRun_message as message };
}

export { type CardDashGameParams, type CardDashMessage, type MathcraftGameParams, type MathcraftMessage, type SurgeRunGameParams, type SurgeRunMessage, type ThirdPartyExperienceEnum, cardDash, mathcraft as mathCraft, surgeRun, thirdPartyExperience };
