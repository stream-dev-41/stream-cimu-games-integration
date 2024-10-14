import { z } from "zod";
import { game as matchGame } from "./stream-match";

export const thirdPartyExperience = z.enum([
  matchGame.id,
  // add more games here
]);
export type ThirdPartyExperienceEnum = z.infer<typeof thirdPartyExperience>;
