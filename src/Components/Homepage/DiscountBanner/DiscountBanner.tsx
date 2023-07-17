import React from 'react'
import "./DiscountBanner.css"
function DiscountBanner():JSX.Element {
  return (
    <div className="discount-banner-container">
      <div className='discount-banner-text-container'>
        <div className="discount-banner-cashback-text">Get 5% Cash Back</div>
        <div className="discount-banner-on-shopcart">On ShopCart.com</div>
        <div className="discount-banner-learn-more">Learn More</div>
      </div>
      <div className="discount-bannner-images">
        <div className="discount-banner-first-card-image">
          {" "}
          <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e768e3260571e48a0c_visa%20card-min.png"></img>
        </div>
        <div className="discount-banner-second-card-image">
          <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad08ebe75690_visa%20card%2002-min.png"></img>
        </div>
        <div className="discount-banner-third-card-image">
          <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea1a963f08a8c3dcd7c945_visa%20card%2003.svg"></img>
        </div>
      </div>
    </div>
  );
}

export default DiscountBanner