import { z } from 'zod';

declare const thirdPartyExperience: z.ZodEnum<["CIMU_CARD_DASH", "CIMU_MATH_CRAFT", "CIMU_MATRIX_RUN", "CIMU_SURGE_RUN", "CIMU_TUMBLE_FALL", "CIMU_COLOR_RECALL"]>;
type ThirdPartyExperienceEnum = z.infer<typeof thirdPartyExperience>;
declare const createGameMessage: <GameParams extends z.ZodType, GameResults extends Record<string, z.ZodType>>(gameParams: GameParams, gameResults: GameResults) => z.ZodIntersection<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
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
    gameParams: GameParams;
}, "strip", z.ZodTypeAny, { [k in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    kind: z.ZodLiteral<"[host]:initial-params">;
    userId: z.ZodString;
    sessionId: z.ZodString;
    gameDurationInSeconds: z.ZodNumber;
    gameParams: GameParams;
}>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    kind: z.ZodLiteral<"[host]:initial-params">;
    userId: z.ZodString;
    sessionId: z.ZodString;
    gameDurationInSeconds: z.ZodNumber;
    gameParams: GameParams;
}>, any>[k]; }, { [k_1 in keyof z.baseObjectInputType<{
    kind: z.ZodLiteral<"[host]:initial-params">;
    userId: z.ZodString;
    sessionId: z.ZodString;
    gameDurationInSeconds: z.ZodNumber;
    gameParams: GameParams;
}>]: z.baseObjectInputType<{
    kind: z.ZodLiteral<"[host]:initial-params">;
    userId: z.ZodString;
    sessionId: z.ZodString;
    gameDurationInSeconds: z.ZodNumber;
    gameParams: GameParams;
}>[k_1]; }>, z.ZodObject<{
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
    elapsedTimeInSeconds: z.ZodNumber;
} & GameResults, "strip", z.ZodTypeAny, { [k_2 in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    kind: z.ZodLiteral<"[game]:ended">;
    scores: z.ZodNumber;
    elapsedTimeInSeconds: z.ZodNumber;
} & GameResults>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    kind: z.ZodLiteral<"[game]:ended">;
    scores: z.ZodNumber;
    elapsedTimeInSeconds: z.ZodNumber;
} & GameResults>, any>[k_2]; }, { [k_1_1 in keyof z.baseObjectInputType<{
    kind: z.ZodLiteral<"[game]:ended">;
    scores: z.ZodNumber;
    elapsedTimeInSeconds: z.ZodNumber;
} & GameResults>]: z.baseObjectInputType<{
    kind: z.ZodLiteral<"[game]:ended">;
    scores: z.ZodNumber;
    elapsedTimeInSeconds: z.ZodNumber;
} & GameResults>[k_1_1]; }>]>, z.ZodObject<{
    version: z.ZodLiteral<1>;
}, "strip", z.ZodTypeAny, {
    version: 1;
}, {
    version: 1;
}>>;
declare const withKeyEvent: <T extends z.ZodType>(gameMessageWithoutKeyEvent: T) => z.ZodUnion<[z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
    kind: z.ZodLiteral<"[host]:key">;
}, "strip", z.ZodTypeAny, {
    kind: "[host]:key";
}, {
    kind: "[host]:key";
}>]>, T]>;
type GameConfig<T extends z.ZodType> = {
    id: string;
    url: string;
    name: string;
    shortDescription: string;
    message: T;
    descriptionInHtml: string;
    launchInstructionInHtml: string;
    scoringRulesInHtml: string;
};

