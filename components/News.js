import React from "react";
import { BsDashLg } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";

const News = () => {
  const ITEMS = [
    {
      id: 1,
      img: "",
      text: "From recycled materials to organic cotton, our Environmental imapct page has the latest on what we're doing to reduce the impact.",
    },
    {
      id: 2,
      img: "",
      text: "Ethically Made. Designed to Last.",
    },
  ];
  return (
    <div className="mt-20 px-5">
      <h1 className="text-3xl text-center">
        Our Promise
        <BsDashLg className="inline-block ml-3" />
        <br />
        Radical Transparency
      </h1>
      <div className="mt-20 space-y-20">
        {ITEMS.map((item) => (
          <div className="flex space-x-2">
            <div className="img bg-blue-300 w-1/2"></div>
            <div className="w-1/2 h-32">
              <p className="text-xs text-gray-600">{item.text}</p>
              <button className="text-gray-400 flex space-x-2 items-center mt-4">
                <h6>Learn More</h6>
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
