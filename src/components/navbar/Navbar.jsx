import React, { useContext, useState } from "react";
import {
  IoIosSearch,
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdHeartEmpty,
} from "react-icons/io";
import { BiTargetLock, BiCheck, BiPlus } from "react-icons/bi";
import { FiMapPin, FiSearch } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom"; 
import {auth} from "../../firebase/config"
import { signOut } from "firebase/auth"

import { AuthContext } from '../../context/AuthContext'










const Navbar = () => {
  const navigate=useNavigate()
    const user = useContext(AuthContext)

  const checkUserAndNavigate = () => {
    if(user && user.name){
        navigate('/addproduct')
    }else{
        toast.error("Please log in to add a product");
    }
}

  const handleLogout = () => {
    signOut(auth)
        .then(() => {
            user.setAsUser(null)
            console.log('successfully logged out');
        })
        .catch((error) => {
            console.log('an error happened during log out');
        });
}
const navigateToLogin = () => {
    navigate('/login')
}


  const [dropDownActive, setDropDownActive] = useState(false);
  const [dropDownActivelang, setDropDownActivelang] = useState(false);

  const toggleDropDownActive = () => {
    setDropDownActive(!dropDownActive);
  };

  const langtoggleDropDownActive = () => {
    setDropDownActivelang(!dropDownActivelang);
  };

  return (
<nav className="fixed bg-white shadow-[0_1px_4px_0_#0000001a] w-full h-16 z-[1000]">

      
   <Toaster/>
      <div className="w-14 h-12 ml-5 mt-2">
        <img
          src="https://statics.olx.in/external/base/img/olxLogo/olx_logo_2025.svg"
          alt=""
          onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                  }}
        />
      </div>
      <div className="bg-white border-2 border-black rounded box-border flex h-12 max-h-80 overflow-visible w-[272px] z-[6] px-2 ml-28 -mt-10">
        <IoIosSearch className="h-6 w-6 mt-2" />
        <input
          type="text"
          placeholder="Search area or locality"
          className="bg-white border-0  text-base h-10 outline-none overflow-hidden pl-4 truncate whitespace-nowrap w-full"
        />
        <button
          onClick={toggleDropDownActive}
          className="h-6 w-6 text-gray-700 mt-2 cursor-pointer text-3xl"
        >
          {dropDownActive ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>

        {dropDownActive && (
          <div className="absolute top-14 bg-white w-[272px] left-2 ml-[102.5px] shadow-xl scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <div className="flex py-2 px-5 items-center gap-2 text-blue-600">
              <BiTargetLock className="text-2xl" />
              <div>
                <p className="font-semibold">Use current location</p>
                <p className="text-sm">Kaloor, Kochi, Kerala, India</p>
              </div>
            </div>
            <p className="px-5 py-3 border-t border-gray-300">
              Popular Locations
            </p>
            <ul>
              <li className="flex items-center gap-2 px-5 py-3 hover:bg-cyan-300">
                <FiMapPin />
                Kerala
              </li>
              <li className="flex items-center gap-2 px-5 py-3 hover:bg-cyan-300">
                <FiMapPin />
                Tamil Nadu
              </li>
              <li className="flex items-center gap-2 px-5 py-3 hover:bg-cyan-300">
                <FiMapPin />
                Maharashtra
              </li>
              <li className="flex items-center gap-2 px-5 py-3 hover:bg-cyan-300">
                <FiMapPin />
                Punjab
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center flex-grow border-2 border-black rounded  mx-2 bg-white w-[470px]  ml-[420px] -mt-[46px]">
        <input
          placeholder="Find Cars, Mobile Phones and more..."
          className="w-full outline-none py-2 px-2"
        />
        <div className="bg-black p-2">
          <FiSearch className="text-white text-2xl" />
        </div>
      </div>
      <div className="flex items-center gap-2 py-2 px-2 mx-2 cursor-pointer -mt-[46px] ml-[57rem]">
        <p className="uppercase text-sm font-bold ">English</p>
        <button
          onClick={langtoggleDropDownActive}
          className="h-[25px] w-[25px] text-gray-700 -mt-0 cursor-pointer text-3xl"
        >
          {dropDownActivelang ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>
      {dropDownActivelang && (
        <div className="absolute top-14 bg-white right-65 shadow-xl w-30">
          <div className="arrow-up"></div>
          <ul>
            <li className="flex items-center justify-between gap-2 px-5 py-3 hover:bg-cyan-300">
              English
              <BiCheck className="text-3xl" />
            </li>
            <li className="flex items-center gap-2 px-5 py-3 hover:bg-cyan-300">
              Hindi
            </li>
          </ul>
        </div>
      )}
      <div className="absolute right-55 -mt-8">
        <IoMdHeartEmpty className="text-3xl text-gray-600 hover:text-red-500 hover:scale-110 transition-all duration-200" />
      </div>
      <div className="absolute right-38 -mt-8">
            {user && user.name ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            handleLogout();
          }}
        className="font-extrabold underline underline-offset-2 cursor-pointer"
        >
          logout
        </button>
      ) : (
        <button
          onClick={() => {
            navigateToLogin();
          }}
       className="font-extrabold underline underline-offset-2 cursor-pointer"
        >
          Login
        </button>
      )}

        <div className="rounded-full p-[2px] bg-gradient-to-r from-yellow-300 via-teal-700 to-indigo-500 inline-block absolute ml-5 -mt-2">
          <Link to="/addproduct">
            <button className="bg-white py-2 px-5 rounded-full uppercase font-bold flex items-center gap-2 cursor-pointer">
              <BiPlus /> Sell
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
