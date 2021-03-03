import {
  CURRENCIES_INDEX
} from "../constants/currencies";

export const currenciesIndex = (currencies) => ({
  type: CURRENCIES_INDEX,
  value: currencies,
});
