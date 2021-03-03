import {
  ACT_INDEX
} from "../constants";

export const actIndex = (products) => ({
  type: ACT_INDEX,
  value: products,
});
