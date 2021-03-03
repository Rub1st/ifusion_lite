class CreateOrganizations < ActiveRecord::Migration[6.0]
  def change
    create_table :organizations do |t|
      t.string :name, null: false, default: ''
      t.string :unp, null: false, default: ''
      t.string :address, null: false, default: ''
      t.string :phone, null: false, default: ''
      t.string :email, null: false, default: ''
      t.boolean :provider, null: false, default: false
      t.boolean :buyer, null: false, default: false
      t.references :ownership_form, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
