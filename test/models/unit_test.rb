# == Schema Information
#
# Table name: units
#
#  id         :bigint           not null, primary key
#  short_name :string           default(""), not null
#  full_name  :string           default(""), not null
#  gramms     :float            default(0.0), not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class UnitTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
