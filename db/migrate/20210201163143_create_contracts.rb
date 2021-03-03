class CreateContracts < ActiveRecord::Migration[6.0]
  def change
    create_table :contracts do |t|
      t.string :series_and_number, null: false, default: ''
      t.date :valid_from, null: true
      t.date :valid_for, null: true
      t.text :note, null: true
      t.references :currency, null: false, foreign_key: true
      t.references :type_of_exchange, null: false, foreign_key: true
      t.references :type_of_payment, null: false, foreign_key: true
      t.references :type_of_contract, null: false, foreign_key: true
      t.references :provider, foreign_key: {to_table: 'organizations'}
      t.references :customer, foreign_key: {to_table: 'organizations'}
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
