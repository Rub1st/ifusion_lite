import {
  INVOICE_INDEX
} from "../constants";

export const invoiceIndex = (invoices) => ({
  type: INVOICE_INDEX,
  value: invoices,
});
