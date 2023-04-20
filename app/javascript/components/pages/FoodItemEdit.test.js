import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FoodItemEdit from "./FoodItemEdit";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import food from "../mockFood";


describe("<FoodItemEdit />", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/fooditemedit/1"]}>
        <Routes>
          <Route
            path="/fooditemedit/:id"
            element={<FoodItemEdit food={food} />}
          />
        </Routes>
      </MemoryRouter>
    );
  });
 
  it("renders an edit page without crashing", () => {
    
  });
  it("has fillable forms for updating a food item", () => {
    screen.logTestingPlaygroundURL()
    // const formName = screen.getByText(/name/i);
    // expect(formName).toBeInTheDocument()

  //   const formPlanet = screen.getByText(/planet/i);
  //   expect(formPlanet.getAttribute("for")).toEqual("planet");

  //   const formBedrooms = screen.getByText(/bedrooms/i);
  //   expect(formBedrooms.getAttribute("for")).toEqual("bedrooms");

  //   const formBathrooms = screen.getByText(/bathrooms/i);
  //   expect(formBathrooms.getAttribute("for")).toEqual("bathrooms");

  //   const formSquareFootage = screen.getByText(/square footage/i);
  //   expect(formSquareFootage.getAttribute("for")).toEqual("square_footage");

  //   const formUtilities = screen.getByText(/utilities/i);
  //   expect(formUtilities.getAttribute("for")).toEqual("utilities");

  //   const formParking = screen.getByText(/parking/i);
  //   expect(formParking.getAttribute("for")).toEqual("parking");

  //   const formPets = screen.getByText(/pets/i);
  //   expect(formPets.getAttribute("for")).toEqual("pets");

  //   const formPrice = screen.getByText(/price/i);
  //   expect(formPrice.getAttribute("for")).toEqual("price");

  //   const formImage = screen.getByText(/image/i);
  //   expect(formImage.getAttribute("for")).toEqual("image");
  });
});