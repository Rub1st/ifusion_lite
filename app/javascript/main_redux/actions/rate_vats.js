import {
  RATE_VAT_INDEX
} from "../constants";

export const vatIndex = (vats) => ({
  type: RATE_VAT_INDEX,
  value: vats,
});
