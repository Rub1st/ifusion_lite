# == Schema Information
#
# Table name: warehouses
#
#  id              :bigint           not null, primary key
#  address         :string           default(""), not null
#  organization_id :bigint           not null
#  user_id         :bigint           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'test_helper'

class WarehouseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
