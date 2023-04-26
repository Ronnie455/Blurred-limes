class FoodItem < ApplicationRecord
  belongs_to :user
  validates :name, presence:true
  validates :quantity, presence:true
  validates :expiration_date, presence:true
  validates :location, presence:true
  validates :image, presence:true
  validates :user_id, presence:true
  validates :name, uniqueness:true
  validates :name, length: { minimum: 2 }
  validates :quantity, length: { minimum: 1 }
  validates :expiration_date, length: { minimum: 3 }
  validates :location, length: { minimum: 3 }
  validates :image, length: { minimum: 10 }
  validates :name, length: { maximum: 25 }
  validates :quantity, length: { maximum: 3 }
  validates :expiration_date, length: { maximum: 10 }
  validates :location, length: { maximum: 15 }
  validates :image, length: { maximum: 5500 }
  validates :name, format: { without: /\d/, message: "cannot include numbers" }
  validates :location, format: { without: /\d/, message: "cannot include numbers" }
  validates :location, format: { without: /[\W]/, message: "cannot include symbols" }
  validates :expiration_date, format: { without: /[A-Za-z]/, message: "cannot include letters" }
  validates :image, format: { with: /[\W]/, message: "must include symbols" }
  validates :image, format: { with: /[A-Za-z]/, message: "must include letters" }
  validates :quantity, numericality: { only_integer: true }
  validate :name_cannot_be_location

  def name_cannot_be_location
    if name == location
      errors.add(:location, "cannot be the same as name")
    end
  end

  validate :location_cannot_be_name

  def location_cannot_be_name
    if location == name
      errors.add(:name, "cannot be the same as location")
    end
  end

  validates :expiration_date, format: { with: /\A\d{2}\/\d{2}\/\d{4}\z/, message: "must be in the format MM/DD/YYYY" }

end
