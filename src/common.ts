import { z } from "zod";
import { game as cardDash } from "./card-dash";
import { game as mathCraft } from "./mathcraft";
import { game as streamRun } from "./stream-run";

export const thirdPartyExperience = z.enum([
  cardDash.id,
  mathCraft.id,
  streamRun.id,
  // add more games here
]);
export type ThirdPartyExperienceEnum = z.infer<typeof thirdPartyExperience>;
