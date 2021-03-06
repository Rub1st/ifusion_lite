class BalanceProductSerializer < ActiveModel::Serializer
  attributes :id,
             :date_and_time,
             :balance

  belongs_to :invoice_product
  belongs_to :user
end
