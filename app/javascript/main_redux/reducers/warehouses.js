import {
  WAREHOUSE_INDEX
} from "../constants";
import { toast } from "react-toastify";

let initialState = {
  warehouses: []
};

const WarehouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case WAREHOUSE_INDEX: {
      return { ...state, warehouses: action.value };
    }
    default: {
      return state;
    }
  }
};

export default WarehouseReducer;
