import {
  CONTRACT_INDEX
} from "../constants/contracts";

export const contractIndex = (contracts) => ({
  type: CONTRACT_INDEX,
  value: contracts,
});
