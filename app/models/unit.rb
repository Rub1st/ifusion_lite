# == Schema Information
#
# Table name: units
#
#  id         :bigint           not null, primary key
#  short_name :string           default(""), not null
#  full_name  :string           default(""), not null
#  gramms     :float            default(0.0), not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Unit < ApplicationRecord
  belongs_to :user
  has_many :invoice_products, dependent: :destroy
end