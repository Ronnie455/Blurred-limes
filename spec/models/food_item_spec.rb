require 'rails_helper'

RSpec.describe FoodItem, type: :model do

  let (:user) {User.create email: 'trfmalpha@gmail.com', password: 'test123', password_confirmation: 'test123'}
  it 'should validate name' do
    food_item = user.food_items.create(
      quantity: 1, 
      expiration_date: "05/01/2023", 
      location: "Refrigerator", 
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    )
    expect(food_item.errors[:name]).to include "can't be blank"
  end

  it 'should validate quantity' do
    food_item = user.food_items.create(
      name: "Milk", 
      expiration_date: "05/01/2023", 
      location: "Refrigerator", 
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    )
    expect(food_item.errors[:quantity]).to include "can't be blank"
  end

  it 'should validate expiration_date' do
    food_item = user.food_items.create(
      name: "Milk", 
      quantity: 1, 
      location: "Refrigerator", 
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    )
    expect(food_item.errors[:expiration_date]).to include "can't be blank"
  end
   
  it 'should validate location' do
    food_item = user.food_items.create(
      name: "Milk", 
      quantity: 1, 
      expiration_date: "05/01/2023", 
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    )
    expect(food_item.errors[:location]).to include "can't be blank"
  end
   
  it 'should validate image' do
    food_item = user.food_items.create(
      name: "Milk", 
      quantity: 1, 
      expiration_date: "05/01/2023", 
      location: "Refrigerator"
    )
    expect(food_item.errors[:image]).to include "can't be blank"
  end
   
  it 'should validate a user_id' do
    food_item = FoodItem.create(
      name: "Milk", 
      quantity: 1, 
      expiration_date: "05/01/2023", 
      location: "Refrigerator", 
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    )
    expect(food_item.errors[:user_id]).to include "can't be blank"
  end

  it 'is not valid without a unique name' do
    food_item = {
      name: "Milk", 
      quantity: 1, 
      expiration_date: "05/01/2023", 
      location: "Refrigerator", 
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    }
    food_item2 = FoodItem.create(
      name: "Milk", 
      quantity: 1, 
      expiration_date: "05/05/2023", 
      location: "Refrigerator", 
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    )
    expect(food_item2).to_not be_valid
  end

  it 'is not valid if name is less than 2 characters' do
    food_item = FoodItem.create(
      name: "M", 
      quantity: 1, 
      expiration_date: "05/01/2023", 
      location: "Refrigerator", 
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    )
    expect(food_item).to_not be_valid
  end

  
  it 'is not valid if name is more than 25 characters' do
    food_item = FoodItem.create(
      name: "Chocolate chip with candy and sprinkles ice cream", 
      quantity: 1, 
      expiration_date: "05/01/2023", 
      location: "Refrigerator", 
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    )
    expect(food_item.errors[:name]).to_not be_empty
  end

  it 'is not valid if quantity is less than 1 character' do
    food_item = FoodItem.create(
      name: "Milk", 
      quantity: "", 
      expiration_date: "05/01/2023", 
      location: "Refrigerator", 
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    )
    expect(food_item).to_not be_valid
  end

  it 'is not valid if quantity is more than 3 characters' do
    food_item = FoodItem.create(
      name: "Milk", 
      quantity: 4502, 
      expiration_date: "05/01/2023", 
      location: "Refrigerator", 
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    )
    expect(food_item.errors[:quantity]).to_not be_empty
  end

  it 'is not valid if quantity is not an integer' do
    food_item = FoodItem.create(
      name: "Milk", 
      quantity: "sdf", 
      expiration_date: "05/01/2023", 
      location: "Refrigerator", 
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    )
    expect(food_item.errors[:quantity]).to_not be_empty
  end

  it 'is not valid if expiration date is less than 3 characters' do
    food_item = FoodItem.create(
      name: "Milk", 
      quantity: 1, 
      expiration_date: "05", 
      location: "Refrigerator", 
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    )
    expect(food_item).to_not be_valid
  end

  it 'is not valid if expiration date is not in the correct format' do
    food_item = FoodItem.create(
      name: "Milk", 
      quantity: 1, 
      expiration_date: "2023/05/30", 
      location: "Refrigerator", 
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    )
    expect(food_item.errors[:expiration_date]).to_not be_empty
  end

  it 'is not valid if expiration date is more than 10 characters' do
    food_item = FoodItem.create(
      name: "Milk", 
      quantity: 1, 
      expiration_date: "05/45/234567", 
      location: "Refrigerator", 
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    )
    expect(food_item.errors[:expiration_date]).to_not be_empty
  end

  it 'is not valid if location is less than 3 characters' do
    food_item = FoodItem.create(
      name: "Milk", 
      quantity: 1, 
      expiration_date: "05/03/2023", 
      location: "Refrigerator", 
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    )
    expect(food_item).to_not be_valid
  end

  it 'is not valid if location is more than 15 characters' do
    food_item = FoodItem.create(
      name: "Milk", 
      quantity: 1, 
      expiration_date: "05/03/2023", 
      location: "Refrigeratorrrrrr", 
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    )
    expect(food_item.errors[:location]).to_not be_empty
  end

  it 'is not valid if image is less than 10 characters' do
    food_item = FoodItem.create(
      name: "Milk", 
      quantity: 1, 
      expiration_date: "05/03/2023", 
      location: "Refrigerator", 
      image: "https:"
    )
    expect(food_item).to_not be_valid
  end

  it 'is not valid if image is more than 5500 characters' do
    food_item = FoodItem.create(
      name: "Milk", 
      quantity: 1, 
      expiration_date: "05/03/2023", 
      location: "Refrigerator", 
      image: "data:image/jpeg;base64,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"
    )
    expect(food_item.errors[:image]).to_not be_empty
  end

  it 'is not valid if name includes a number' do
    food_item = FoodItem.create(
      name: "M1lk", 
      quantity: 1, 
      expiration_date: "05/01/2023", 
      location: "Refrigerator", 
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    )
    expect(food_item.errors[:name]).to_not be_empty
  end

  it 'is not valid if location includes a number' do
    food_item = FoodItem.create(
      name: "Milk", 
      quantity: 1, 
      expiration_date: "05/01/2023", 
      location: "Refri356ator", 
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    )
    expect(food_item.errors[:location]).to_not be_empty
  end

  it 'is not valid if location includes a symbol' do
    food_item = FoodItem.create(
      name: "Milk", 
      quantity: 1, 
      expiration_date: "05/01/2023", 
      location: "Refrig@Fator", 
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    )
    expect(food_item.errors[:location]).to_not be_empty
  end

  it 'is not valid if expiration date includes a letter' do
    food_item = FoodItem.create(
      name: "Milk", 
      quantity: 1, 
      expiration_date: "april 25", 
      location: "Refrigerator", 
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    )
    expect(food_item.errors[:expiration_date]).to_not be_empty
  end

  it 'is not valid if image does not include a symbol' do
    food_item = FoodItem.create(
      name: "Milk", 
      quantity: 1, 
      expiration_date: "05/03/2023", 
      location: "Refrigerator", 
      image: "hgbnoeifsdmfloengioeneinfeonfeinfpefne"
    )
    expect(food_item.errors[:image]).to_not be_empty
  end

  it 'is not valid if image does not include a letter' do
    food_item = FoodItem.create(
      name: "Milk", 
      quantity: 1, 
      expiration_date: "05/03/2023", 
      location: "Refrigerator", 
      image: "2345678765434567876543"
    )
    expect(food_item.errors[:image]).to_not be_empty
  end

  it 'is not valid if name is the same as location' do
    food_item = FoodItem.create(
      name: "Pantry", 
      quantity: 1, 
      expiration_date: "05/03/2023", 
      location: "Pantry", 
      image: "2345678765434567876543"
    )
    expect(food_item.errors[:name]).to_not be_empty
  end

  it 'is not valid if location is the same as name' do
    food_item = FoodItem.create(
      name: "Milk", 
      quantity: 1, 
      expiration_date: "05/03/2023", 
      location: "Milk", 
      image: "2345678765434567876543"
    )
    expect(food_item.errors[:location]).to_not be_empty
  end




end
