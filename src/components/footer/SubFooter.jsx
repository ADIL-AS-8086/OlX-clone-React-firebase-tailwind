import React from "react";

const SubFooter = () => {
  return (
    <footer className="p-6 dark:bg-gray-100 dark:text-gray-800  mt-30  ">
      <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Popular Locations</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
            <a rel="noopener noreferrer" href="#">
              Kolkata
            </a>
            <a rel="noopener noreferrer" href="#">
              Mumbai
            </a>
            <a rel="noopener noreferrer" href="#">
              Chennai
            </a>
            <a rel="noopener noreferrer" href="#">
              Pune
            </a>
      
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">Trending Locations</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
            <a rel="noopener noreferrer" href="#">
              {" "}
              Bhubaneshwar
            </a>
            <a rel="noopener noreferrer" href="#">
              Hyderabad
            </a>
            <a rel="noopener noreferrer" href="#">
              Chandigarh
            </a>
            <a rel="noopener noreferrer" href="#">
                  Nashik
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">About Us</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
            <a rel="noopener noreferrer" href="#">
Tech@OLX

            </a>
            <a rel="noopener noreferrer" href="#">
         Careers
            </a>
   



          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-medium">OLX</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
            <a rel="noopener noreferrer" href="#">
           Blog
            </a>
            <a rel="noopener noreferrer" href="#">
Help
            </a>
            <a rel="noopener noreferrer" href="#">
     Sitemap
            </a>
            <a rel="noopener noreferrer" href="#">
          Legal & Privacy information
Vulnerability
            </a>
          </div>
        </div>
      </div>
    
    </footer>
  );
};

export default SubFooter;
