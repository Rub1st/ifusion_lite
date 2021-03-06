# == Schema Information
#
# Table name: invoice_products
#
#  id                  :bigint           not null, primary key
#  full_name           :string           default(""), not null
#  short_name          :string           default(""), not null
#  code                :string           default(""), not null
#  price               :float            default(0.0), not null
#  summa_vat           :float            default(0.0), not null
#  cost                :float            default(0.0), not null
#  rate_vat_id         :bigint           not null
#  unit_id             :bigint           not null
#  product_subgroup_id :bigint           not null
#  invoice_id          :bigint           not null
#  user_id             :bigint           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class InvoiceProduct < ApplicationRecord
  belongs_to :rate_vat
  belongs_to :unit
  belongs_to :product_subgroup
  belongs_to :invoice
  belongs_to :user
  has_many :act_of_discrepancies_products, dependent: :destroy
  has_many :costs, dependent: :destroy
  has_many :balance_products, dependent: :destroy

  validates :code, presence: { message: 'не может быть пустым' }
  validates :name, presence: { message: 'не может быть пустым' }
  validates :price, presence: { message: 'не может быть пустым' }
  validates :count, presence: { message: 'не может быть пустым' }
  validates :rate_vat_id, presence: { message: 'не может быть пустым' }
  validates :unit_id, presence: { message: 'не может быть пустым' }
  validates :product_subgroup_id, presence: { message: 'не может быть пустым' }
  validates :invoice_id, presence: { message: 'не может быть пустым' }
  validates :code, format: { with: /\A\d{4}\z/, message: 'должно состоять из 12 цифр' }
  validates :code, uniqueness: { message: 'должно быть уникальным' }
  validates :price, numericality: { message: 'должно быть числом' }
  validates :count, numericality: { message: 'должно быть числом' }
end
