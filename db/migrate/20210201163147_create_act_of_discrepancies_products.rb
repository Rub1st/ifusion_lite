class CreateActOfDiscrepanciesProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :act_of_discrepancies_products do |t|
      t.string :code, null: false, default: ''
      t.references :invoice_product, null: false, foreign_key: true
      t.references :act_of_discrepancy, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
