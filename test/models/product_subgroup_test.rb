# == Schema Information
#
# Table name: product_subgroups
#
#  id               :bigint           not null, primary key
#  name             :string           default(""), not null
#  product_group_id :bigint           not null
#  user_id          :bigint           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
require 'test_helper'

class ProductSubgroupTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
