import {
  RATE_VAT_INDEX
} from "../constants";

export const rateVatIndex = (vats) => ({
  type: RATE_VAT_INDEX,
  value: vats,
});
