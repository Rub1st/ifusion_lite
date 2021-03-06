import {
  EXPENSE_PRODUCT_INDEX
} from "../constants";

export const expenseProductIndex = (products) => ({
  type: EXPENSE_PRODUCT_INDEX,
  value: products,
});
