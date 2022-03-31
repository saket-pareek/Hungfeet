import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Categories = () => {
  const CATEGORIES = [
    { id: 1, img: "", heading: "women's", title: "New Arrivals" },
    { id: 2, img: "", heading: "women's", title: "Denim" },
    { id: 3, img: "", heading: "women's", title: "Shoes" },
    { id: 4, img: "", heading: "women's", title: "Bottoms" },
    { id: 5, img: "", heading: "men's", title: "Sweaters" },
  ];
  return (
    <div className="lg:container lg:mx-auto">
      <div className="mt-24 flex gap-x-5 overflow-x-scroll overflow-y-hidden scrollbar-hide px-5 lg:grid lg:grid-cols-5 lg:px-10 lg:gap-x-10">
        {CATEGORIES.map((category) => (
          <div className="" key={category.id}>
            <div className="bg-green-300 h-64 w-64 lg:w-full lg:h-56 xl:h-72"></div>
            <h3 className="uppercase text-gray-500 tracking-widest mt-3 text-xs">{category.heading}</h3>
            <div className="flex space-x-3 items-center mt-2">
              <h1 className="text-xl">{category.title}</h1>
              <BsArrowRightShort size={32} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex space-x-4 px-8 mt-8 lg:hidden">
        {CATEGORIES.map((category) => (
          <div key={category.id} className="w-[0.5rem] h-[0.5rem] bg-gray-400 rounded-full"></div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
