import {
  PRODUCT_SUBGROUP_INDEX
} from "../constants";

export const productSubgroupIndex = (groups) => ({
  type: PRODUCT_SUBGROUP_INDEX,
  value: groups,
});
