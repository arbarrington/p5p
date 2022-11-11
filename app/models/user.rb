class User < ApplicationRecord
  has_secure_password
  validates :username, presence: true, uniqueness: { case_sensitive: false }, length: { maximum: 16 }
  validates :producer, inclusion: {in: [true, false]}
  
  has_many_attached :files
  has_one_attached :icon

  
  has_many :farms
  has_many :products, through: :farms
  has_many :orders
  accepts_nested_attributes_for :products
  accepts_nested_attributes_for :farms
  def icon_url
    return Rails.application.routes.url_helpers.url_for(icon) if icon.attached?
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqcwio8gGLw-sSaYm0SYl13oLFpscvutmkk8l95s33AM3_kD0HivHJLzMF_t6w-VI2ow&usqp=CAU'
  end
end
