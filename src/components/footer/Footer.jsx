import React from "react";
import SubFooter from "./SubFooter";

const Footer = () => {
  return (
    <>
      <SubFooter />
      
      {/* MAIN FOOTER - NO MARGIN, NO GAP */}
      <footer className="w-full bg-[#004896] py-8 flex flex-col items-center m-0 p-0 bottom-0 left-0">
        <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
          <img
            src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade_tech.svg?v=1"
            alt="CarTrade Tech"
            className="h-20 w-auto"
          />
          <img
            src="https://statics.olx.in/external/base/img/cartrade/logo/olx_2025.svg?v=1"
            alt="OLX"
            className="h-14 w-auto"
          />
          <img
            src="https://statics.olx.in/external/base/img/cartrade/logo/carwale.svg?v=1"
            alt="CarWale"
            className="h-10 w-auto"
          />
          <img
            src="https://statics.olx.in/external/base/img/cartrade/logo/bikewale.svg?v=1"
            alt="BikeWale"
            className="h-12 w-auto"
          />
          <img
            src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade.svg?v=1"
            alt="CarTrade"
            className="h-12 w-auto"
          />
          <img
            src="https://statics.olx.in/external/base/img/cartrade/logo/mobility.svg?v=1"
            alt="Mobility"
            className="h-10 w-auto"
          />
        </div>

        <p className="text-white text-center mb-2">
          All rights reserved © 2006-2025 OLX
        </p>

        <hr className="w-3/4 max-w-md border-t border-gray-300" />
      </footer>
    </>
  );
};

export default Footer;