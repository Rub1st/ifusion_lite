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
class InvoiceSerializer < ActiveModel::Serializer
  attributes :id,
             :series_and_number,
             :date_and_time,
             :strings_count,
             :total_count,
             :summa_vat,
             :summa_with_vat,
             :summa,
             :note,
             :created_at

  belongs_to :user
  belongs_to :operation
  belongs_to :currency
  belongs_to :contract
  belongs_to :agreement
  belongs_to :provider_warehouse
  belongs_to :customer_warehouse
end
