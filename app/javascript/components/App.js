import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import FoodItemIndex from "./pages/FoodItemIndex";
import FoodItemShow from "./pages/FoodItemShow";
import FoodItemNew from "./pages/FoodItemNew";
import FoodItemEdit from "./pages/FoodItemEdit";
import ProtectedIndex from "./pages/ProtectedIndex";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = (props) => {
  return (
    <>
      <h1>Blurred Limes</h1>
      <BrowserRouter>
         <Header {...props}/>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fooditemindex" element={<FoodItemIndex />} />
          <Route path="/fooditemshow" element={<FoodItemShow />} />
          <Route path="/fooditemnew" element={<FoodItemNew />} />
          <Route path="/fooditemedit" element={<FoodItemEdit />} />
          <Route path="/protectedindex" element={<ProtectedIndex />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
