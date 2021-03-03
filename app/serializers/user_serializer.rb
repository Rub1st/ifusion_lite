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
class UserSerializer < ActiveModel::Serializer
  attributes :id,
             :email,
             :user_role,
             :name,
             :created_at
end
