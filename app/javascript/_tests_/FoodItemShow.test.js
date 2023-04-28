import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import FoodItemShow from "../components/pages/FoodItemShow"
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom"
import food from "../components/mockFood"

const renderShow = () => {
    render (
        <MemoryRouter initialEntries={["/fooditemshow/1"]}>
            <Routes>
                <Route path="/fooditemshow/:id" element={<FoodItemShow foodItems={food}/>} />                
            </Routes>
        </MemoryRouter>
    )
}
describe("<FoodItemShow />", () => {
  it("renders without crashing", () => {
    renderShow()
  })

  it("renders the food name", () => {
    renderShow()
    const foodName = screen.getByRole('heading', {
      name: /milk/i
    })
    expect(foodName).toBeInTheDocument()
  })

  it("renders the food location", () => {
    renderShow()
    const foodLocation = screen.getByRole('heading', {
      name: /refrigerator/i
    })
    expect(foodLocation).toBeInTheDocument()
  })

  it("renders the food image", () => {
    renderShow()
    const foodImage = screen.getByRole('img', {
      name: /milk/i
    })
    expect(foodImage).toBeInTheDocument()
  })

  it("renders the food quantity", () => {
    renderShow()
    const foodQuantity = screen.getByText(/quantity: 1/i)
    expect(foodQuantity).toBeInTheDocument()
  })

  it("renders the food expiration date", () => {
    renderShow()
    const foodExpiration = screen.getByText(/expiration date: 05\/01\/23/i)
    expect(foodExpiration).toBeInTheDocument()
  })

  it("renders the button to return to index", () => {
    renderShow()
    const foodButton = screen.getByRole('link', {
      name: /back to inventory/i
    })
    expect(foodButton).toBeInTheDocument()
  })
})