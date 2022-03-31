import React from "react";

const Bestsellers = () => {
  const CATEGORIES = [
    { id: 1, img: "", title: "The Way-High Drape Pant", color: "Ash Brown", price: "$ 9300" },
    { id: 2, img: "", title: "The Orange Cotton Waffle Henley", color: "Burnt Orange", price: "$ 3940" },
    { id: 3, img: "", title: "The Way-High Jean", color: "Indigo Rinse", price: "$ 7720" },
    { id: 4, img: "", title: "The Pima Micro-Rib Funnel-Neck Tank", color: "Heather Grey", price: "$ 3150" },
    { id: 5, img: "", title: "The Italian Leather Day Glove", color: "Caramel", price: "$ 9060" },
  ];
  return (
    <div className="lg:container lg:mx-auto mt-24">
      <h1 className="text-center text-2xl">This Month's Best Sellers</h1>
      <div className="mt-10 flex gap-x-3 overflow-x-scroll overflow-y-hidden scrollbar-hide px-2 lg:grid lg:grid-cols-5 lg:px-10 lg:gap-x-10">
        {CATEGORIES.map((category) => (
          <div className="" key={category.id}>
            <div className="bg-violet-300 h-[22em] w-60 lg:w-full lg:h-56 xl:h-72"></div>
            <div className="flex space-x-3 items-start justify-between mt-2">
              <h1 className="text-sm text-gray-600">{category.title}</h1>
              <h1 className="text-sm text-gray-600 whitespace-nowrap">{category.price}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="flex space-x-4 px-2 mt-8 lg:hidden">
        {CATEGORIES.map((category) => (
          <div key={category.id} className="w-[0.5rem] h-[0.5rem] bg-gray-400 rounded-full"></div>
        ))}
      </div>
    </div>
  );
};

export default Bestsellers;
