import {
  TYPE_OF_PAYMENTS_INDEX
} from "../constants/type_of_payments";

export const typeOfPaymentsIndex = (types) => ({
  type: TYPE_OF_PAYMENTS_INDEX,
  value: types,
});
