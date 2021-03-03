import {
  ARRIVAL_PRODUCT_INDEX
} from "../constants";
import { toast } from "react-toastify";

let initialState = {
  arival_products: []
};

const ArrivalProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARRIVAL_PRODUCT_INDEX: {
      return { ...state, arival_products: action.value };
    }
    default: {
      return state;
    }
  }
};

export default ArrivalProductReducer;
