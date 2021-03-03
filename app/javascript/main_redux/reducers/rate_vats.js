import {
  RATE_VAT_INDEX
} from "../constants";
import { toast } from "react-toastify";

let initialState = {
  rate_vats: []
};

const RateVatReducer = (state = initialState, action) => {
  switch (action.type) {
    case RATE_VAT_INDEX: {
      return { ...state, rate_vats: action.value };
    }
    default: {
      return state;
    }
  }
};

export default RateVatReducer;
