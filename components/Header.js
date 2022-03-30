import React from "react";
import Flags from "country-flag-icons/react/3x2";

const Header = () => {
  const HEADER_TITLE = [`Our cult favorite denim now comes in color.`];
  return (
    <div className="bg-black px-5 relative h-10 flex justify-end">
      <h3 className="absolute max-w-max max-h-max top-0 bottom-0 left-0 right-0 mx-auto my-auto text-xs font-semibold text-white text-center">
        {HEADER_TITLE}
      </h3>
      <div className="hidden md:flex items-center space-x-2">
        <Flags.IN title="india" className="w-4 h-4" />
        <h6 className="text-xs text-white">INR</h6>
      </div>
    </div>
  );
};

export default Header;
