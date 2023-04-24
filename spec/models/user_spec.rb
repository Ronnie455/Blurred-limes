require 'rails_helper'

RSpec.describe User, type: :model do
  let (:user) {User.create email: 'trfmalpha@gmail.com', password: 'test123', password_confirmation: 'test123'}

  it 'is valid with valid attributes' do
    user = User.create(email: 'trfmalpha@gmail.com', password: 'test123', password_confirmation: 'test123')
    expect(user).to be_valid
  end

  it 'is not valid without an email' do
    user = User.create(email: '', password: 'test123', password_confirmation: 'test123')
    expect(user).to_not be_valid
  end

  it 'is not valid without a password' do
    user = User.create(email: 'trfmalpha@gmail.com', password: '', password_confirmation: 'test123')
    expect(user).to_not be_valid
  end

  it 'is not valid without a password confirmation' do
    user = User.create(email: 'trfmalpha@gmail.com', password: 'test123', password_confirmation: '')
    expect(user).to_not be_valid
  end

  it 'is not valid without a unique email' do
    user = User.create(email: 'trfmalpha@gmail.com', password: 'test123', password_confirmation: 'test123')
    user2 = User.create(email: 'trfmalpha@gmail.com', password: 'test123', password_confirmation: 'test123')
    expect(user2).to_not be_valid
  end

  it 'is not valid if email is less than 7 characters' do
    user = User.create(email: 'ol.com', password: 'test123', password_confirmation: 'test123')
    expect(user).to_not be_valid
  end

  it 'is not valid if password is less than 6 characters' do
    user = User.create(email: 'trfmalpha@gmail.com', password: 'tt123', password_confirmation: 'tt123')
    expect(user).to_not be_valid
  end

  it 'is not valid if password and password confirmation are not the same' do
    user = User.create(email: 'trfmalpha@gmail.com', password: 'test1245', password_confirmation: 'test1238')
    expect(user).to_not be_valid
  end

  it 'is not valid if password does not include at least one number' do
    user = User.create(email: 'trfmalpha@gmail.com', password: 'testinggg', password_confirmation: 'testinggg')
    expect(user).to_not be_valid
  end

end
