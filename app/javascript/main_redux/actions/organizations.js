import {
  ORGANIZATION_INDEX
} from "../constants/organizations";

export const organizationIndex = (organizations) => ({
  type: ORGANIZATION_INDEX,
  value: organizations,
});
