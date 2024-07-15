import React from "react";
import FeaturedCards from "./FeaturedCards";
import "../Styles/ProductInfo.css"

const ProductInfo = () => {
  return (
    <div className="product-info-container">
      <div className="section-container section-container-mobile">
        <div className="section-img">
          <img
            src="/tshirtmodel.jpeg"
            alt=""
            className="product-info-img"
          />
        </div>
        <div className="section-text">
          <h2 className="info-title">
            Platinum styles for Platinum people
          </h2>
          <p className="info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="section-container">
        <div className="section-text">
          <h2 className="info-title">
            Platinum standard materials
          </h2>
          <p className="info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="section-img">
          <img src="/shirttag.jpeg" alt="" className="product-info-img" />
        </div>
      </div>
      <div className="section-container featured">
        <h2 className="info-title">Featured Products</h2>
      </div>
      <FeaturedCards />
    </div>
  );
};

export default ProductInfo;
