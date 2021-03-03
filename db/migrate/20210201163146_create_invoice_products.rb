class CreateInvoiceProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :invoice_products do |t|
      t.string :full_name, null: false, default: ''
      t.string :short_name, null: false, default: ''
      t.string :code, null: false, default: ''
      t.float :price, null: false, default: 0
      t.float :summa_vat, null: false, default: 0
      t.float :cost, null: false, default: 0
      t.references :rate_vat, null: false, foreign_key: true
      t.references :unit, null: false, foreign_key: true
      t.references :product_subgroup, null: false, foreign_key: true
      t.references :invoice, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
