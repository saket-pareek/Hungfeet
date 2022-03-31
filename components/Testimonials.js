import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

const Testimonials = () => {
  const ITEMS = [
    {
      id: "1",
      img: "",
      heading: `"Love this sweater. It's somehow both basic and elegant AND super cozy."`,
      username: "Jennifer L., The Oversized Alpaca Crew",
    },
    {
      id: "2",
      img: "",
      heading: `"These jeans hug my curves in all the right places. Great jean for all seasons."`,
      username: "Amelia W., The Original Cheeky Jean",
    },
    {
      id: "3",
      img: "",
      heading: `"I have never loved a shirt as much as this one! I've worn it with jeans and trousers, and both look great."`,
      username: "Rylee H., The Original Cotton Box-Cut Tee",
    },
  ];
  return (
    <div className="bg-[#f5a6231c] py-20 mt-16 px-5">
      <div className="heading uppercase">From the people</div>
      <div className="icon flex space-x-2 mt-5">
        <BsStarFill size={15} />
        <BsStarFill size={15} />
        <BsStarFill size={15} />
        <BsStarFill size={15} />
        <BsStarHalf size={15} />
      </div>
      <div className="wrapper mt-12 flex overflow-x-scroll gap-x-5 scrollbar-hide">
        {ITEMS.map((item) => {
          return (
            <div className="item-wrapper">
              <div className="w-60 h-60 bg-violet-300"></div>
              <div className="mt-10">
                <h1>{item.heading}</h1>
              </div>
              <div className="mt-5 text-gray-500">
                <AiOutlineMinus className="inline-block" />
                <span> {item.username}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
