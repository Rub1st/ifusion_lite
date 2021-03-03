# == Schema Information
#
# Table name: contracts
#
#  id                  :bigint           not null, primary key
#  series_and_number   :string           default(""), not null
#  valid_from          :date
#  valid_for           :date
#  note                :text
#  currency_id         :bigint           not null
#  type_of_exchange_id :bigint           not null
#  type_of_payment_id  :bigint           not null
#  type_of_contract_id :bigint           not null
#  provider_id         :bigint
#  customer_id         :bigint
#  user_id             :bigint           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class ContractSerializer < ActiveModel::Serializer
  attributes :id,
             :series_and_number,
             :valid_for,
             :valid_from,
             :note,
             :created_at

  belongs_to :user
  belongs_to :currency
  belongs_to :type_of_contract
  belongs_to :type_of_payment
  belongs_to :type_of_exchange
  belongs_to :provider
  belongs_to :customer
end
