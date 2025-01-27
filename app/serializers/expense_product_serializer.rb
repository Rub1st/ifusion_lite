class ExpenseProductSerializer < ActiveModel::Serializer
  attributes :id,
             :date_and_time,
             :count,
             :cost,
             :created_at

  belongs_to :balance_product
  belongs_to :cash_register
  belongs_to :user
end
