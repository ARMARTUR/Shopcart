import { useParams } from "react-router-dom";
import "./Notification.css";

function Notification() {
  let params = useParams();
  console.log(params);
  return (
    <div className="notification-container">
      <div className="notification-setting-header">Notification Settings</div>
      <div className="notification-order-container">
        <div className="notification-header">1. Order Updates</div>
        <ul className="notification-schedule">
          <li>
            Order Confirmations: Receive notifications when your order is
            successfully placed.
          </li>
          <li>
            Order Status Updates: Get real-time updates on your order status,
            such as processing, shipped, or delivered.
          </li>
          <li>
            Order Delays: Receive alerts if there are any delays in processing
            or delivering your order.
          </li>
        </ul>
      </div>
      <div className="notification-promotions-container">
        <div className="notification-header">2. Promotions and Deals</div>
        <ul className="notification-schedule">
          <li>
            Exclusive Offers: Stay informed about special discounts, promotions,
            and exclusive deals.
          </li>
          <li>
            Flash Sales: Get notified about time-limited offers and flash sales
            on selected products.
          </li>
        </ul>
      </div>
      <div className="notification-activity-container">
        <div className="notification-header">3. Account Activity</div>
        <ul className="notification-schedule">
          <li>
            {" "}
            Account Sign-In: Receive notifications when your account is accessed
            from a new device or location.
          </li>
          <li>
            {" "}
            Password Changes: Get alerted when changes are made to your account
            password.
          </li>
        </ul>
      </div>
      <div className="notification">
        <div className="notification-header">4. Product Updates</div>
        <ul className="notification-schedule">
          <li>
            Wishlist Alerts: Be informed when items on your wishlist are back in
            stock or have a price drop.
          </li>
          <li>
            Product Reviews: Receive alerts for product reviews and ratings on
            items you've purchased or shown interest in.
          </li>
        </ul>
      </div>
      <div className="notification-seller">
        <div className="notification-header">5. Seller Communications:</div>
        <ul className="notification-schedule">
          <li>
            {" "}
            Seller Messages: Get notified of important messages from sellers
            regarding your orders.
          </li>
        </ul>
      </div>
      <div className="notification-sop-updates-container">
        <div className="notification-header">6. ShopCart Updates </div>
        <ul className="notification-schedule">
          <li>
            {" "}
            Platform News: Stay up-to-date with important announcements and
            updates from ShopCart.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Notification;
