class CreateActOfDiscrepancies < ActiveRecord::Migration[6.0]
  def change
    create_table :act_of_discrepancies do |t|
      t.string :series_and_number, null: false, default: ''
      t.datetime :date_and_time, null: true
      t.integer :strings_count, null: false, default: 0
      t.integer :total_count, null: false, default: 0
      t.float :summa_vat, null: false, default: 0
      t.float :summa_with_vat, null: false, default: 0
      t.float :summa, null: false, default: 0
      t.string :note, null: true
      t.references :operation, null: false, foreign_key: true
      t.references :currency, null: false, foreign_key: true
      t.references :invoice, null: false, foreign_key: true
      t.references :provider_warehouse, foreign_key: {to_table: 'warehouses'}
      t.references :customer_warehouse, foreign_key: {to_table: 'warehouses'}
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
