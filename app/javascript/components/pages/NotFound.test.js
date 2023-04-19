import React from "react"
import { screen, render } from "@testing-library/react"
import NotFound from "./NotFound"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

describe("<NotFound />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
  })
  it("renders without crashing", () => {  
    screen.logTestingPlaygroundURL() 
  })
  it("has a greeting", () => {
    const header = screen.getByRole('heading', {name:/Error Page Not Found/i})
    expect(header).toBeInTheDocument()
  })
  it("has a error message", () => {
    const error = screen.getByText(
    /Oh dear, this isn't the fridge you're looking for./i)
    expect(error).toBeInTheDocument()
  })   
})