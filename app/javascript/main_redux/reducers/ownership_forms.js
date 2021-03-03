import {
  OWNERSHIP_FORM_INDEX
} from "../constants";
import { toast } from "react-toastify";

let initialState = {
  ownership_forms: []
};

const OwnershipFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case OWNERSHIP_FORM_INDEX: {
      return { ...state, ownership_forms: action.value };
    }
    default: {
      return state;
    }
  }
};

export default OwnershipFormReducer;
