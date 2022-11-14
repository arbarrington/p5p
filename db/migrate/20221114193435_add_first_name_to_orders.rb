class AddFirstNameToOrders < ActiveRecord::Migration[7.0]
  def change
    add_column :orders, :add_last_name_to_orders, :string
    add_column :orders, :add_email_to_orders, :string
    add_column :orders, :add_phone_to_orders, :string
    add_column :orders, :phone, :integer
    add_column :orders, :add_comment_to_orders, :string
    add_column :orders, :first_name, :string
    add_column :orders, :last_name, :string
    add_column :orders, :email, :string
    add_column :orders, :comment, :string
  end
end
