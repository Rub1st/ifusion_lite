class BalanceProduct < ApplicationRecord
  belongs_to :user
  belongs_to :invoice_product

  has_many :expense_products, dependent: :destroy
end
