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
class OrganizationSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :unp,
             :address,
             :phone,
             :email,
             :provider,
             :buyer,
             :created_at

  belongs_to :ownership_form
  belongs_to :user
end
