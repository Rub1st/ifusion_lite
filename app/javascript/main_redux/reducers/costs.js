import {
  COST_INDEX
} from "../constants";
import { toast } from "react-toastify";

let initialState = {
  costs: []
};

const CostReducer = (state = initialState, action) => {
  switch (action.type) {
    case COST_INDEX: {
      return { ...state, costs: action.value };
    }
    default: {
      return state;
    }
  }
};

export default CostReducer;
