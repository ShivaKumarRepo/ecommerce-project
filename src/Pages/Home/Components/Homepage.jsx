import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../../Context/Productcontext";
import "./Homepage.css";

const Homepage = () => {
  const { productData } = useContext(ProductContext);

  return (
    <div className="homepage">
      <div className="heading">
        <h1>Product Categories</h1>
      </div>
      <div className="cartitems">
        {productData.map((item) => (
          <div key={item.id} className="cartitem">
            <h2>{item.cat_name}</h2>
            <Link to={`/${item.cat_name}`}>
              <img
                src={item.image}
                className="product-image"
                alt={item.cat_name}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
