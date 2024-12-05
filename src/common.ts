import { z } from "zod";
import { game as cardDash } from "./card-dash";
import { game as mathCraft } from "./mathcraft";
import { game as matrixRun } from "./matrix-run";
import { game as surgeRun } from "./surge-run";
import { game as tumbleFall } from "./tumble-fall";
import { game as colorRecall } from "./color-recall";

export const thirdPartyExperience = z.enum([
  cardDash.id,
  mathCraft.id,
  matrixRun.id,
  surgeRun.id,
  tumbleFall.id,
  colorRecall.id,
  // add more games here
]);
export type ThirdPartyExperienceEnum = z.infer<typeof thirdPartyExperience>;
