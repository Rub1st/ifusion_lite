import {
  BALANCE_PRODUCT_INDEX
} from "../constants";

export const balanceProductIndex = (products) => ({
  type: BALANCE_PRODUCT_INDEX,
  value: products,
});
