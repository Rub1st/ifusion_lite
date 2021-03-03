class CreateCurrencies < ActiveRecord::Migration[6.0]
  def change
    create_table :currencies do |t|
      t.string :short_name, null: false, default: ''
      t.string :full_name, null: false, default: ''
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
