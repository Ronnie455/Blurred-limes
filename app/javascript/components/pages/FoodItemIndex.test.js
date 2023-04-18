import "@testing-library/jest-dom"
import React from "react";
import { BrowserRouter } from "react-router-dom";
import FoodItemIndex from "./FoodItemIndex";
import { render, screen } from "@testing-library/react";

describe("<FoodItemIndex />", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <FoodItemIndex />
            </BrowserRouter>
        )
    })

    it("renders without crashing", () => {
    })

    it("renders the header", () => {
        const header = screen.getByRole('heading', {name: /Sign up to keep track of your own food items!/i})
        expect(header).toBeInTheDocument()
    })
});