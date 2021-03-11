import {
  ACT_INDEX
} from "../constants";
import { toast } from "react-toastify";

let initialState = {
  acts: []
};

const ActReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACT_INDEX: {
      return { ...state, acts: action.value };
    }
    default: {
      return state;
    }
  }
}

export default ActReducer;
