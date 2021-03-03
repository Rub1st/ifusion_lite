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
require 'test_helper'

class ActOfDiscrepanciesProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
