import {
  AGREEMENT_INDEX
} from "../constants";

export const agreementIndex = (agreements) => ({
  type: AGREEMENT_INDEX,
  value: agreements,
});
