import {
  WAREHOUSE_INDEX
} from "../constants/warehouses";

export const warehouseIndex = (warehouses) => ({
  type: WAREHOUSE_INDEX,
  value: warehouses,
});