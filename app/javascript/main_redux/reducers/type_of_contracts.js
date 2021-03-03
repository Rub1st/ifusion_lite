import {
  TYPE_OF_CONTRACTS_INDEX
} from "../constants";
import { toast } from "react-toastify";

let initialState = {
  type_of_contracts: []
};

const TypeOfContractReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_OF_CONTRACTS_INDEX: {
      return { ...state, type_of_contracts: action.value };
    }
    default: {
      return state;
    }
  }
};

export default TypeOfContractReducer;
