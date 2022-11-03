class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.belongs_to :farm, null: false, foreign_key: true
      t.string :name
      t.float :price
      t.string :unit
      t.string :description
      t.string :attachment
      t.boolean :stocked

      t.timestamps
    end
  end
end
