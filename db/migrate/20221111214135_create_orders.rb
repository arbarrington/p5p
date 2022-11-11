class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.string :cart
      t.string :price
      t.belongs_to :user, null: false, foreign_key: true
      t.string :delivery_address

      t.timestamps
    end
  end
end
