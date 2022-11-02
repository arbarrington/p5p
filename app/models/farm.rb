class Farm < ApplicationRecord
  validates :name, presence: true
  validates :location, presence: true
  belongs_to :user
end
