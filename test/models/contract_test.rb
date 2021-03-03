# == Schema Information
#
# Table name: contracts
#
#  id                  :bigint           not null, primary key
#  series_and_number   :string           default(""), not null
#  valid_from          :date
#  valid_for           :date
#  note                :text
#  currency_id         :bigint           not null
#  type_of_exchange_id :bigint           not null
#  type_of_payment_id  :bigint           not null
#  type_of_contract_id :bigint           not null
#  provider_id         :bigint
#  customer_id         :bigint
#  user_id             :bigint           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
require 'test_helper'

class ContractTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
