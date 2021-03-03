# == Schema Information
#
# Table name: act_of_discrepancies
#
#  id                    :bigint           not null, primary key
#  series_and_number     :string           default(""), not null
#  date_and_time         :datetime
#  strings_count         :integer          default(0), not null
#  total_count           :integer          default(0), not null
#  summa_vat             :float            default(0.0), not null
#  summa_with_vat        :float            default(0.0), not null
#  summa                 :float            default(0.0), not null
#  note                  :string
#  operation_id          :bigint           not null
#  currency_id           :bigint           not null
#  invoice_id            :bigint           not null
#  provider_warehouse_id :bigint
#  customer_warehouse_id :bigint
#  user_id               :bigint           not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#
class ActOfDiscrepancy < ApplicationRecord
  belongs_to :operation
  belongs_to :currency
  belongs_to :invoice
  belongs_to :user
  belongs_to :provider_warehouse, class_name: 'Warehouse'
  belongs_to :customer_warehouse, class_name: 'Warehouse'
  has_many :act_of_discrepancies_products, dependent: :destroy
end
