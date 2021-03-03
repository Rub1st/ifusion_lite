import {
  ORGANIZATION_INDEX
} from "../constants";

export const organizationIndex = (organizations) => ({
  type: ORGANIZATION_INDEX,
  value: organizations,
});
