import {
  ACT_PRODUCT_INDEX
} from "../constants";
import { toast } from "react-toastify";

let initialState = {
  act_products: []
};

const ActProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACT_PRODUCT_INDEX: {
      return { ...state, act_products: action.value };
    }
    default: {
      return state;
    }
  }
};

export default ActProductsReducer;
