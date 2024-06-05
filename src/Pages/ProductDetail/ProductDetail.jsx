import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../Context/Productcontext";
import { CartContext } from "../../Context/Cartcontext";
import Navbar from "../../Components/Navbar/Navbar";

const ProductDetail = () => {
  const { id } = useParams();
  const { productData, productReviews } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const productId = parseInt(id);

  const product = productData
    .flatMap((category) => category.items)
    .flatMap((item) => item.products)
    .find((product) => product.id === productId);

  const reviews = productReviews.filter(
    (review) => parseInt(review.productId) === productId
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  const {
    productName,
    catImg,
    price,
    oldPrice,
    discount,
    brand,
    rating,
    weight,
    RAM,
    SIZE,
    description,
  } = product;

  return (
    <>
      <Navbar />
      <div className="product-detail">
        <div className="product-info">
          <img src={catImg} alt={productName} className="product-image" />
          <div className="buttons">
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>

        <div className="details">
          <h2>{productName}</h2>
          <p>
            Price: ₹{price} (Old Price: ₹{oldPrice})
          </p>
          <p>Discount: {discount}%</p>
          <p>Brand: {brand}</p>
          <p>Rating: {rating}</p>

          {weight && (
            <div className="options">
              <p>Weight:</p>
              <div className="cards">
                {weight.map((w, index) => (
                  <div className="card" key={index}>
                    <h5>{w}g</h5>
                  </div>
                ))}
              </div>
            </div>
          )}
          {RAM && (
            <div className="options">
              <p>RAM:</p>
              <div className="cards">
                {RAM.map((ram, index) => (
                  <div className="card" key={index}>
                    <h5>{ram}GB</h5>
                  </div>
                ))}
              </div>
            </div>
          )}
          {SIZE && (
            <div className="options">
              <p>SIZE:</p>
              <div className="cards">
                {SIZE.map((size, index) => (
                  <div className="card" key={index}>
                    <h5>{size}</h5>
                  </div>
                ))}
              </div>
            </div>
          )}
          <p>Description: {description}</p>
          <div className="reviews">
            <h3>Ratings & Reviews</h3>
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review.id} className="review">
                  <h4>{review.userName}</h4>
                  <p>Rating: {review.rating}</p>
                  <p>{review.review}</p>
                </div>
              ))
            ) : (
              <p>No reviews</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
