class CashRegister < ApplicationRecord
  belongs_to :user

  has_many :expense_products, dependent: :destroy
end
