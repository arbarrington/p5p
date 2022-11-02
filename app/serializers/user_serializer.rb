class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :display_name, :icon, :producer, :bio
  has_many :farms

  def icon
    object.icon_url
  end
end
