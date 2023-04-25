import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FoodItemEdit from "../components/pages/FoodItemEdit";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import food from "../components/mockFood";


describe("<FoodItemEdit />", () => {
  beforeEach(() => {
    const current_user = {
      email: "trfmalpha@gmail.com",
      password: "testing123",
      id: 1
    }
    render(
      <MemoryRouter initialEntries={["/fooditemedit/1"]}>
        <Routes>
          <Route
            path="/fooditemedit/:id"
            element={<FoodItemEdit foodItems={food} current_user={current_user} />}
          />
        </Routes>
      </MemoryRouter>
    );
  });
 
  it("renders an edit page without crashing", () => {
        screen.logTestingPlaygroundURL()
  });
  it("has fillable forms for updating a food item", () => {

    const formName = screen.getByText(/name/i);
    expect(formName).toBeInTheDocument()

    const formQuantity = screen.getByText(/quantity/i);
    expect(formQuantity.getAttribute("for")).toEqual("quantity");

    const formExpiration = screen.getByText(/expiration date/i);
    expect(formExpiration.getAttribute("for")).toEqual("expiration_date");

    const formLocation = screen.getByText(/location/i);
    expect(formLocation.getAttribute("for")).toEqual("location");

    const formImage = screen.getByText(/image/i);
    expect(formImage.getAttribute("for")).toEqual("image");
  });
});