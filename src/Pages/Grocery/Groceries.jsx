import React, { useContext } from "react";
import { ProductContext } from "../../Context/Productcontext";
import Navbar from "../../Components/Navbar/Navbar";
import ProductList from "../../Components/Productlist/ProductList";

const Groceries = () => {
  const { productData } = useContext(ProductContext);

  const groceryData = productData.find(
    ({ cat_name }) => cat_name === "Groceries"
  );

  return (
    <>
      <Navbar />
      <ProductList categoryData={groceryData} />
    </>
  );
};

export default Groceries;
