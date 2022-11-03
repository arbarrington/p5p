class FarmSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :message, :website, :banner, :user_id
  has_many :products
end
