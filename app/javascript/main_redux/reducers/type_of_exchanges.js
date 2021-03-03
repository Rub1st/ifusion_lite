import {
  TYPE_OF_EXCHANGES_INDEX
} from "../constants/type_of_exchanges";
import { toast } from "react-toastify";

let initialState = {
  type_of_exchanges: []
};

const TypeOfExchangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_OF_EXCHANGES_INDEX: {
      return { ...state, type_of_exchanges: action.value };
    }
    default: {
      return state;
    }
  }
};

export default TypeOfExchangeReducer;
