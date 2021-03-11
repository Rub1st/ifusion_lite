class ExpenseProduct < ApplicationRecord
  belongs_to :user
  belongs_to :balance_product
  belongs_to :cash_register

  validates :count, presence: { message: 'не может быть пустым' }
  validates :cash_register_id, presence: { message: 'не может быть пустым' }
  validates :balance_product_id, presence: { message: 'не может быть пустым' }
  validates :date_and_time, presence: { message: 'не может быть пустым' }
  validates :count, numericality: { message: 'должно быть числом' }
end
