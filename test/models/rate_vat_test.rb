# == Schema Information
#
# Table name: rate_vats
#
#  id         :bigint           not null, primary key
#  rate       :integer          default(0), not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class RateVatTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
