import React, { useContext } from "react";
import { CartContext } from "../../Context/Cartcontext";
import { useNavigate } from "react-router-dom";

const ProductList = ({ categoryData }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="products">
      {categoryData.items.map(({ cat_name, products }) => (
        <div key={cat_name} className="products-category">
          <h2>{cat_name}</h2>
          <div className="products-grid">
            {products.map(
              ({ id, productName, catImg, price, oldPrice, discount }) => (
                <div
                  key={id}
                  className="product"
                  onClick={() => handleProductClick(id)}
                >
                  <h4>{productName}</h4>
                  <img
                    src={catImg}
                    alt={productName}
                    className="product-image"
                  />
                  <p>
                    Price: ₹{price} (Old Price: ₹{oldPrice})
                  </p>
                  <p>Discount: {discount}%</p>
                  <div className="button">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart({ id, productName, price, catImg });
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
