import "@testing-library/jest-dom"
import React from "react"
import {render, screen} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import FoodItemNew from "./FoodItemNew"

describe("<FoodItemNew />", () => {
  beforeEach(() => {
    const current_user = {
      email: "trfmalpha@gmail.com",
      password: "testing123",
      id: 1
    }

    render(
      <BrowserRouter>
        <FoodItemNew current_user={current_user}/>
      </BrowserRouter>
    )
  })

  it("renders without crashing", () => {screen.logTestingPlaygroundURL()})

  it("has a textbox for name", () => {
    const foodItem = screen.getByRole('textbox', {
      name: /name/i
    })
    expect(foodItem).toBeInTheDocument()
  })

  it("has a textbox for quantity", () => {
    const foodItem = screen.getByRole('spinbutton', {name: /quantity/i})
    expect(foodItem).toBeInTheDocument()
  })

  it("has a textbox for expiration_date", () => {
    const foodItem = screen.getByPlaceholderText(/mm\/dd\/yyyy/i)
    expect(foodItem).toBeInTheDocument()
  })

  it("has a textbox for location", () => {
    const foodItem = screen.getByPlaceholderText(/ex\. refrigerator, pantry, etc/i)
    expect(foodItem).toBeInTheDocument()
  })

  it("has a textbox for image", () => {
    const foodItem = screen.getByPlaceholderText(/Add an image URL/i)
    expect(foodItem).toBeInTheDocument()
  })

})