import { combineReducers } from "redux";
import {
  OrganizationReducer,
  UserReducer,
  OwnershipFormReducer,
  ErrorReducer,
  WarehouseReducer,
  CurrencyReducer,
  TypeOfContractReducer,
  TypeOfExchangeReducer,
  TypeOfPaymentReducer,
  ContractReducer,
  InvoiceReducer,
  AgreementReducer,
  OperationReducer,
  ArrivalProductReducer,
  CostReducer,
  ProductGroupReducer,
  ProductSubgroupReducer,
  UnitReducer,
  RateVatReducer,
  ActReducer,
  ActProductsReducer
} from "./reducers";

const Reducer = combineReducers({
  organizations: OrganizationReducer,
  users: UserReducer,
  ownership_forms: OwnershipFormReducer,
  errors: ErrorReducer,
  warehouses: WarehouseReducer,
  currencies: CurrencyReducer,
  type_of_contracts: TypeOfContractReducer,
  type_of_exchanges: TypeOfExchangeReducer,
  type_of_payments: TypeOfPaymentReducer,
  contracts: ContractReducer,
  invoices: InvoiceReducer,
  operations: OperationReducer,
  agreements: AgreementReducer,
  arrival_products: ArrivalProductReducer,
  costs: CostReducer,
  product_groups: ProductGroupReducer,
  product_subgroups: ProductSubgroupReducer,
  units: UnitReducer,
  rate_vats: RateVatReducer,
  acts: ActReducer,
  act_products: ActProductsReducer
});

export default Reducer;
