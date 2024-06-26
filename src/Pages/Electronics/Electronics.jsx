import React, { useContext } from "react";
import { ProductContext } from "../../Context/Productcontext";
import Navbar from "../../Components/Navbar/Navbar";
import ProductList from "../../Components/Productlist/ProductList";

const Electronics = () => {
  const { productData } = useContext(ProductContext);

  const electronicsCategory = productData.find(
    ({ cat_name }) => cat_name === "Electronics"
  );

  return (
    <>
      <Navbar />
      <ProductList categoryData={electronicsCategory} />
    </>
  );
};

export default Electronics;
