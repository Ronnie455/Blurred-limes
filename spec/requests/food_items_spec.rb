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

  describe "POST/create" do
    it "creates a food item" do
      food_params = {
        food_item: {
          name: "Milk", quantity: 1, expiration_date: "05/01/2023", location: "Refrigerator", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", user_id: user.id
        }
      }

      post '/food_items', params: food_params
      expect(response).to have_http_status(200)

      food_item = FoodItem.first
      expect(food_item.name).to eq "Milk"
    end

    it "does not create a food item without a name" do
      food_params = {
        food_item: {
          quantity: 1, expiration_date: "05/01/2023", location: "Refrigerator", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", user_id: user.id
        }
      }

      post '/food_items', params: food_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['name']).to include "can't be blank"
    end

    it "does not create a food item without an image" do
      food_params = {
        food_item: {
          name: "Milk", quantity: 1, expiration_date: "05/01/2023", location: "Refrigerator", user_id: user.id
        }
      }

      post '/food_items', params: food_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['image']).to include "can't be blank"
    end

    it "does not create a food item without a user id" do
      food_params = {
        food_item: {
          name: "Milk", quantity: 1, expiration_date: "05/01/2023", location: "Refrigerator", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        }
      }

      post '/food_items', params: food_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['user_id']).to include "can't be blank"
    end

    it "does not create a food item without a quantity" do
      food_params = {
        food_item: {
          name: "Milk", expiration_date: "05/01/2023", location: "Refrigerator", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", user_id: user.id
        }
      }

      post '/food_items', params: food_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['quantity']).to include "can't be blank"
    end

    it "does not create a food item without an expiration date" do
      food_params = {
        food_item: {
          name: "Milk", quantity: 1, location: "Refrigerator", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", user_id: user.id
        }
      }

      post '/food_items', params: food_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['expiration_date']).to include "can't be blank"
    end

    it "does not create a food item without a location" do
      food_params = {
        food_item: {
          name: "Milk", quantity: 1, expiration_date: "05/01/2023", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", user_id: user.id
        }
      }

      post '/food_items', params: food_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['location']).to include "can't be blank"
    end
  end

  describe "DELETE/destroy" do
    it "deletes a food item" do
      food_params = {
        food_item: {
          name: "Milk", quantity: 1, expiration_date: "05/01/2023", location: "Refrigerator", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", user_id: user.id
        }
      }
      post '/food_items', params: food_params
      food_item = FoodItem.first
      food_items = FoodItem.all

      delete "/food_items/#{food_item.id}"
      expect(response).to have_http_status(200)
      expect(food_items).to be_empty
    end
  end 
end