declare const gameParams$5: z.ZodObject<{
    level: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    level: number;
}, {
    level: number;
}>;
type CardDashGameParams = z.infer<typeof gameParams$5>;
declare const message$5: z.ZodIntersection<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
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
    elapsedTimeInSeconds: z.ZodNumber;
} & {
    pairs: z.ZodNumber;
    mistakes: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    pairs: number;
    mistakes: number;
    kind: "[game]:ended";
    scores: number;
    elapsedTimeInSeconds: number;
}, {
    pairs: number;
    mistakes: number;
    kind: "[game]:ended";
    scores: number;
    elapsedTimeInSeconds: number;
}>]>, z.ZodObject<{
    version: z.ZodLiteral<1>;
}, "strip", z.ZodTypeAny, {
    version: 1;
}, {
    version: 1;
}>>;
type CardDashMessage = z.infer<typeof message$5>;
declare const game$5: {
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
        elapsedTimeInSeconds: z.ZodNumber;
    } & {
        pairs: z.ZodNumber;
        mistakes: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        pairs: number;
        mistakes: number;
        kind: "[game]:ended";
        scores: number;
        elapsedTimeInSeconds: number;
    }, {
        pairs: number;
        mistakes: number;
        kind: "[game]:ended";
        scores: number;
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
  export { type cardDash_CardDashGameParams as CardDashGameParams, type cardDash_CardDashMessage as CardDashMessage, game$5 as game, gameParams$5 as gameParams, message$5 as message };
}

declare const gameParams$4: z.ZodObject<{
    level: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    level: number;
}, {
    level: number;
}>;
type MathCraftGameParams = z.infer<typeof gameParams$4>;
declare const message$4: z.ZodIntersection<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
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
    elapsedTimeInSeconds: z.ZodNumber;
} & {
    mistakes: z.ZodNumber;
    correctAnswers: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    mistakes: number;
    kind: "[game]:ended";
    scores: number;
    elapsedTimeInSeconds: number;
    correctAnswers: number;
}, {
    mistakes: number;
    kind: "[game]:ended";
    scores: number;
    elapsedTimeInSeconds: number;
    correctAnswers: number;
}>]>, z.ZodObject<{
    version: z.ZodLiteral<1>;
}, "strip", z.ZodTypeAny, {
    version: 1;
}, {
    version: 1;
}>>;
type MathCraftMessage = z.infer<typeof message$4>;
declare const game$4: {
    readonly id: "CIMU_MATH_CRAFT";
    readonly url: "https://stream-math.342games.com";
    readonly name: "MathCraft";
    readonly shortDescription: "Remove the right blocks to reach the answer";
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
        elapsedTimeInSeconds: z.ZodNumber;
    } & {
        mistakes: z.ZodNumber;
        correctAnswers: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        mistakes: number;
        kind: "[game]:ended";
        scores: number;
        elapsedTimeInSeconds: number;
        correctAnswers: number;
    }, {
        mistakes: number;
        kind: "[game]:ended";
        scores: number;
        elapsedTimeInSeconds: number;
        correctAnswers: number;
    }>]>, z.ZodObject<{
        version: z.ZodLiteral<1>;
    }, "strip", z.ZodTypeAny, {
        version: 1;
    }, {
        version: 1;
    }>>;
    readonly descriptionInHtml: "Users will select the right arithmetic blocks to eliminate in order to match the final answer. They will need to eliminate 1-2 blocks depending on the difficulty level. They need to correctly answer 2 rounds to earn rewards.";
    readonly launchInstructionInHtml: "Select the duration of the StreamDrop and it’s difficulty level.";
    readonly scoringRulesInHtml: "Fans are scored based on speed and equations solved correctly. They get 250 base gems for passing and 500 bonus gems for making into Top 100.";
};

type mathcraft_MathCraftGameParams = MathCraftGameParams;
type mathcraft_MathCraftMessage = MathCraftMessage;
declare namespace mathcraft {
  export { type mathcraft_MathCraftGameParams as MathCraftGameParams, type mathcraft_MathCraftMessage as MathCraftMessage, game$4 as game, gameParams$4 as gameParams, message$4 as message };
}

