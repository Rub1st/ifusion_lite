import {
  CURRENCIES_INDEX
} from "../constants";
import { toast } from "react-toastify";

let initialState = {
  currencies: []
};

const CurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENCIES_INDEX: {
      return { ...state, currencies: action.value };
    }
    default: {
      return state;
    }
  }
};

export default CurrencyReducer;
