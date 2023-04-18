import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {
  return (
    <>
      <h1>Blurred Limes</h1>
      <BrowserRouter>
         <Header />
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
