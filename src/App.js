import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Components/Home";
import Users from "./Pages/Users";
import Products from "./Pages/Products";
import Addproduct from './Pages/Addproduct'
import Editproduct from "./Pages/Editproduct";
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'
function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <div className="flex">
            <Sidebar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
              <Route path="/products" element={<Products />} />
              <Route path="/addproduct" element={<Addproduct />} />
              <Route path="/products/:id" element={<Editproduct />} />
            </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
