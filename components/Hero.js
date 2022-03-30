import React from "react";

const Hero = () => {
  return (
    <div className="bg-green-300 h-[65vh] px-5 flex flex-col justify-end pb-16 md:items-center md:justify-center md:pb-0 relative">
      <h1 className="text-white text-4xl font-semibold w-1/2 md:w-full md:text-center lg:text-6xl leading-[3rem]">HungFeet On You</h1>
      <h4 className="text-white mt-4 text-xl w-1/2 md:w-full md:text-center lg:text-2xl">Denim made by us. loved by you</h4>
      <div className="mt-8 space-y-4 md:space-y-0 md:flex md:space-x-4">
        <button className="bg-white block px-16 py-[0.4rem] rounded-lg">Shop Denim</button>
        <button className="bg-white block px-16 py-[0.4rem] rounded-lg">Find your fit</button>
      </div>
      <h6 className="-bottom-16 text-gray-700 max-w-max left-0 right-0 mx-auto md:text-white absolute md:bottom-8 md:right-auto md:left-12 md:block">
        Sign Up for 10% off your first order*
      </h6>
    </div>
  );
};

export default Hero;
