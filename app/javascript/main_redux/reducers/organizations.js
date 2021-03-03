import {
  ORGANIZATION_INDEX
} from "../constants/organizations";
import { toast } from "react-toastify";

let initialState = {
  organizations: []
};

const OrganizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORGANIZATION_INDEX: {
      return { ...state, organizations: action.value };
    }
    default: {
      return state;
    }
  }
};

export default OrganizationReducer;
