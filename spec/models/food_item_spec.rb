require 'rails_helper'

RSpec.describe FoodItem, type: :model do

  let (:user) {User.create email: 'trfmalpha@gmail.com', password: 'test123', password_confirmation: 'test123'}
  it 'should validate name' do
    food_item = user.food_items.create(quantity: 1, expiration_date: "05/01/2023", location: "Refrigerator", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
    expect(food_item.errors[:name]).to include "can't be blank"
  end

  it 'should validate quantity' do
    food_item = user.food_items.create(name: "Milk", expiration_date: "05/01/2023", location: "Refrigerator", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
    expect(food_item.errors[:quantity]).to include "can't be blank"
  end


  it 'should validate expiration_date' do
    food_item = user.food_items.create(name: "Milk", quantity: 1, location: "Refrigerator", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
    expect(food_item.errors[:expiration_date]).to include "can't be blank"
  end
   
  it 'should validate location' do
    food_item = user.food_items.create(name: "Milk", quantity: 1, expiration_date: "05/01/2023", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
    expect(food_item.errors[:location]).to include "can't be blank"
  end
   
  it 'should validate image' do
    food_item = user.food_items.create(name: "Milk", quantity: 1, expiration_date: "05/01/2023", location: "Refrigerator")
    expect(food_item.errors[:image]).to include "can't be blank"
  end
   
  it 'should validate a user_id' do
    food_item = FoodItem.create(name: "Milk", quantity: 1, expiration_date: "05/01/2023", location: "Refrigerator", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
    expect(food_item.errors[:user_id]).to include "can't be blank"
  end
end
