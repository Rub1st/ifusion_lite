import {
  CURRENCIES_INDEX
} from "../constants";

export const currenciesIndex = (currencies) => ({
  type: CURRENCIES_INDEX,
  value: currencies,
});
