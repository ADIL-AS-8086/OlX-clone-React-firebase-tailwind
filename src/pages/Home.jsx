import React from "react";
import DataProvider from "../context/DataContext.jsx";
import Products from "../components/productcard/Products.jsx";
import CatgoryNavbar from "../components/catogerynavbar/CatgoryNavbar.jsx";

const Home = () => {
  return (
<>
       <div className='homeParentDiv pt-16'></div>
      <CatgoryNavbar/>
      <DataProvider>
          <Products/>
        </DataProvider>
  
</>
  );
};

export default Home;
