import { z } from "zod";
import { game as cardDash } from "./card-dash";
import { game as mathCraft } from "./mathcraft";
import { game as matrixRun } from "./matrix-run";

export const thirdPartyExperience = z.enum([
  cardDash.id,
  mathCraft.id,
  matrixRun.id,
  // add more games here
]);
export type ThirdPartyExperienceEnum = z.infer<typeof thirdPartyExperience>;
