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
  validates :email, length: { maximum: 50 }
  validates :password, length: { minimum: 6 }
  validates :password, length: { maximum: 20 }
  validates :email, format: { with: /[\W]/, message: "must include symbols" }
  validates :email, format: { with: /[A-Za-z]/, message: "must include letters" }
  validates :password, format: { with: /\A(?=.*\d)/, message: "must include at least one number" }
  validates :password, exclusion: { in: %w[password PASSWORD Password], message: "cannot be 'password'" }
  validates :password, exclusion: { in: ['1234567890'], message: "cannot be '1234567890'" }
  validates :password, exclusion: { in: ['thisismypassword'], message: "cannot be 'thisismypassword'" }
  validate :password_cannot_be_email

  def password_cannot_be_email
    if password == email
      errors.add(:password, "cannot be the same as email")
    end
  end

  validate :email_cannot_be_password

  def email_cannot_be_password
    if email == password
      errors.add(:email, "cannot be the same as password")
    end
  end

end
