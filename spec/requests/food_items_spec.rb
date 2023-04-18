require 'rails_helper'

RSpec.describe "FoodItems", type: :request do
  let (:user) {User.create email: 'trfmalpha@gmail.com', password: 'test123', password_confirmation: 'test123'}
  describe "GET /index" do
    it 'gets a food item list' do
      food_item = user.food_items.create(name: "Milk", quantity: 1, expiration_date: "05/01/2023", location: "Refrigerator", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")

      get '/food_items'
      food_item = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(food_item.length).to eq 1
    end
  end
end