declare const gameParams$3: z.ZodObject<{
    bestScores: z.ZodNumber;
    device: z.ZodEnum<["mobile", "desktop"]>;
}, "strip", z.ZodTypeAny, {
    bestScores: number;
    device: "mobile" | "desktop";
}, {
    bestScores: number;
    device: "mobile" | "desktop";
}>;
type SurgeRunGameParams = z.infer<typeof gameParams$3>;
declare const message$3: z.ZodIntersection<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
    kind: z.ZodLiteral<"[game]:initialized">;
}, "strip", z.ZodTypeAny, {
    kind: "[game]:initialized";
}, {
    kind: "[game]:initialized";
}>, z.ZodObject<{
    kind: z.ZodLiteral<"[host]:key">;
}, "strip", z.ZodTypeAny, {
    kind: "[host]:key";
}, {
    kind: "[host]:key";
}>, z.ZodObject<{
    kind: z.ZodLiteral<"[host]:initial-params">;
    userId: z.ZodString;
    sessionId: z.ZodString;
    gameParams: z.ZodObject<{
        bestScores: z.ZodNumber;
        device: z.ZodEnum<["mobile", "desktop"]>;
    }, "strip", z.ZodTypeAny, {
        bestScores: number;
        device: "mobile" | "desktop";
    }, {
        bestScores: number;
        device: "mobile" | "desktop";
    }>;
}, "strip", z.ZodTypeAny, {
    kind: "[host]:initial-params";
    userId: string;
    sessionId: string;
    gameParams: {
        bestScores: number;
        device: "mobile" | "desktop";
    };
}, {
    kind: "[host]:initial-params";
    userId: string;
    sessionId: string;
    gameParams: {
        bestScores: number;
        device: "mobile" | "desktop";
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
type SurgeRunMessage = z.infer<typeof message$3>;
declare const game$3: {
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
        kind: z.ZodLiteral<"[host]:key">;
    }, "strip", z.ZodTypeAny, {
        kind: "[host]:key";
    }, {
        kind: "[host]:key";
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"[host]:initial-params">;
        userId: z.ZodString;
        sessionId: z.ZodString;
        gameParams: z.ZodObject<{
            bestScores: z.ZodNumber;
            device: z.ZodEnum<["mobile", "desktop"]>;
        }, "strip", z.ZodTypeAny, {
            bestScores: number;
            device: "mobile" | "desktop";
        }, {
            bestScores: number;
            device: "mobile" | "desktop";
        }>;
    }, "strip", z.ZodTypeAny, {
        kind: "[host]:initial-params";
        userId: string;
        sessionId: string;
        gameParams: {
            bestScores: number;
            device: "mobile" | "desktop";
        };
    }, {
        kind: "[host]:initial-params";
        userId: string;
        sessionId: string;
        gameParams: {
            bestScores: number;
            device: "mobile" | "desktop";
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
declare namespace surgeRun {
  export { type surgeRun_SurgeRunGameParams as SurgeRunGameParams, type surgeRun_SurgeRunMessage as SurgeRunMessage, game$3 as game, gameParams$3 as gameParams, message$3 as message };
}

declare const gameParams$2: z.ZodObject<{
    level: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    level: number;
}, {
    level: number;
}>;
type MatrixRunGameParams = z.infer<typeof gameParams$2>;
declare const message$2: z.ZodUnion<[z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
    kind: z.ZodLiteral<"[host]:key">;
}, "strip", z.ZodTypeAny, {
    kind: "[host]:key";
}, {
    kind: "[host]:key";
}>]>, z.ZodIntersection<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
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
    elapsedTimeInSeconds: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    kind: "[game]:ended";
    scores: number;
    elapsedTimeInSeconds: number;
}, {
    kind: "[game]:ended";
    scores: number;
    elapsedTimeInSeconds: number;
}>]>, z.ZodObject<{
    version: z.ZodLiteral<1>;
}, "strip", z.ZodTypeAny, {
    version: 1;
}, {
    version: 1;
}>>]>;
type MatrixRunMessage = z.infer<typeof message$2>;
declare const game$2: {
    readonly id: "CIMU_MATRIX_RUN";
    readonly url: "https://stream-run30.342games.com";
    readonly name: "Matrix Run";
    readonly shortDescription: "Run and jump as far as your can";
    readonly message: z.ZodUnion<[z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"[host]:key">;
    }, "strip", z.ZodTypeAny, {
        kind: "[host]:key";
    }, {
        kind: "[host]:key";
    }>]>, z.ZodIntersection<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
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
        elapsedTimeInSeconds: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "[game]:ended";
        scores: number;
        elapsedTimeInSeconds: number;
    }, {
        kind: "[game]:ended";
        scores: number;
        elapsedTimeInSeconds: number;
    }>]>, z.ZodObject<{
        version: z.ZodLiteral<1>;
    }, "strip", z.ZodTypeAny, {
        version: 1;
    }, {
        version: 1;
    }>>]>;
    readonly descriptionInHtml: "Avoid the obstacles and escape as far as possible in the matrix. The speed increases with distance travelled. ";
    readonly launchInstructionInHtml: "Normal mode: No flying obstacles<br/>Hard mode: Flying obstacles introduced";
    readonly scoringRulesInHtml: "Fans are scored based on the final distance achieved";
};

