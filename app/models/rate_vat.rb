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

  validates :rate, presence: { message: 'не может быть пустым' }
  validates :rate, numericality: { message: 'должно быть числом' }
  validates :rate, uniqueness: { message: 'должно быть уникальным' }
end
