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
class Warehouse < ApplicationRecord
  belongs_to :user
  belongs_to :organization

  validates :address, presence: { message: 'не может быть пустым' }
  validates :address, uniqueness: { message: 'должно быть уникальным' }
  validates :organization_id, presence: { message: 'не может быть пустым' }
end
