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
    const header = screen.getByRole('heading', {name: /meet the developers/i})
    expect(header).toBeInTheDocument()
  })
  it("has an image for tammy", () => {
    screen.logTestingPlaygroundURL()
    const tammy = screen.getByRole('img', {name: /photo of tammy/i})
    expect(tammy).toBeInTheDocument()
  })
  it("has an image for marilyn", () => {
    screen.logTestingPlaygroundURL()
    const marilyn = screen.getByRole('img', {name: /photo of marilyn/i})
    expect(marilyn).toBeInTheDocument()
  })
  it("has an image for manny", () => {
    screen.logTestingPlaygroundURL()
    const manny = screen.getByRole('img', {name: /photo of manny/i})
    expect(manny).toBeInTheDocument()
  })
  it("has an image for ronnie", () => {
    screen.logTestingPlaygroundURL()
    const ronnie = screen.getByRole('img', {name: /photo of ronnie/i})
    expect(ronnie).toBeInTheDocument()
  })
  it("has a bio for tammy", () => {
    screen.logTestingPlaygroundURL()
    const tammy = screen.getByText(
      /i'm currently attending learn academy as a full\-time software development student looking to pivot into a new career\. before making the decision to attend learn academy, i have been getting my feet wet in the corporate world for the past few years \- i took on various different roles such as being a receptionist, office manager, and an assistant program manager\. during this time, i developed an interest in graphic design to explore my creative side and completed a graphic design program at uc berkeley extension while working at my full\-time job\. i quickly realized that i can do more with graphic design if i knew how to code, so naturally, coding started to pique my interest\. now i'm exposed to so many different paths for software development and am excited to start a new career! in my spare time, i like to watch sports and plan my next travel destination!/i
      )
    expect(tammy).toBeInTheDocument()
  })
  

})

