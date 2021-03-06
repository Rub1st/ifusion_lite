class ExpenseProduct < ApplicationRecord
  belongs_to :balance_product
  belongs_to :cash_register
end
