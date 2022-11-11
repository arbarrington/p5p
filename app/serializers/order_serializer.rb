class OrderSerializer < ActiveModel::Serializer
  attributes :id, :cart, :price, :delivery_address
  has_one :user
end
