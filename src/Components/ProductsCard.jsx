import React from "react";
import { useNavigate } from "react-router-dom";

const ProductsCard = (props) => {
  const history = useNavigate();
  const { _id, title, img, price } = props.val;

  const handleClick = () => {
    history(`/products/${_id}`);
  };
  return (
    <div className="max-w-sm mx-5 my-4 bg-white rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
      <a>
        <img className="p-8 rounded-t-lg" src={img} alt="product image" />
      </a>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <div className="flex justify-between items-center py-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ₹{price}
          </span>
          <a
            onClick={handleClick}
            className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Product
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
