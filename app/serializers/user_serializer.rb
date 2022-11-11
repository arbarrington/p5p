class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :display_name, :icon, :producer, :bio
  has_many :orders
  has_many :farms
  has_many :products, through: :farms

  def icon
    object.icon_url
  end
end
