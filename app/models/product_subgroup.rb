# == Schema Information
#
# Table name: product_subgroups
#
#  id               :bigint           not null, primary key
#  name             :string           default(""), not null
#  product_group_id :bigint           not null
#  user_id          :bigint           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class ProductSubgroup < ApplicationRecord
  belongs_to :user
  belongs_to :product_group
  has_many :invoice_products, dependent: :destroy

  validates :name, presence: { message: 'не может быть пустым' }
  validates :name, uniqueness: { message: 'должно быть уникальным' }
  validates :product_group_id, presence: { message: 'не может быть пустым' }
end
