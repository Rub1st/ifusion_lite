class CreateUnits < ActiveRecord::Migration[6.0]
  def change
    create_table :units do |t|
      t.string :short_name, null: false, default: ''
      t.string :full_name, null: false, default: ''
      t.float :gramms, null: false
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
