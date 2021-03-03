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
class RateVatSerializer < ActiveModel::Serializer
  attributes :id,
             :rate,
             :created_at

  belongs_to :user
end
