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
class OwnershipForm < ApplicationRecord
  belongs_to :user
  has_many :organizations, dependent: :destroy

  validates :name, presence: { message: 'не может быть пустым' }
  validates :name, uniqueness: { message: 'должно быть уникальным' }
end
