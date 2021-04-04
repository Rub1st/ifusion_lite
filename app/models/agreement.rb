# == Schema Information
#
# Table name: agreements
#
#  id         :bigint           not null, primary key
#  name       :string           default(""), not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Agreement < ApplicationRecord
  belongs_to :user
  has_many :invoices, dependent: :destroy

  validates :name, uniqueness: { message: 'должно быть уникальным' }
  validates :name, presence: { message: 'не может быть пустым' }
end
