class CreateCashRegisters < ActiveRecord::Migration[6.0]
  def change
    create_table :cash_registers do |t|
      t.string :name, null: false, default: ''
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
