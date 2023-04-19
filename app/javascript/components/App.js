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
  const [foodItems, setFoodItems] = useState([])

  useEffect(() => {
    readFoodItems()
  }, [])

  const readFoodItems = () => {
    fetch("/food_items")
    .then((response) => response.json())
    .then((payload) => setFoodItems(payload))
    .catch((error) => console.log(error))
  }

  const createFoodItem = (foodItem) => {
    fetch("/food_items", {
        body: JSON.stringify(foodItem),
        headers: {
            "Content-Type": "application/json"
        }, 
        method: "POST"
    })
    .then((response) => response.json())
    .then(() => readFoodItems())
    .catch((errors) => console.log(errors))
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
          <Route path="/fooditemnew" element={<FoodItemNew current_user={props.current_user} createFoodItem={createFoodItem}/>} />
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
