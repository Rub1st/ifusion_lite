# == Schema Information
#
# Table name: ownership_forms
#
#  id         :bigint           not null, primary key
#  name       :string           default(""), not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class OwnershipFormSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :created_at

  belongs_to :user
end
