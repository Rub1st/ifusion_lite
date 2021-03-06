# == Schema Information
#
# Table name: act_of_discrepancies_products
#
#  id                    :bigint           not null, primary key
#  code                  :string           default(""), not null
#  invoice_product_id    :bigint           not null
#  act_of_discrepancy_id :bigint           not null
#  user_id               :bigint           not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#
class ActOfDiscrepanciesProduct < ApplicationRecord
  belongs_to :invoice_product
  belongs_to :act_of_discrepancy
  belongs_to :user

  validates :code, presence: { message: 'не может быть пустым' }
  validates :invoice_product_id, presence: { message: 'не может быть пустым' }
  validates :act_of_discrepancy_id, presence: { message: 'не может быть пустым' }
  validates :code, format: { with: /\A\d{4}\z/, message: 'должно состоять из 4 цифр' }
  validates :code, uniqueness: { message: 'должно быть уникальным' }
  validates :count, presence: { message: 'не может быть пустым' }
  validates :count, numericality: { message: 'должно быть числом' }
end
