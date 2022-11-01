class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :display_name, :icon, :producer

  def icon
    object.icon_url
  end
end
