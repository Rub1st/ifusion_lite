# == Schema Information
#
# Table name: product_groups
#
#  id         :bigint           not null, primary key
#  name       :string           default(""), not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class ProductGroupTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
