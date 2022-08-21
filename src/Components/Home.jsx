import React, { useEffect, useState } from 'react'
import { userRequest } from '../reqMethod'
import {useSelector} from 'react-redux'
import Loader from './Loader'

const Home = () => {
  const [User, setUser] = useState([])

  const [Orders, setOrders] = useState([])
  const [loader, setloader] = useState(true)
  
  const length = useSelector(state=> state.product.prolen)

  useEffect(() => {
    const getUsers = async()=>{
      const req = await userRequest.get('/user?new=true')
      setUser(req.data)
      setloader(false)
    }
    getUsers()
  }, [])

  useEffect(() => {
    const getOrders = async()=>{
      const req = await userRequest.get('order')
      setOrders(req.data)
    }
    getOrders()
  }, [])

  return (
    <main>
  <div className="pt-6 px-4">
    
    <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
              {length}
            </span>
            <h3 className="text-base font-normal text-gray-500">
              Total Products
            </h3>
          </div>
          <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
            {length / 100}
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
              {Orders.length}
            </span>
            <h3 className="text-base font-normal text-gray-500">
              Total Order
            </h3>
          </div>
          <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
            {Orders.length / 100}
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
              385
            </span>
            <h3 className="text-base font-normal text-gray-500">
              User signups this week
            </h3>
          </div>
          <div className="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
            -2.7%
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
      <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold leading-none text-gray-900">
            Latest Customers
          </h3>
          <a
            href="#"
            className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
          >
            View all
          </a>
        </div>
        {!loader ?(<div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200">
            {User && User.map(user =>(
              <li className="py-3 sm:py-4" key={user._id}>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user.img || "https://t3.ftcdn.net/jpg/01/81/76/56/240_F_181765661_yNJEm7i1k52QFwGyJxCD901bNu1298Fy.jpg"}
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {user.username}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {user.email}
                  </p>
                </div>
              </div>
            </li>
            ))}
            
          </ul>
        </div>
        ):<Loader></Loader>}
      </div>
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
  <div className="mb-4 flex items-center justify-between">
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        Latest Transactions
      </h3>
      <span className="text-base font-normal text-gray-500">
        This is a list of latest transactions
      </span>
    </div>
    <div className="flex-shrink-0">
      <a
        href="#"
        className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
      >
        View all
      </a>
    </div>
  </div>
  <div className="flex flex-col mt-8">
    <div className="overflow-x-auto rounded-lg">
      <div className="align-middle inline-block min-w-full">
        <div className="shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Transaction
                </th>
                <th
                  scope="col"
                  className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date &amp; Time
                </th>
                <th
                  scope="col"
                  className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                  Payment from{" "}
                  <span className="font-semibold">Bonnie Green</span>
                </td>
                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                  Apr 23 ,2021
                </td>
                <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                  $2300
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                  Payment refund to{" "}
                  <span className="font-semibold">#00910</span>
                </td>
                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                  Apr 23 ,2021
                </td>
                <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                  -$670
                </td>
              </tr>
              <tr>
                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                  Payment failed from{" "}
                  <span className="font-semibold">#087651</span>
                </td>
                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                  Apr 18 ,2021
                </td>
                <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                  $234
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                  Payment from <span className="font-semibold">Lana Byrd</span>
                </td>
                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                  Apr 15 ,2021
                </td>
                <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                  $5000
                </td>
              </tr>
              <tr>
                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                  Payment from <span className="font-semibold">Jese Leos</span>
                </td>
                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                  Apr 15 ,2021
                </td>
                <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                  $2300
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                  Payment from{" "}
                  <span className="font-semibold">THEMESBERG LLC</span>
                </td>
                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                  Apr 11 ,2021
                </td>
                <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                  $560
                </td>
              </tr>
              <tr>
                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                  Payment from <span className="font-semibold">Lana Lysle</span>
                </td>
                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                  Apr 6 ,2021
                </td>
                <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                  $1437
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

      
    </div>
    
  </div>
</main>

  )
}

export default Home