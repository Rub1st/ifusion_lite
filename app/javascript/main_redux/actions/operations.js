import {
  OPERATION_INDEX
} from "../constants/operations";

export const operationIndex = (operations) => ({
  type: OPERATION_INDEX,
  value: operations,
});
