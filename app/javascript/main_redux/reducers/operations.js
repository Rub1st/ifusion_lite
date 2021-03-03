import {
  OPERATION_INDEX
} from "../constants/operations";
import { toast } from "react-toastify";

let initialState = {
  operations: []
};

const OperationReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPERATION_INDEX: {
      return { ...state, operations: action.value };
    }
    default: {
      return state;
    }
  }
};

export default OperationReducer;
