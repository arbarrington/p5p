class Farm < ApplicationRecord
  validates :name, presence: true
  validates :location, presence: true
  belongs_to :user
  has_many :products
end
