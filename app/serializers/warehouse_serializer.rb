# == Schema Information
#
# Table name: warehouses
#
#  id              :bigint           not null, primary key
#  address         :string           default(""), not null
#  organization_id :bigint           not null
#  user_id         :bigint           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class WarehouseSerializer < ActiveModel::Serializer
  attributes :id,
             :address,
             :created_at

  belongs_to :user
  belongs_to :organization
end
