import { NavLink } from "react-router";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <h3>SPA_Products</h3>  
      
      <span>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 mr-2" : "text-white mr-2"}>Products</NavLink>
        <NavLink to="/create-product" className={({ isActive }) => isActive ? "text-blue-500" : "text-white"}>Create</NavLink>
      </span>
    </nav>
  );
}