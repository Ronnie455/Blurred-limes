class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :food_items
  validates :email, presence: true
  validates :password, presence: true
  validates :password_confirmation, presence: true
  validates :email, uniqueness:true
  validates :email, length: { minimum: 7 }
  validates :password, length: { minimum: 6 }
  validates :password, format: { with: /\A(?=.*\d)/, message: "must include at least one number" }
end
