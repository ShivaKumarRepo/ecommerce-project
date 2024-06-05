import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductDataProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [productReviews, setProductReviews] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("./product.json");
      const jsonData = response.data;
      setProductData(jsonData.productData);
      setProductReviews(jsonData.productReviews);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ productData, productReviews }}>
      {children}
    </ProductContext.Provider>
  );
};
