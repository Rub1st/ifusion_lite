# == Schema Information
#
# Table name: status_of_booting_in_equipments
#
#  id         :bigint           not null, primary key
#  name       :string           default(""), not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class StatusOfBootingInEquipmentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
