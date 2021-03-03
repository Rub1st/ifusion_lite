import {
  COST_INDEX
} from "../constants";

export const costIndex = (costs) => ({
  type: COST_INDEX,
  value: costs,
});
