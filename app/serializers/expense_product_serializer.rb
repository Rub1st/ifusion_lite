class ExpenseProductSerializer < ActiveModel::Serializer
  attributes :id,
             :date_and_time,
             :count

  belongs_to :balance_product
  belongs_to :cash_register
  belongs_to :user
end
