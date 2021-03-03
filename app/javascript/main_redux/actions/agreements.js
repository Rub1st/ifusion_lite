import {
  AGREEMENT_INDEX
} from "../constants/agreements";

export const agreementIndex = (agreements) => ({
  type: AGREEMENT_INDEX,
  value: agreements,
});
