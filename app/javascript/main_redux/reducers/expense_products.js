import {
  EXPENSE_PRODUCT_INDEX
} from "../constants";
import { toast } from "react-toastify";

let initialState = {
  expense_products: []
};

const ExpenseProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXPENSE_PRODUCT_INDEX: {
      return { ...state, expense_products: action.value };
    }
    default: {
      return state;
    }
  }
};

export default ExpenseProductReducer;
