import {
  ARRIVAL_PRODUCT_INDEX
} from "../constants";

export const arrivalProductIndex = (products) => ({
  type: ARRIVAL_PRODUCT_INDEX,
  value: products,
});
