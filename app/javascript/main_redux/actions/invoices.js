import {
  INVOICE_INDEX
} from "../constants/invoices";

export const invoiceIndex = (invoices) => ({
  type: INVOICE_INDEX,
  value: invoices,
});
