import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addProduct } from "../Redux/cartRedux";
import { useDispatch } from "react-redux";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";

const ProductTemp = () => {
  const id = useParams().id;
  const [Details, setDetails] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [Added, setAdded] = useState(false);
  const [loader, setloader] = useState(true);

  const details = async () => {
    await axios
      .get(`https://pc-pcarts.herokuapp.com/api/product/find/${id}`)
      .then((res) => {
        setDetails(res.data)
        setloader(false)
      });
  };
  useEffect(() => {
    details();
  }, []);

  const dispatch = useDispatch();

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...Details, quantity }));
    setAdded(true);
  };

  return (
    <>
    {!loader?(<>
      {Details && (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex justify-center flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={Details.img}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {Details.categories}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {Details.title}
                </h1>
                <p className="leading-relaxed py-5">{Details.des}</p>
                <div className="flex py-6">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ₹ {Details.price}
                  </span>
                  <button
                    className="bg-indigo-300 text-white ml-10 m-1 p-1 rounded"
                    onClick={() => handleQuantity("dec")}
                  >
                    <AiOutlineMinus />
                  </button>
                  <div className="px-4 mt-2">{quantity}</div>
                  <button
                    className="bg-indigo-300 text-white m-1 p-1 rounded"
                    onClick={() => handleQuantity("inc")}
                  >
                    <IoIosAdd />
                  </button>
                  <button
                    onClick={handleClick}
                    className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  >
                    Add To Cart
                  </button>
                </div>
                {Added && (
                  <div className="text-lime-500 font-bold text-lg">
                    Added to Cart !
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}</>
    ):(
      <div
        role="status"
        className="p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700"
      >
        <div className="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-gray-700">
          <svg
            className="w-12 h-12 text-gray-200 dark:text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 640 512"
          >
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
          </svg>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
        <div className="flex items-center mt-4 space-x-3">
          <svg
            className="w-14 h-14 text-gray-200 dark:text-gray-700"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    )}
    </>
  );
};

export default ProductTemp;
