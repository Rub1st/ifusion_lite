class CashRegister < ApplicationRecord
  belongs_to :user

  has_many :expense_products, dependent: :destroy

  validates :name, presence: { message: 'не может быть пустым' }
  validates :name, uniqueness: { message: 'должно быть уникальным' }
end
