class CreateProductSubgroups < ActiveRecord::Migration[6.0]
  def change
    create_table :product_subgroups do |t|
      t.string :name, null: false, default: ''
      t.references :product_group, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
