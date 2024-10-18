import { z } from "zod";
import { game as cardDash } from "./card-dash";

export const thirdPartyExperience = z.enum([
  cardDash.id,
  // add more games here
]);
export type ThirdPartyExperienceEnum = z.infer<typeof thirdPartyExperience>;
