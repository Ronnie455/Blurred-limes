import { render,screen} from '@testing-library/react';
import Home from './Home.js';
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import React from 'react';


describe("<Home />", () => {
  beforeEach(() => {
    render(
        <BrowserRouter>
            <Home/>
        </BrowserRouter>
    )
  })
  it("renders without crashing", () => {   
    screen.logTestingPlaygroundURL()
  })
  it("has a greeting", () => {
    const header = screen.getByRole('heading', {name:/welcome!/i})
    expect(header).toBeInTheDocument()
  })
  it("has a description", () => {
    const description = screen.getByText(
      /tired of buying items you already have at home\? have you ever had a roommate eat your food\? do ya'll wish you could keep your groceries more organized\? well\.\.\.\.we are here to clear up the blurred limes!! with our new and innovative application blurred limes you can reduce waste and save money by keeping a log of personal inventory which will save you time and keep your kitchen organized\. so sign up today because no one wants an angry kitchen\./i)
      expect(description).toBeInTheDocument()
  })
  })
