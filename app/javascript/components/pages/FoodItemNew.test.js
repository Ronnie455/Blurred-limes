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
    const foodItem = screen.getByPlaceholderText(/Add an image URL/i
    )
    expect(foodItem).toBeInTheDocument()
  })

  it("has a button to add to inventory", () => {
    const addToInventory = screen.getByRole('button', {
      name: /add to inventory/i
    })
    expect(addToInventory).toBeInTheDocument()
  })

  it("has a name header", () => {
    const header = screen.getByText(/name/i)
    expect(header).toBeInTheDocument()
  })

  it("has a quantity header", () => {
    const header = screen.getByText(/quantity/i)
    expect(header).toBeInTheDocument()
  })

  it("has an expiration date header", () => {
    const header = screen.getByText(/expiration date/i)
    expect(header).toBeInTheDocument()
  })

  it("has a location header", () => {
    const header = screen.getByText(/location/i)
    expect(header).toBeInTheDocument()
  })

  it("has an image header", () => {
    const header = screen.getByText(/image/i)
    expect(header).toBeInTheDocument()
  })

  it("has a page header", () => {
    const header = screen.getByRole('heading', {
      name: /add a new food item to your inventory/i
    })
    expect(header).toBeInTheDocument()
  })
})