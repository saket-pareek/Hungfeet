import React from "react";
import { useEffect } from "react";

const Categories = () => {
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "0cca2c5d6fmsh4c810ec76643e0cp1cf555jsnf6b32c9ba14e",
      },
    };

    fetch("https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail?lang=en&productcode=0839915011&country=asia", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);

  const CATEGORIES = [{}];
  return <h1>Categories</h1>;
};

export default Categories;
