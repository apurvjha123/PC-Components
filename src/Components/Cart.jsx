import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useSelector } from "react-redux";
import { FaCreditCard } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { remove } from "../Redux/cartRedux";
import axios from "axios";
import {Navigate } from "react-router-dom";
const Cart = () => {
  const [StripeToken, setStripeToken] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const KEY =
    "pk_test_51LYBUCSEW2U3ObXEYSCO4gsd1rCQ57V6YHbzzouS9oqHZa78WWxxxf6XH8Fg7yCDO2gWG41ct8WKSa6HsNoNtNxb00OVld3YBK";

  const onToken = (token) => {
    setStripeToken(token);
  };
  
  useEffect(() => {
    const makeReq = async () => {
      try {
        const res = await axios.post(
          "https://pc-pcarts.herokuapp.com/api/checkout/payment",
          {
            tokenId: StripeToken.id,
            amount: 2000,
          }
        );
      } catch (error) {
        console.log(error);
      }
    };
    StripeToken && makeReq();
  }, [StripeToken]);

  const handleClick = (e) => {
    const id = e.target.getAttribute("ids");
    dispatch(remove(id));
  };
  return (
    <>
      <div className="flex justify-center my-6">
        <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
          <div className="flex-1">
            <table className="w-full text-sm lg:text-base" cellSpacing={0}>
              <thead>
                <tr className="h-12 uppercase">
                  <th className="hidden md:table-cell" />
                  <th className="text-left">Product</th>
                  <th className="lg:text-right text-left pl-5 lg:pl-0">
                    <span className="lg:hidden" title="Quantity">
                      Qtd
                    </span>
                    <span className="hidden lg:inline">Quantity</span>
                  </th>
                  <th className="hidden text-right md:table-cell">
                    Unit price
                  </th>
                  <th className="text-right">Total price</th>
                </tr>
              </thead>
              <tbody>
                {cart.products &&
                  cart.products.map((product) => (
                    <tr>
                      <td className="hidden pb-4 md:table-cell">
                        <a>
                          <img
                            src={product.img}
                            className="w-20 rounded"
                            alt="Thumbnail"
                          />
                        </a>
                      </td>
                      <td>
                        <a>
                          <p className="mb-2 md:ml-4">{product.title}</p>
                        </a>
                        <div
                          className="text-red-400 cursor-pointer"
                          ids={product._id}
                          onClick={handleClick}
                        >
                          Remove
                        </div>
                      </td>
                      <td className="justify-center md:justify-end md:flex mt-6">
                        <div className="w-20 h-10">
                          <div className="relative flex flex-row w-full h-8">
                            <div className="px-4 m-2 font-bold">
                              {product.quantity}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="hidden text-right md:table-cell">
                        <span className="text-sm lg:text-base font-medium">
                          ₹ {product.price}
                        </span>
                      </td>
                      <td className="text-right">
                        <span className="text-sm lg:text-base font-medium">
                          ₹ {product.price * product.quantity}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <hr className="pb-6 mt-6" />
            <div className="my-4 mt-6 -mx-2 lg:flex">
              <div className="lg:px-2 lg:w-1/2">
                <div className="p-4 mt-6 bg-gray-100 rounded-full">
                  <h1 className="ml-2 font-bold uppercase">
                    Instruction for seller
                  </h1>
                </div>
                <div className="p-4">
                  <p className="mb-4 italic">
                    If you have some information for the seller you can leave
                    them in the box below
                  </p>
                  <textarea
                    className="w-full h-24 p-2 bg-gray-100 rounded"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="lg:px-2 lg:w-1/2">
                <div className="p-4 bg-gray-100 rounded-full">
                  <h1 className="ml-2 font-bold uppercase">Order Details</h1>
                </div>
                <div className="p-4">
                  <p className="mb-6 italic">
                    Shipping and additionnal costs are calculated based on
                    values you have entered
                  </p>
                  <div className="flex justify-between border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Subtotal
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      ₹ {cart.total}
                    </div>
                  </div>

                  <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Discount
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      - ₹ 999
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Verifying Charge
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      ₹ 999
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Total
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      ₹ {cart.total}
                    </div>
                  </div>
                  {user ?(
                  <StripeCheckout
                    name="PC Parts"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaV3NDKeRj7uzfdhdQuUgsetIxf4WYoZKM9ZD2ovc&s"
                    billingAddress
                    shippingAddress
                    description={`Your total is ${cart.total}`}
                    currency="INR"
                    amount={cart.total * 100}
                    token={onToken}
                    stripeKey={KEY}
                  >
                    <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                      <FaCreditCard className="text-2xl" />
                      <span className="ml-2 mt-5px">Procceed to checkout</span>
                    </button>
                  </StripeCheckout>):<Navigate to="/login" />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
