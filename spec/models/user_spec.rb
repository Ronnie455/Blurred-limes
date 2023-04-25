require 'rails_helper'

RSpec.describe User, type: :model do
  let (:user) {User.create email: 'trfmalpha@gmail.com', password: 'test123', password_confirmation: 'test123'}

  it 'is valid with valid attributes' do
    user = User.create(
      email: 'trfmalpha@gmail.com', 
      password: 'test123', 
      password_confirmation: 'test123'
    )
    expect(user).to be_valid
  end

  it 'is not valid without an email' do
    user = User.create(
      email: '', 
      password: 'test123', 
      password_confirmation: 'test123'
    )
    expect(user).to_not be_valid
  end

  it 'is not valid without a password' do
    user = User.create(
      email: 'trfmalpha@gmail.com', 
      password: '', 
      password_confirmation: 'test123'
    )
    expect(user).to_not be_valid
  end

  it 'is not valid without a password confirmation' do
    user = User.create(
    email: 'trfmalpha@gmail.com', 
    password: 'test123', 
    password_confirmation: ''
  )
    expect(user).to_not be_valid
  end

  it 'is not valid without a unique email' do
    user = User.create(
      email: 'trfmalpha@gmail.com', 
      password: 'test123', 
      password_confirmation: 'test123'
    )
    user2 = User.create(
      email: 'trfmalpha@gmail.com', 
      password: 'test123', 
      password_confirmation: 'test123'
    )
    expect(user2).to_not be_valid
  end

  it 'is not valid if email is less than 7 characters' do
    user = User.create(
      email: 'ol.com', 
      password: 'test123', 
      password_confirmation: 'test123'
    )
    expect(user).to_not be_valid
  end

  it 'is not valid if email is more than 50 characters' do
    user = User.create(
      email: 'firstnamemid45677654dlenamelastnamesdfhjdghbsghn@gmail.com', 
      password: 'test123', 
      password_confirmation: 'test123'
    )
    expect(user).to_not be_valid
  end

  it 'is not valid if email does not include a symbol' do
    user = User.create(
      email: 'firstnamemid4nm', 
      password: 'test123', 
      password_confirmation: 'test123'
    )
    expect(user.errors[:email]).to_not be_empty
  end

  it 'is not valid if email does not include a letter' do
    user = User.create(
      email: '123456787654345', 
      password: 'test123', 
      password_confirmation: 'test123'
    )
    expect(user.errors[:email]).to_not be_empty
  end

  it 'is not valid if password is more than 20 characters' do
    user = User.create(
      email: 'trfmalpha@gmail.com', 
      password: 'password3456787654344', 
      password_confirmation: 'password3456787654344'
    )
    expect(user).to_not be_valid
  end

  it 'is not valid if password is less than 6 characters' do
    user = User.create(
      email: 'trfmalpha@gmail.com', 
      password: 'tt123', 
      password_confirmation: 'tt123'
    )
    expect(user).to_not be_valid
  end

  it 'is not valid if password is password' do
    user = User.create(
      email: 'trfmalpha@gmail.com', 
      password: 'password', 
      password_confirmation: 'password'
    )
    expect(user).to_not be_valid
  end

  it 'is not valid if password is 1234567890' do
    user = User.create(
      email: 'trfmalpha@gmail.com', 
      password: '1234567890', 
      password_confirmation: '1234567890'
    )
    expect(user.errors[:password]).to_not be_empty
  end

  it 'is not valid if password is thisismypassword' do
    user = User.create(
      email: 'trfmalpha@gmail.com', 
      password: 'thisismypassword', 
      password_confirmation: 'thisismypassword'
    )
    expect(user.errors[:password]).to_not be_empty
  end

  it 'is not valid if password and password confirmation are not the same' do
    user = User.create(
      email: 'trfmalpha@gmail.com', 
      password: 'test1245', 
      password_confirmation: 'test1238'
    )
    expect(user).to_not be_valid
  end

  it 'is not valid if password does not include at least one number' do
    user = User.create(
    email: 'trfmalpha@gmail.com', 
    password: 'testinggg', 
    password_confirmation: 'testinggg'
    )
    expect(user).to_not be_valid
  end

  it 'is not valid if password is the same as email' do
    user = User.create(
      email: 'trfmalpha@gmail.com', 
      password: 'trfmalpha@gmail.com', 
      password_confirmation: 'trfmalpha@gmail.com'
    )
    expect(user).to_not be_valid
  end

  it 'is not valid if email is the same as password' do
    user = User.create(
      email: 'testing123', 
      password: 'testing123', 
      password_confirmation: 'testing123'
    )
    expect(user).to_not be_valid
  end


end
