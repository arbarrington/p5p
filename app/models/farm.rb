class Farm < ApplicationRecord
  validates :name, presence: true
  validates :location, presence: true
  belongs_to :user
  has_many :products, dependent: :destroy
  has_one_attached :banner
  
  # has_many_attached :files
  # accepts_nested_attributes_for :products

  def banner_url
    return Rails.application.routes.url_helpers.url_for(banner) if banner.attached?
    # 'https://as1.ftcdn.net/v2/jpg/01/71/36/16/1000_F_171361625_8ITQmFGxKZ3bh9KGc4QdtFEGcDiiV3sT.jpg'  end
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqcwio8gGLw-sSaYm0SYl13oLFpscvutmkk8l95s33AM3_kD0HivHJLzMF_t6w-VI2ow&usqp=CAU'
  end
  end
