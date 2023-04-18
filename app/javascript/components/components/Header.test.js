import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("<Header />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })

  it("has clickable links for an unregistered user", () => {
    render(
      <BrowserRouter>
        <Header logged_in={false} />
      </BrowserRouter>
    )
    const aboutUs = screen.getByRole('link', {name: /about us/i})
    const viewFoodItems = screen.getByRole('link', {name: /view food items/i})
    const signIn = userEvent.click(screen.getByText(/sign in/i))
    const signUp = userEvent.click(screen.getByText(/sign up/i))
  })

  it("has clickable links for a registered user", () => {
    render(
      <BrowserRouter>
        <Header logged_in={true} />
      </BrowserRouter>
    )
    const aboutUs = screen.getByRole('link', {name: /about us/i})
    screen.logTestingPlaygroundURL()
    const myFoodItems = userEvent.click(screen.getByRole("link", { name: /my food items/i }))
    const allFoodItems = userEvent.click(screen.getByRole("link", { name: /view food items/i }))
    const createFoodItem = userEvent.click(screen.getByRole("link", { name: /add food item/i }))
    const signOut = userEvent.click(screen.getByText(/sign out/i))
})

})