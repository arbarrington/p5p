class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :display_name, :icon, :producer
  has_many :farms

  def icon
    object.icon_url
  end
end
