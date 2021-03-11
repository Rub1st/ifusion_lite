class CreateExpenseProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :expense_products do |t|
      t.references :balance_product, null: false, foreign_key: true
      t.references :cash_register, null: false, foreign_key: true
      t.integer :count, null: false
      t.float :cost, null: false, default: 0
      t.string :date_and_time, null: false
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
