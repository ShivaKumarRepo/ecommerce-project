import React, { useContext } from "react";
import { ProductContext } from "../../Context/Productcontext";
import Navbar from "../../Components/Navbar/Navbar";
import ProductList from "../../Components/Productlist/ProductList";

const Fashion = () => {
  const { productData } = useContext(ProductContext);

  const fashionData = productData.find(
    ({ cat_name }) => cat_name === "Fashion"
  );

  return (
    <>
      <Navbar />
      <ProductList categoryData={fashionData} />
    </>
  );
};

export default Fashion;
