import {
  BALANCE_PRODUCT_INDEX
} from "../constants";
import { toast } from "react-toastify";

let initialState = {
  balance_products: []
};

const BalanceProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case BALANCE_PRODUCT_INDEX: {
      return { ...state, balance_products: action.value };
    }
    default: {
      return state;
    }
  }
};

export default BalanceProductReducer;
