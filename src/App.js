import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Master from "./pages"
import Home from "./pages/home"
import NotFound from "./pages/404"
import Shop from "./pages/shop"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master />}>
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App