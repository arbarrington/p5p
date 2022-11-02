class FarmSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :message, :website, :banner
  has_one :user
end
