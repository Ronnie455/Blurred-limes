import React from 'react'
import { render, screen } from '@testing-library/react'
import AboutUs from '../components/pages/AboutUs.js'
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
  it("has a meet the developers header", () => {
    const header = screen.getByRole('heading', {name: /meet the developers/i})
    expect(header).toBeInTheDocument()
  })
  it("has an image for tammy", () => {
    const tammy = screen.getByRole('img', {name: /photo of tammy/i})
    expect(tammy).toBeInTheDocument()
  })
  it("has an image for marilyn", () => {
    const marilyn = screen.getByRole('img', {name: /photo of marilyn/i})
    expect(marilyn).toBeInTheDocument()
  })
  it("has an image for manny", () => {
    const manny = screen.getByRole('img', {name: /photo of manny/i})
    expect(manny).toBeInTheDocument()
  })
  it("has an image for ronnie", () => {
    const ronnie = screen.getByRole('img', {name: /photo of ronnie/i})
    expect(ronnie).toBeInTheDocument()
  })
  it("has a bio for tammy", () => {
    const tammy = screen.getByText(
      /before becoming a software developer, tammy took on various different roles in the corporate world\. during this time, she became interested in software development and decided to take the next step to pivot into a different career path\. her hobbies include traveling and watching sports\. one thing you can always find in her pantry is hot cheetos chips!/i
      )
    expect(tammy).toBeInTheDocument()
  })
  it("has a bio for manny", () => {
    const manny = screen.getByText(
      /a veteran and full stack web devleoper\. his dedication and willingness to specialize in both ends of the framework can be tedious, however his military background and life experiences have assisted with the transition\. manny's hobbies include watching sports and playing with his son\. one thing you can find in his pantry is baking soda!/i
      )
    expect(manny).toBeInTheDocument()
  })
  it("has a bio for ronnie", () => {
    const ronnie = screen.getByText(
      /a veteran that comes from a blue collar background\. before transitioning into tech, he worked in construction and wildland firefighting\. in his spare time you can find him in the woods on his dirt\-bike where he drops gears and disappears\. one thing you can find in his pantry is white cheddar cheez\-its!/i
      )
    expect(ronnie).toBeInTheDocument()
  })
  it("has a bio for marilyn", () => {
    const marilyn = screen.getByText(
      /a professional hip hop dancer turned software developer who is most eager to connect her artistic creativity to the technology field\. she is passionate about teaching dance and connecting with new people\. when she's not coding, she loves experiencing new places and being outside! one thing you can find in her pantry is liquid iv\.\. gotta stay hydrated!/i
      )
    expect(marilyn).toBeInTheDocument()
  })
  it("has a header for tammy", () => {
    const tammy = screen.getByRole('heading', {name: /tammy tran/i})
    expect(tammy).toBeInTheDocument()
  })
  it("has a header for manny", () => {
    const manny = screen.getByRole('heading', {name: /manny flores/i})
    expect(manny).toBeInTheDocument()
  })
  it("has a header for ronnie", () => {
    const ronnie = screen.getByRole('heading', {name: /ronnie maynard/i})
    expect(ronnie).toBeInTheDocument()
  })
  it("has a header for marilyn", () => {
    const marilyn = screen.getByRole('heading', {name: /marilyn remigio/i})
    expect(marilyn).toBeInTheDocument()
  })
  it("has a role for marilyn", () => {
    const marilyn = screen.getByRole('heading', {name: /project manager/i})
    expect(marilyn).toBeInTheDocument()
  })
  it("has a role for manny", () => {
    const manny = screen.getByRole('heading', {name: /product manager/i})
    expect(manny).toBeInTheDocument()
  })
  it("has a role for tammy", () => {
    const tammy = screen.getByRole('heading', {name: /tech lead/i})
    expect(tammy).toBeInTheDocument()
  })
  it("has a role for ronnie", () => {
    const ronnie = screen.getByRole('heading', {name: /design lead/i})
    expect(ronnie).toBeInTheDocument()
  })
})

