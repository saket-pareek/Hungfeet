import React from "react";

const Showcase = () => {
  const ITEMS = [
    { id: 1, img: "", title: "Spring Tops", subtitle: "New spring colors in modern silhouttes. Organic cotton. $6300." },
    { id: 1, img: "", title: "The Box-Cut Tee", subtitle: "It's an icon. Starting at $2360." },
    { id: 1, img: "", title: "Looking for Men's?", subtitle: "Trust us, you're going to love these. Meet our bestselling favourites." },
  ];
  const Card = () => {
    return (
      <div className="px-5 space-y-10">
        {ITEMS.map((item) => {
          return (
            <div className="space-y-4">
              <div className="bg-green-300 h-96 w-full"></div>
              <h1 className="text-center text-2xl">{item.title}</h1>
              <p className="text-center text-[.95rem] text-gray-500">{item.subtitle}</p>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="mt-16">
      <Card />
    </div>
  );
};

export default Showcase;
