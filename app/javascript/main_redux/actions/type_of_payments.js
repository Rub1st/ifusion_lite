import {
  TYPE_OF_PAYMENTS_INDEX
} from "../constants";

export const typeOfPaymentsIndex = (types) => ({
  type: TYPE_OF_PAYMENTS_INDEX,
  value: types,
});
