import {
  OWNERSHIP_FORM_INDEX
} from "../constants/ownership_forms";

export const ownershipFormIndex = (forms) => ({
  type: OWNERSHIP_FORM_INDEX,
  value: forms,
});
