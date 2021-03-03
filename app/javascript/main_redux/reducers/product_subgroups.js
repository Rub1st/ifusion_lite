import {
  PRODUCT_SUBGROUP_INDEX
} from "../constants";
import { toast } from "react-toastify";

let initialState = {
  product_subgroups: []
};

const ProductSubgroupReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_SUBGROUP_INDEX: {
      return { ...state, product_subgroups: action.value };
    }
    default: {
      return state;
    }
  }
};

export default ProductSubgroupReducer;
