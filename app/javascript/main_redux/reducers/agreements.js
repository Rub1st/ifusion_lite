import {
  AGREEMENT_INDEX
} from "../constants";
import { toast } from "react-toastify";

let initialState = {
  agreements: []
};

const AgreementReducer = (state = initialState, action) => {
  switch (action.type) {
    case AGREEMENT_INDEX: {
      return { ...state, agreements: action.value };
    }
    default: {
      return state;
    }
  }
};

export default AgreementReducer;
