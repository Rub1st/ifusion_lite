# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  user_role              :integer          default("common"), not null
#  name                   :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
class User < ApplicationRecord
  has_many :act_of_discrepancies_products, dependent: :destroy
  has_many :act_of_discrepancies, dependent: :destroy
  has_many :agreements, dependent: :destroy
  has_many :contracts, dependent: :destroy
  has_many :costs, dependent: :destroy
  has_many :currencies, dependent: :destroy
  has_many :invoice_products, dependent: :destroy
  has_many :invoices, dependent: :destroy
  has_many :operations, dependent: :destroy
  has_many :organizations, dependent: :destroy
  has_many :ownership_forms, dependent: :destroy
  has_many :product_subgroups, dependent: :destroy
  has_many :product_groups, dependent: :destroy
  has_many :rate_vats, dependent: :destroy
  has_many :status_of_acceptances, dependent: :destroy
  has_many :status_of_booting_in_equipments, dependent: :destroy
  has_many :status_of_price_tag_printings, dependent: :destroy
  has_many :type_of_contracts, dependent: :destroy
  has_many :type_of_exchanges, dependent: :destroy
  has_many :type_of_payments, dependent: :destroy
  has_many :units, dependent: :destroy
  has_many :warehouses, dependent: :destroy

  enum user_role: %i[common admin]

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
