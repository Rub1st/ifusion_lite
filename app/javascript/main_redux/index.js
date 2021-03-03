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
});

export default Reducer;
