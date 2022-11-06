class FarmSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :message, :website, :banner, :user_id
  
  # belongs_to :user

  has_many :products

  def banner
    object.banner_url
  end
end
