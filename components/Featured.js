import React from "react";

const Featured = () => {
  const FEATURED_IMG = [
    { id: 1, user: "elaine" },
    { id: 2, user: "elaine" },
    { id: 3, user: "elaine" },
    { id: 4, user: "elaine" },
    { id: 5, user: "elaine" },
    { id: 6, user: "elaine" },
    { id: 7, user: "elaine" },
    { id: 8, user: "elaine" },
    { id: 9, user: "elaine" },
    { id: 10, user: "elaine" },
    { id: 11, user: "elaine" },
    { id: 12, user: "elaine" },
    { id: 13, user: "elaine" },
    { id: 14, user: "elaine" },
    { id: 15, user: "elaine" },
    { id: 16, user: "elaine" },
  ];
  return (
    <div className="bg-gray-100 mt-10 pt-20 pb-12 ">
      <div className="text-center text-2xl flex flex-col items-center space-y-5">
        <h1 className="text-3xl">Hung Feet on You</h1>
        <p className="text-sm text-gray-500 w-3/4">Share your latest looks with #HungFeetOnYou for a chance to be featured</p>
      </div>
      <div className="flex space-x-2 overflow-x-scroll overflow-y-hidden scrollbar-hide pr-48 mt-10">
        {FEATURED_IMG.map((img) => (
          <div key={img.id} className="bg-yellow-300">
            <div className="w-40 h-40"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
