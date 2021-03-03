import {
  PRODUCT_GROUP_INDEX
} from "../constants";

export const productGroupIndex = (groups) => ({
  type: PRODUCT_GROUP_INDEX,
  value: groups,
});
