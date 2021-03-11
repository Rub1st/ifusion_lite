# == Schema Information
#
# Table name: invoices
#
#  id                    :bigint           not null, primary key
#  series_and_number     :string           default(""), not null
#  date_and_time         :datetime
#  strings_count         :integer          default(0), not null
#  total_count           :integer          default(0), not null
#  summa                 :float            default(0.0), not null
#  summa_vat             :float            default(0.0), not null
#  summa_with_vat        :float            default(0.0), not null
#  note                  :string
#  operation_id          :bigint           not null
#  currency_id           :bigint           not null
#  contract_id           :bigint           not null
#  agreement_id          :bigint           not null
#  provider_warehouse_id :bigint
#  customer_warehouse_id :bigint
#  user_id               :bigint           not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#
class Invoice < ApplicationRecord
  belongs_to :operation
  belongs_to :currency
  belongs_to :contract
  belongs_to :agreement
  belongs_to :user
  belongs_to :provider_warehouse, class_name: 'Warehouse'
  belongs_to :customer_warehouse, class_name: 'Warehouse'
  has_many :act_of_discrepancies, dependent: :destroy
  has_many :invoice_products, dependent: :destroy

  validates :series_and_number, presence: { message: 'не может быть пустым' }
  validates :currency_id, presence: { message: 'не может быть пустым' }
  validates :operation_id, presence: { message: 'не может быть пустым' }
  validates :contract_id, presence: { message: 'не может быть пустым' }
  validates :agreement_id, presence: { message: 'не может быть пустым' }
  validates :provider_warehouse_id, presence: { message: 'не может быть пустым' }
  validates :customer_warehouse_id, presence: { message: 'не может быть пустым' }
  validates :series_and_number, format: { with: /\A\d{7}\z/, message: 'должно состоять из 7 цифр' }
  validates :series_and_number, uniqueness: { message: 'должно быть уникальным' }
end

123456789086