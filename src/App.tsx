import {Routes, Route} from "react-router";
import Products from "./pages/products/Products";
import CreateProduct from "./pages/create-product/CreateProduct";
import Navigation from "./components/navigation/Navigation";

export default function App(){
  return(
      <>
        <Navigation/>
        <Routes>
          <Route index element={<Products />} />
          <Route path="/create-product" element={<CreateProduct />} />
        </Routes>
      </>
  )
}