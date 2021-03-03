class CreateCosts < ActiveRecord::Migration[6.0]
  def change
    create_table :costs do |t|
      t.references :invoice_product, null: false, foreign_key: true
      t.float :wholesale_percent, null: false, default: 0
      t.float :wholesale_value, null: false, default: 0
      t.float :commercial_percent, null: false, default: 0
      t.float :commercial_value, null: false, default: 0
      t.float :vat_percent, null: false, default: 0
      t.float :vat_value, null: false, default: 0
      t.float :retail_price, null: false, default: 0
      t.float :cost, null: false, default: 0
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
