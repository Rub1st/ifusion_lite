import {
  CONTRACT_INDEX
} from "../constants/contracts";
import { toast } from "react-toastify";

let initialState = {
  contracts: []
};

const ContractReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTRACT_INDEX: {
      return { ...state, contracts: action.value };
    }
    default: {
      return state;
    }
  }
};

export default ContractReducer;
