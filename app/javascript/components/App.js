import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import FoodItemIndex from "./pages/FoodItemIndex";
import FoodItemShow from "./pages/FoodItemShow";
import FoodItemNew from "./pages/FoodItemNew";
import FoodItemEdit from "./pages/FoodItemEdit";
import ProtectedIndex from "./pages/ProtectedIndex";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Header from "./components/Header";
import food from './mockFood';

const App = (props) => {
  const [foodItems, setFoodItems] = useState(food)

  useEffect(() => {
    readFoodItems()
  }, [])

  const readFoodItems = () => {
    fetch("/foodItems")
    .then((response) => response.json())
    .then((payload) => setFoodItems(payload))
    .catch((error) => console.log(error))
  }


  return (
    <>
      <h1>Blurred Limes</h1>
      <BrowserRouter>
         <Header {...props}/>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fooditemindex" element={<FoodItemIndex foodItems={foodItems} />} />
          <Route path="/fooditemshow" element={<FoodItemShow />} />
          <Route path="/fooditemnew" element={<FoodItemNew />} />
          <Route path="/fooditemedit" element={<FoodItemEdit />} />
          <Route path="/protectedindex" element={<ProtectedIndex foodItems={foodItems} current_user={props.current_user} />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
