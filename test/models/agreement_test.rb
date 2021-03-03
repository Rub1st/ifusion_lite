# == Schema Information
#
# Table name: agreements
#
#  id         :bigint           not null, primary key
#  name       :string           default(""), not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class AgreementTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
