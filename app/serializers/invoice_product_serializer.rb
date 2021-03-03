# == Schema Information
#
# Table name: invoice_products
#
#  id                  :bigint           not null, primary key
#  full_name           :string           default(""), not null
#  short_name          :string           default(""), not null
#  code                :string           default(""), not null
#  price               :float            default(0.0), not null
#  summa_vat           :float            default(0.0), not null
#  cost                :float            default(0.0), not null
#  rate_vat_id         :bigint           not null
#  unit_id             :bigint           not null
#  product_subgroup_id :bigint           not null
#  invoice_id          :bigint           not null
#  user_id             :bigint           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class InvoiceProductSerializer < ActiveModel::Serializer
  attributes :id,
             :full_name,
             :short_name,
             :code,
             :price,
             :summa_vat,
             :cost,
             :created_at

  belongs_to :user
  belongs_to :rate_vat
  belongs_to :unit
  belongs_to :product_subgroup
  belongs_to :invoice
end
