class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :unit, :description, :attachment, :stocked, :farm_id
  belongs_to :farm

  def attachment
    object.attachment_url
  end
end
