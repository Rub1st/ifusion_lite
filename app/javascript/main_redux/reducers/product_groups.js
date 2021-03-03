import {
  PRODUCT_GROUP_INDEX
} from "../constants";
import { toast } from "react-toastify";

let initialState = {
  product_groups: []
};

const ProductGroupReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_GROUP_INDEX: {
      return { ...state, product_groups: action.value };
    }
    default: {
      return state;
    }
  }
};

export default ProductGroupReducer;
