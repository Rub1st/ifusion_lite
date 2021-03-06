import {
  CASH_REGISTER_INDEX
} from "../constants";

export const cashRegisterIndex = (products) => ({
  type: CASH_REGISTER_INDEX,
  value: products,
});
