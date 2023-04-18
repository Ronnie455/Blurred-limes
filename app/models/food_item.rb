class FoodItem < ApplicationRecord
  belongs_to :user
  validates :name, :quantity, :expiration_date, :location, :image, :user_id, presence:true
end