type matrixRun_MatrixRunGameParams = MatrixRunGameParams;
type matrixRun_MatrixRunMessage = MatrixRunMessage;
declare namespace matrixRun {
  export { type matrixRun_MatrixRunGameParams as MatrixRunGameParams, type matrixRun_MatrixRunMessage as MatrixRunMessage, game$2 as game, gameParams$2 as gameParams, message$2 as message };
}

declare const gameParams$1: z.ZodObject<{
    level: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    level: number;
}, {
    level: number;
}>;
type TumbleFallGameParams = z.infer<typeof gameParams$1>;
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
    elapsedTimeInSeconds: z.ZodNumber;
} & {
    falls: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    kind: "[game]:ended";
    scores: number;
    elapsedTimeInSeconds: number;
    falls: number;
}, {
    kind: "[game]:ended";
    scores: number;
    elapsedTimeInSeconds: number;
    falls: number;
}>]>, z.ZodObject<{
    version: z.ZodLiteral<1>;
}, "strip", z.ZodTypeAny, {
    version: 1;
}, {
    version: 1;
}>>;
type TumbleFallMessage = z.infer<typeof message$1>;
declare const game$1: {
    readonly id: "CIMU_TUMBLE_FALL";
    readonly url: "https://stream-four.342games.com";
    readonly name: "Tumble Fall";
    readonly shortDescription: "Jump your way down to score points";
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
        elapsedTimeInSeconds: z.ZodNumber;
    } & {
        falls: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "[game]:ended";
        scores: number;
        elapsedTimeInSeconds: number;
        falls: number;
    }, {
        kind: "[game]:ended";
        scores: number;
        elapsedTimeInSeconds: number;
        falls: number;
    }>]>, z.ZodObject<{
        version: z.ZodLiteral<1>;
    }, "strip", z.ZodTypeAny, {
        version: 1;
    }, {
        version: 1;
    }>>;
    readonly descriptionInHtml: "Users will tumble their way different sized platforms to get the highest score possible. Size of platforms depends on difficulty level selected by creators.";
    readonly launchInstructionInHtml: "Normal mode: Larger sized platforms\nHard mode: Smaller sized platforms";
    readonly scoringRulesInHtml: "Fans are scored based on the number of successful jumps. Landing in the middle consecutively builds a streak. They get 250 base gems for passing and 500 bonus gems for making into Top 100.";
};

type tumbleFall_TumbleFallGameParams = TumbleFallGameParams;
type tumbleFall_TumbleFallMessage = TumbleFallMessage;
declare namespace tumbleFall {
  export { type tumbleFall_TumbleFallGameParams as TumbleFallGameParams, type tumbleFall_TumbleFallMessage as TumbleFallMessage, game$1 as game, gameParams$1 as gameParams, message$1 as message };
}

