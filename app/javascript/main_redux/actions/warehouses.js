import {
  WAREHOUSE_INDEX
} from "../constants";

export const warehouseIndex = (warehouses) => ({
  type: WAREHOUSE_INDEX,
  value: warehouses,
});