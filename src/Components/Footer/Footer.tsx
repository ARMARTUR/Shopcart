import "./Footer.css";
import { useAppSelector } from "../../Redux/Hook";

function Footer() {
  let categories = useAppSelector((state) => state.categories.categories);
  console.log(categories);
  return (
    <>
      <footer className="footer-container">
        <div className="footer-info-container">
          <div className="footer-logo">
            <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"></img>
          </div>
          <div className="footer-slogan">
            Embrace the Power of Choice: Connect, Discover, and Shop to <br />
            Your Heart's Content at Our Dynamic Marketplace. Unlock a World of
            <br />
            Convenience, Quality, and Endless Possibilities
          </div>
          <div className="footer-accepted-payments-text">Accepted Payments</div>
          <div className="footer-accepted-payments-container">
            <div className="footer-accepted-payments-item  ">
              <img
                className="footer-accepted-payments-image stripe"
                src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8816711ebecac46d8_stripe.png"
              ></img>
            </div>
            <div className="footer-accepted-payments-item">
              <img
                className="footer-accepted-payments-image  visa"
                src=" https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce82d440b7ab84a993f_visa.png"
              ></img>
            </div>
            <div className="footer-accepted-payments-item  ">
              <img
                className="footer-accepted-payments-image mastercard"
                src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8f032504012a5896b_Mastercard.png"
              ></img>
            </div>
            <div className="footer-accepted-payments-item  ">
              <img
                className="footer-accepted-payments-image amazon"
                src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e48b497e6ce846b7ff_Amazon.png"
              ></img>
            </div>
            <div className="footer-accepted-payments-item   ">
              <img
                className="footer-accepted-payments-image klarna"
                src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1f054e419e42aca4a9a2_Klarna.png"
              ></img>
            </div>
            <div className="footer-accepted-payments-item   ">
              <img
                className="footer-accepted-payments-image paypal"
                src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce7c4510cf9a55828a0_PayPal.png"
              ></img>
            </div>
            <div className="footer-accepted-payments-item ">
              <img
                className="footer-accepted-payments-image applepay"
                src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4707380264b25e680_ApplePay.png"
              ></img>
            </div>
            <div className="footer-accepted-payments-item  ">
              <img
                className="footer-accepted-payments-image googlepay"
                src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1f55dc68c5ee83d0cbf8_GooglePay.png"
              ></img>
            </div>
          </div>
        </div>

        <div className="footer-categories-container">
          <div className="footer-categories-text">Department</div>
          <div className="footer-categories-items-container">
            {categories.slice(0, 14).map((category: string) => {
              return (
                <div className="footer-categories-item">
                  {category.slice(0, 1).toUpperCase() +
                    category.slice(1, category.length)}
                </div>
              );
            })}
          </div>
        </div>

        <div className="footer-about-us-container">
          <div className="footer-about-us-text">About Us</div>
          <div className="footer-about-us-items-container">
            <div className="footer-about-us-item   ">About Shopcart</div>
            <div className="footer-about-us-item   ">Careers</div>
            <div className="footer-about-us-item   ">Neews and Blogs</div>
            <div className="footer-about-us-item   ">Help</div>
            <div className="footer-about-us-item   ">Press Center</div>
            <div className="footer-about-us-item   ">Shop By Location</div>
            <div className="footer-about-us-item   ">Shopcart Brands</div>
            <div className="footer-about-us-item   ">Affiliate & Partners</div>
            <div className="footer-about-us-item   ">Ideas & Guides</div>
          </div>
        </div>
        <div className="footer-services-container">
          <div className="footer-services-text">Services </div>
          <div className="footer-services-items-container">
            <div className="footer-services-item">Gift Card</div>
            <div className="footer-services-item">Mobile App</div>
            <div className="footer-services-item">Shopping & Delivry</div>
            <div className="footer-services-item"> Order Pickup</div>
            <div className="footer-services-item">Account Signup </div>
          </div>
        </div>
        <div className="footer-help-container">
          <div className="footer-help-text">Help</div>
          <div className="footer-help-items-container">
            <div className="footer-help-item">ShopCart Help</div>
            <div className="footer-help-item">Returns</div>
            <div className="footer-help-item">Track Orders </div>
            <div className="footer-help-item">Contact Us</div>
            <div className="footer-help-item">Feedback </div>
            <div className="footer-help-item"> Security & Fraud</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
