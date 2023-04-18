import { render} from '@testing-library/react';
import Home from './Home.js';
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import React from 'react';


describe("<Home />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  })
  it('displays text home', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    expect('home').toBeInTheDocument
  })
})
