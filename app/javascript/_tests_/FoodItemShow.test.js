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
})