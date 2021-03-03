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
class RateVat < ApplicationRecord
  belongs_to :user
  has_many :invoice_products, dependent: :destroy
end
