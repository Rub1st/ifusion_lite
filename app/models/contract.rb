# == Schema Information
#
# Table name: contracts
#
#  id                  :bigint           not null, primary key
#  series_and_number   :string           default(""), not null
#  valid_from          :date
#  valid_for           :date
#  note                :text
#  currency_id         :bigint           not null
#  type_of_exchange_id :bigint           not null
#  type_of_payment_id  :bigint           not null
#  type_of_contract_id :bigint           not null
#  provider_id         :bigint
#  customer_id         :bigint
#  user_id             :bigint           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class Contract < ApplicationRecord
  default_scope { order(created_at: :desc) }

  belongs_to :currency
  belongs_to :type_of_exchange
  belongs_to :type_of_payment
  belongs_to :user
  belongs_to :type_of_contract
  belongs_to :provider, class_name: 'Organization'
  belongs_to :customer, class_name: 'Organization'
  has_many :invoices, dependent: :destroy

  validates :series_and_number, presence: { message: 'не может быть пустым' }
  validates :currency_id, presence: { message: 'не может быть пустым' }
  validates :type_of_exchange_id, presence: { message: 'не может быть пустым' }
  validates :type_of_payment_id, presence: { message: 'не может быть пустым' }
  validates :type_of_contract_id, presence: { message: 'не может быть пустым' }
  validates :provider_id, presence: { message: 'не может быть пустым' }
  validates :customer_id, presence: { message: 'не может быть пустым' }
  validates :series_and_number, format: { with: /\A\d{12}\z/, message: 'должен состоять из 12 цифр' }
  validates :series_and_number, uniqueness: { message: 'должен быть уникальным' }
end