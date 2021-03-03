class CreateRateVats < ActiveRecord::Migration[6.0]
  def change
    create_table :rate_vats do |t|
      t.integer :rate, null: false, default: 0
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
