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
  })
  it("has a greeting", () => {
    const header = screen.getByRole('heading', {name:/welcome!/i})
    expect(header).toBeInTheDocument()
  })
  it("has a description", () => {
    const description = screen.getByText(/reduce waste, save money, and keep your kitchen organized\. sign up today to start tracking your personal inventory with blurred limes\./i)
      expect(description).toBeInTheDocument()
  })
  })
