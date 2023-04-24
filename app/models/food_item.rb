class FoodItem < ApplicationRecord
  belongs_to :user
  validates :name, :quantity, :expiration_date, :location, :image, :user_id, presence:true
  validates :name, uniqueness:true
  validates :name, length: { minimum: 2 }
  validates :quantity, length: { minimum: 1 }
  validates :expiration_date, :location, length: { minimum: 3 }
  validates :image, length: { minimum: 10 }
end
