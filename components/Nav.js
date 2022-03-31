import React from "react";
import { BsSearch, BsCart, BsPerson } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";

const Nav1 = () => {
  return (
    <div className="relative flex justify-between px-5 py-4 lg:py-0 lg:px-12 border-b border-gray-200">
      <div className="absolute max-w-max max-h-min right-0 left-0 top-0 bottom-0 mx-auto my-auto font-bold tracking-widest text-xl">HUNGFEET</div>
      <HiMenu size={25} className="lg:hidden" />
      <div className="hidden lg:flex">
        <div className="px-4 py-6 border-b border-black">Women</div>
        <div className="px-4 py-6">Men</div>
        <div className="px-4 py-6">About</div>
      </div>
      <div className="flex space-x-4 lg:space-x-8 items-center">
        <BsSearch size={20} />
        <BsPerson size={22} className="hidden lg:block" />
        <BsCart size={20} />
      </div>
    </div>
  );
};

const Nav2 = () => {
  const LINKS = [
    "New Arrivals",
    "Best Sellers",
    "Featured",
    "Tops",
    "Denim",
    "Pants & Bottoms",
    "Dresses & Jumpsuits",
    "Outwear",
    "Basics",
    "Shoes & Bags",
    "Sale",
    "Shop All",
  ];
  return (
    <div className="flex justify-center">
      <ul className="hidden lg:flex py-5 space-x-5 xl:space-x-8 px-5 whitespace-nowrap">
        {LINKS.map((link) => {
          if (link === "Sale") {
            return (
              <li key={link} className="text-sm xl:text-[0.95rem] text-red-600">
                {link}
              </li>
            );
          } else {
            return (
              <li key={link} className="text-sm xl:text-[0.95rem]">
                {link}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

const Nav = () => {
  return (
    <>
      <Nav1 />
      <Nav2 />
    </>
  );
};

export default Nav;
