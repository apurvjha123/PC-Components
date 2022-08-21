import React from "react";
import { CgComponents } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../Redux/userSlice";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(remove());
  };

  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/">
            <a className="flex items-center">
              <CgComponents className="text-sky-600 h-10 w-10" />
              <span className="self-center text-xl font-semibold font-serif px-3 whitespace-nowrap dark:text-white">
                PC Components
              </span>
            </a>
          </Link>
          <div className="w-full md:w-auto" id="navbar-default">
            <ul className="flex flex-row flex-wrap p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/">
                  <a
                    className="block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600 bg-white rounded md:bg-transparent md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/products">
                  <a
                    className="block py-2 pr-4 pl-3 text-gray-700 hover:text-sky-600 bg-white rounded md:bg-transparent md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Products
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <a
                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    onClick={handleClick}
                  >
                    {!user ? (
                      <div>Log In</div>
                    ) : (
                      <div>Logout({user.username})</div>
                    )}
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/products/cart">
                  <div className="flex">
                    <AiOutlineShoppingCart className="text-2xl hover:text-indigo-400" />
                    <div className=" -mt-3 mb-3 text-black text-center">
                      {quantity}
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
