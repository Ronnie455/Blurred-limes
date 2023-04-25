import React from "react"
import { screen, render } from "@testing-library/react"
import NotFound from "../components/pages/NotFound"
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
    /Uh Oh! It looks like something is out of place./i)
    expect(error).toBeInTheDocument()
  })   
})