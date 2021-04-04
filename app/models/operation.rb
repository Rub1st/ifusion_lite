# == Schema Information
#
# Table name: operations
#
#  id         :bigint           not null, primary key
#  name       :string           default(""), not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Operation < ApplicationRecord
  belongs_to :user
  has_many :act_of_discrepancies, dependent: :destroy
  has_many :invoices, dependent: :destroy

  validates :name, presence: { message: 'не может быть пустым' }
  validates :name, uniqueness: { message: 'должно быть уникальным' }
end
