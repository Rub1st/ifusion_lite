# == Schema Information
#
# Table name: currencies
#
#  id         :bigint           not null, primary key
#  short_name :string           default(""), not null
#  full_name  :string           default(""), not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Currency < ApplicationRecord
  belongs_to :user
  has_many :act_of_discrepancies
  has_many :contracts, dependent: :destroy
  has_many :invoices, dependent: :destroy
end
