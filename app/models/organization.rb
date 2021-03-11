# == Schema Information
#
# Table name: organizations
#
#  id                :bigint           not null, primary key
#  name              :string           default(""), not null
#  unp               :string           default(""), not null
#  address           :string           default(""), not null
#  phone             :string           default(""), not null
#  email             :string           default(""), not null
#  provider          :boolean          default(FALSE), not null
#  buyer             :boolean          default(FALSE), not null
#  ownership_form_id :bigint           not null
#  user_id           :bigint           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Organization < ApplicationRecord
  belongs_to :user
  belongs_to :ownership_form
  has_many :warehouses, dependent: :destroy

  validates :name, presence: { message: 'не может быть пустым' }
  validates :ownership_form_id, presence: { message: 'не может быть пустым' }
  validates :address, presence: { message: 'не может быть пустым' }

  validates :unp, format: { with: /\A\d{9}\z/, message: 'должно состоять из 9 цифр' }
  validates :unp, uniqueness: { message: 'должно быть уникальным' }

  validates :email, format: { with: /@/, allow_blank: true, message: 'неверный формат' }

  validates :phone, format: { with: /\A(\+375|80)\s?(44|25|33|17|29)\s?\d{3}-?\s?\d{2}-?\s?\d{2}\z/,
                              allow_blank: true,
                              message: 'неверный формат' }
end
