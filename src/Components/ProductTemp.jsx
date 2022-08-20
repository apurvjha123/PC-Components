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

  const details = async () => {
    await axios
      .get(`http://52.66.142.209:8000/api/product/find/${id}`)
      .then((res) => setDetails(res.data));
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
      )}
    </>
  );
};

export default ProductTemp;
