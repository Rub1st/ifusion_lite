import {
  TYPE_OF_EXCHANGES_INDEX
} from "../constants";

export const typeOfExchangesIndex = (types) => ({
  type: TYPE_OF_EXCHANGES_INDEX,
  value: types,
});
