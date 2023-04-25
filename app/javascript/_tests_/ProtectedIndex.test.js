import "@testing-library/jest-dom"
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ProtectedIndex from "../components/pages/ProtectedIndex";
import { render, screen } from "@testing-library/react";

describe("<ProtectedIndex />", () => {
    beforeEach(() => {
      const current_user ={
        email: "trfmalpha@gmail.com",
        password: "testing123",
        id: 1
      }
  
      const userFoodItem = [
        {
          id:1, name: "Milk", quantity: 1, expiration_date: "05/01/23", location: "Refrigerator", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", user_id: 1
        }
      ]
      render(
        <BrowserRouter>
          <ProtectedIndex foodItems={userFoodItem} current_user={current_user}/>
        </BrowserRouter>
      )
    })
    it("renders without crashing", () => {})
  
    it("renders the heading", () => {
      const heading = screen.getByText("My Inventory")
      expect(heading).toBeInTheDocument()
    })

    it("displays item image", () => {
      const foodItemImage = screen.getByRole('img', {name: /milk/i})
      expect(foodItemImage).toBeInTheDocument()
    })

    it("displays information about item", () => {
      const foodItemInfo = screen.getByText(/current stock: 1 expires: 05\/01\/23/i)
      expect(foodItemInfo).toBeInTheDocument()
    })

    it("has a button for more info", () => {
      const moreInfo = screen.getByRole('link', {name: /more info/i})
      expect(moreInfo).toBeInTheDocument()
    })
  })