declare const gameParams: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
type ColorRecallGameParams = z.infer<typeof gameParams>;
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
    gameDurationInSeconds: z.ZodNumber;
    gameParams: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
}, "strip", z.ZodTypeAny, {
    kind: "[host]:initial-params";
    userId: string;
    sessionId: string;
    gameDurationInSeconds: number;
    gameParams: {};
}, {
    kind: "[host]:initial-params";
    userId: string;
    sessionId: string;
    gameDurationInSeconds: number;
    gameParams: {};
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
    elapsedTimeInSeconds: z.ZodNumber;
} & {
    rounds: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    kind: "[game]:ended";
    scores: number;
    elapsedTimeInSeconds: number;
    rounds: number;
}, {
    kind: "[game]:ended";
    scores: number;
    elapsedTimeInSeconds: number;
    rounds: number;
}>]>, z.ZodObject<{
    version: z.ZodLiteral<1>;
}, "strip", z.ZodTypeAny, {
    version: 1;
}, {
    version: 1;
}>>;
type ColorRecallMessage = z.infer<typeof message>;
declare const game: {
    readonly id: "CIMU_COLOR_RECALL";
    readonly url: "https://stream-five.342games.com";
    readonly name: "Color Recall";
    readonly shortDescription: "Recall the positions of the colored dots ";
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
        gameParams: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    }, "strip", z.ZodTypeAny, {
        kind: "[host]:initial-params";
        userId: string;
        sessionId: string;
        gameDurationInSeconds: number;
        gameParams: {};
    }, {
        kind: "[host]:initial-params";
        userId: string;
        sessionId: string;
        gameDurationInSeconds: number;
        gameParams: {};
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
        elapsedTimeInSeconds: z.ZodNumber;
    } & {
        rounds: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "[game]:ended";
        scores: number;
        elapsedTimeInSeconds: number;
        rounds: number;
    }, {
        kind: "[game]:ended";
        scores: number;
        elapsedTimeInSeconds: number;
        rounds: number;
    }>]>, z.ZodObject<{
        version: z.ZodLiteral<1>;
    }, "strip", z.ZodTypeAny, {
        version: 1;
    }, {
        version: 1;
    }>>;
    readonly descriptionInHtml: "Users will have 3 rounds where they will be shown 4 different pair of color dots. The goal is to try and recall the positions of these dots as accurately as possible for the highest score.";
    readonly launchInstructionInHtml: "Select the duration of the StreamDrop";
    readonly scoringRulesInHtml: "Fans are scored based on the proximity of their guesses to the actual answer. They get 250 base games for passing and 500 bonus gems for making into Top 100.";
};

type colorRecall_ColorRecallGameParams = ColorRecallGameParams;
type colorRecall_ColorRecallMessage = ColorRecallMessage;
declare const colorRecall_game: typeof game;
declare const colorRecall_gameParams: typeof gameParams;
declare const colorRecall_message: typeof message;
declare namespace colorRecall {
  export { type colorRecall_ColorRecallGameParams as ColorRecallGameParams, type colorRecall_ColorRecallMessage as ColorRecallMessage, colorRecall_game as game, colorRecall_gameParams as gameParams, colorRecall_message as message };
}

export { type CardDashGameParams, type CardDashMessage, type ColorRecallGameParams, type ColorRecallMessage, type GameConfig, type MathCraftGameParams, type MathCraftMessage, type MatrixRunGameParams, type MatrixRunMessage, type SurgeRunGameParams, type SurgeRunMessage, type ThirdPartyExperienceEnum, type TumbleFallGameParams, type TumbleFallMessage, cardDash, colorRecall, createGameMessage, mathcraft as mathCraft, matrixRun, surgeRun, thirdPartyExperience, tumbleFall, withKeyEvent };
