class CreateBalanceProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :balance_products do |t|
      t.references :invoice_product, null: false, foreign_key: true
      t.integer :balance, null: false
      t.datetime :date_and_time, null: false
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
