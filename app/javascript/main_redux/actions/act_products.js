import {
  ACT_PRODUCT_INDEX
} from "../constants";

export const actProductIndex = (products) => ({
  type: ACT_PRODUCT_INDEX,
  value: products,
});
