import {
  OPERATION_INDEX
} from "../constants";

export const operationIndex = (operations) => ({
  type: OPERATION_INDEX,
  value: operations,
});
