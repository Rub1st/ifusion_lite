# == Schema Information
#
# Table name: organizations
#
#  id                :bigint           not null, primary key
#  name              :string           default(""), not null
#  unp               :string           default(""), not null
#  address           :string           default(""), not null
#  phone             :string           default(""), not null
#  email             :string           default(""), not null
#  provider          :boolean          default(FALSE), not null
#  buyer             :boolean          default(FALSE), not null
#  ownership_form_id :bigint           not null
#  user_id           :bigint           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
require 'test_helper'

class OrganizationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
