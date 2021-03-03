import {
  TYPE_OF_EXCHANGES_INDEX
} from "../constants/type_of_exchanges";

export const typeOfExchangesIndex = (types) => ({
  type: TYPE_OF_EXCHANGES_INDEX,
  value: types,
});
