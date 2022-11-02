class CreateFarms < ActiveRecord::Migration[7.0]
  def change
    create_table :farms do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.string :location
      t.string :message
      t.string :website
      t.string :banner

      t.timestamps
    end
  end
end
