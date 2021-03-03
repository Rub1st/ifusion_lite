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
end
