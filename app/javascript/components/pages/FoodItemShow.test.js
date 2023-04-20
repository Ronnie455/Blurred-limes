import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import  userEvent  from "@testing-library/user-event"
import FoodItemShow from "./FoodItemShow"
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom"
import food from "../mockFood"


const renderShow = () => {
    render (
        <MemoryRouter initialEntries={["/fooditemshow/1"]}>
            <Routes>
                <Route path="/fooditemshow/:id" element={<FoodItemShow food={food}/>} />                
            </Routes>
        </MemoryRouter>
    )
}
describe("<FoodItemShow />", () => {
  screen.logTestingPlaygroundURL()
  it("renders without crashing", () => {
    renderShow()
  })
  it("has clickable links for an unregistered user", () => {
    render(
      <BrowserRouter>
        <FoodItemShow logged_in={false} />
      </BrowserRouter>
    )
    const allFoodItems = userEvent.click(screen.getByRole('link', {
        name: /back to inventory/i
      })
    )
  })
})

