class BalanceProductSerializer < ActiveModel::Serializer
  attributes :id,
             :date_and_time,
             :balance,
             :created_at

  belongs_to :invoice_product
  belongs_to :user
end
