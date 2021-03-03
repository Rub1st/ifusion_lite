# == Schema Information
#
# Table name: costs
#
#  id                 :bigint           not null, primary key
#  invoice_product_id :bigint           not null
#  wholesale_percent  :float            default(0.0), not null
#  wholesale_value    :float            default(0.0), not null
#  commercial_percent :float            default(0.0), not null
#  commercial_value   :float            default(0.0), not null
#  vat_percent        :float            default(0.0), not null
#  vat_value          :float            default(0.0), not null
#  retail_price       :float            default(0.0), not null
#  cost               :float            default(0.0), not null
#  user_id            :bigint           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class Cost < ApplicationRecord
  belongs_to :user
  belongs_to :invoice_product
end
