import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Master from "./pages"
import NotFound from "./pages/404"
import Banner from "./pages/banner"
import Contact from "./pages/contact"
import FeatureProduct from "./pages/featureProduct"
import PopularProduct from "./pages/popularProduct"
import Shop from "./pages/shop"
import Slide from "./pages/slide"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master />}>
          <Route path="/slide" element={<Slide />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/popular-product" element={<PopularProduct />} />
          <Route path="/feature-product" element={<FeatureProduct />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App