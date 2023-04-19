import "@testing-library/jest-dom"
import { render,screen} from '@testing-library/react';
import Footer from './Footer.js';
import { BrowserRouter } from "react-router-dom"
import React from 'react';

describe("<Footer />", () => {
  beforeEach(() => {
    render(
        <BrowserRouter>
            <Footer/>
        </BrowserRouter>
    )
  })
  it("renders without crashing", () => {   
    screen.logTestingPlaygroundURL()
  })
  it("has app name", () => {
    const footer = screen.getByText(/©2023 blurred limes/i)
    expect(footer).toBeInTheDocument()
  })
  it("has developers", () => {
    const description = screen.getByText(/marilyn remigio/i)
  })
 })
