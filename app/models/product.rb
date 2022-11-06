class Product < ApplicationRecord
  validates_presence_of :name, :price, :unit
  
  belongs_to :farm
  has_one_attached :attachment

  def attachment_url
    return Rails.application.routes.url_helpers.url_for(attachment) if attachment.attached?
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqcwio8gGLw-sSaYm0SYl13oLFpscvutmkk8l95s33AM3_kD0HivHJLzMF_t6w-VI2ow&usqp=CAU'
  end
end
