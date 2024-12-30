import "./App.css"
import {Routes, Route} from "react-router";
import Products from "./pages/products/Products";
import CreateProduct from "./pages/create-product/CreateProduct";

export default function App(){
  return(
      <Routes>
        <Route index element={<Products />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
  )
}