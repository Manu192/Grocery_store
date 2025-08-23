import React from 'react'

function Header() {
  return (
    <>
     <nav className="bg-green-600 text-white shadow-md py-3.5">
  <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
    <div className="flex items-center space-x-2">
      <img src="https://copilot.microsoft.com/th/id/BCO.5c5c3a82-9d6c-48ba-9608-db8977b0e0bc.png" alt="FreshBasket" className="h-8 w-8 rounded-2xl" />
      <span className="text-xl font-bold">FreshBasket</span>
    </div>
    <ul className="hidden md:flex space-x-6 font-medium">
      <li className="hover:text-yellow-300 cursor-pointer">Home</li>
      <li className="hover:text-yellow-300 cursor-pointer">Shop</li>
      <li className="hover:text-yellow-300 cursor-pointer">Offers</li>
      <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
    </ul>
    <div className="flex items-center space-x-4">
      <button className="bg-yellow-300 text-green-900 px-3 py-1 rounded hover:bg-yellow-400 font-semibold">
        Cart (2)
      </button>
    </div>
  </div>

  <div className="flex-1 items-center justify-center mx-6 hidden md:flex">
          <input
            type="text"
            placeholder="Search for fruits, veggies, snacks..."
            className="w-100 px-4 py-2 bg-white text-green-700 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="bg-yellow-300 text-white px-4 py-2 rounded-r-md hover:bg-green-700" style={{transition:"0.5s ease"}}>
            Search
          </button>
        </div>
</nav>

    </>
  )
}

export default Header
