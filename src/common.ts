import { z } from "zod";
import { game as cardDash } from "./card-dash";
import { game as mathCraft } from "./mathcraft";
// no import of surge run because it's not used in stream drop launch

export const thirdPartyExperience = z.enum([
  cardDash.id,
  mathCraft.id,
  // add more games here
]);
export type ThirdPartyExperienceEnum = z.infer<typeof thirdPartyExperience>;
