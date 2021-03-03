# == Schema Information
#
# Table name: invoice_products
#
#  id                  :bigint           not null, primary key
#  full_name           :string           default(""), not null
#  short_name          :string           default(""), not null
#  code                :string           default(""), not null
#  price               :float            default(0.0), not null
#  summa_vat           :float            default(0.0), not null
#  cost                :float            default(0.0), not null
#  rate_vat_id         :bigint           not null
#  unit_id             :bigint           not null
#  product_subgroup_id :bigint           not null
#  invoice_id          :bigint           not null
#  user_id             :bigint           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
require 'test_helper'

class InvoiceProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
