import {
  INVOICE_INDEX
} from "../constants";
import { toast } from "react-toastify";

let initialState = {
  invoices: []
};

const InvoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case INVOICE_INDEX: {
      return { ...state, invoices: action.value };
    }
    default: {
      return state;
    }
  }
};

export default InvoiceReducer;
