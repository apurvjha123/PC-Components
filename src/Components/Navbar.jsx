import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const user = useSelector(state=>state.user.currentUser)
  
  
  return (
    <>
     <>
  {/* This example requires Tailwind CSS v2.0+ */}
  <nav className="bg-gray-800">
    <div className="max-w-7xl mx-auto px-2 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        
        <div className="flex-1 flex items-center justify-center  sm:justify-start">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="block lg:hidden h-8 "
              src='https://png.pngtree.com/png-vector/20210527/ourmid/pngtree-silver-eagle-logo-for-gaming-team-png-image_3348622.jpg'
              alt="Workflow"
            />
            <img
              className="hidden lg:block h-8 w-auto"
              src="https://png.pngtree.com/png-vector/20210527/ourmid/pngtree-silver-eagle-logo-for-gaming-team-png-image_3348622.jpg"
              alt="Workflow"
            />
          </div>
          <div className="">
            </div>
            </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          {/* Profile dropdown */}
          <div className="ml-3 relative">
            <div>
              <button
                type="button"
                className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="sr-only">Open user menu</span>
                {user && <img
                  className="h-8 w-8 rounded-full"
                  src={user.img || "https://t3.ftcdn.net/jpg/01/81/76/56/240_F_181765661_yNJEm7i1k52QFwGyJxCD901bNu1298Fy.jpg"}
                  alt=""
                />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </nav>
</>

    </>
  )
}

export default Navbar