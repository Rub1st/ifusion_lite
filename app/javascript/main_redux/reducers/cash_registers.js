import {
  CASH_REGISTER_INDEX
} from "../constants";
import { toast } from "react-toastify";

let initialState = {
  cash_registers: []
};

const CashRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CASH_REGISTER_INDEX: {
      return { ...state, cash_registers: action.value };
    }
    default: {
      return state;
    }
  }
};

export default CashRegisterReducer;
