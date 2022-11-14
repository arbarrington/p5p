class OrderSerializer < ActiveModel::Serializer
  attributes :id, :cart, :price, :delivery_address, :first_name, :last_name, :comment
  has_one :user
end
