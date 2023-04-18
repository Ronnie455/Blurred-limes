import React from 'react'
import { render, screen } from '@testing-library/react'
import AboutUs from './AboutUs.js'
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


describe("<AboutUs />", () => {
  beforeEach(() => {
    render(
        <BrowserRouter>
            <AboutUs />
        </BrowserRouter>
    )
  })
  it("renders without crashing", () => {   
  })
  it("has a header", () => {
    screen.logTestingPlaygroundURL()
    // const header = screen.getByRole('heading', {name:/meet the developers!/i})
    // expect(header).toBeInTheDocument()
  })
//   it("has a description", () => {
//     const description = screen.getByText(
//       /tired of buying items you already have at home\? have you ever had a roommate eat your food\? do ya'll wish you could keep your groceries more organized\? well\.\.\.\.we are here to clear up the blurred limes!! with our new and innovative application blurred limes you can reduce waste and save money by keeping a log of personal inventory which will save you time and keep your kitchen organized\. so sign up today because no one wants an angry kitchen\./i)
//       expect(description).toBeInTheDocument()
//   })
})

