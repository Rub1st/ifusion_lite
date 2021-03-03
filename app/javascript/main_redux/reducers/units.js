import {
  UNIT_INDEX
} from "../constants";
import { toast } from "react-toastify";

let initialState = {
  units: []
};

const UnitReducer = (state = initialState, action) => {
  switch (action.type) {
    case UNIT_INDEX: {
      return { ...state, units: action.value };
    }
    default: {
      return state;
    }
  }
};

export default UnitReducer;
