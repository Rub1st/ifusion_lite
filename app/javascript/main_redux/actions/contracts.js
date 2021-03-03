import {
  CONTRACT_INDEX
} from "../constants";

export const contractIndex = (contracts) => ({
  type: CONTRACT_INDEX,
  value: contracts,
});
