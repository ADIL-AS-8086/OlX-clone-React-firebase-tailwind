import React from 'react'
import CategoryDiv from '../catogerydiv/CategoryDiv '

const CatgoryNavbar = () => {
  return (
<div className="text-sm flex w-full gap-5 shadow py-1 pl-16 items-center fixed top-16 bg-white z-30">
      <CategoryDiv/>
      
      <a href="/" className="category-li">
        Cars
      </a>
      <a href="/" className="category-li">
        Motorcycles
      </a>
      <a href="/" className="category-li">
        Mobile Phones
      </a>
      <a href="/" className="category-li">
        For Sale: Houses & Apartments
      </a>
      <a href="/" className="category-li">
        Scooters
      </a>
      <a href="/" className="category-li">
        Commercial & Other Vehicles
      </a>
      <a href="/" className="category-li">
        For Rent: Houses & Apartments
      </a>
    </div>
  )
}

export default CatgoryNavbar
