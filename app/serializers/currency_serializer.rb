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
class CurrencySerializer < ActiveModel::Serializer
  attributes :id,
             :full_name,
             :short_name,
             :created_at

  belongs_to :user
end
