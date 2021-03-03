import {
  TYPE_OF_PAYMENTS_INDEX
} from "../constants";
import { toast } from "react-toastify";

let initialState = {
  type_of_payments: []
};

const TypeOfPaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_OF_PAYMENTS_INDEX: {
      return { ...state, type_of_payments: action.value };
    }
    default: {
      return state;
    }
  }
};

export default TypeOfPaymentReducer;
