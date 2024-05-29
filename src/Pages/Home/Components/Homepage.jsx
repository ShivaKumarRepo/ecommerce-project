import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Homepage.css";

const Homepage = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("./product.json");
      const jsonData = response.data.productData;
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="homepage">
        <div className="heading">
          <h1>Cart Categories</h1>
        </div>
        <div className="cartitems">
          {data.map((item) => (
            <div key={item.id} className="cartitem">
              <h2>{item.cat_name}</h2>
              <img src={item.image} className="product-image" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
