import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductTemp from "./Components/ProductTemp";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import { useSelector } from "react-redux";
import Aboutus from "./Components/Aboutus";
import Signup from "./Components/Signup";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<ProductTemp />} />
          <Route exact path="/products/cart" element={<Cart />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/about" element={<Aboutus />} />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <Signup />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
