import "./Terms.css";
import { v4 as uuidv4 } from "uuid";

function TermsOfService() {
  return (
    <div className="terms-container">
      <div className="terms-banner-container">
        <div className="terms-of-service-text">Terms of Service</div>
        <div className="terms-read">
          Read our terms below to learn more about your rights
          <br /> and responsibilities as a Shopcart user.
        </div>

        <img
          className="terms-img"
          src="https://cdn.dribbble.com/assets/art-banners/hangtime-2018-a325944850c345a855a9da2bc81f0ace4c54b8f271d0b7b78125dd9f3adf31b2.png"
        ></img>
      </div>
      <div className="terms-updated-at">Updated May 16, 2023 </div>
      <hr className="hr-terms" />

      <div className="terms-welcome">
        Welcome to ShopCart, an online marketplace that connects buyers and
        sellers from around the world. By accessing or using our platform, you
        <br /> agree to be bound by the following Terms of Service. Please read
        them carefully before using our services.
      </div>
      <div className="terms-acceptance">
        1. Acceptance of Terms By using ShopCart or accessing any of its
        features, you agree to abide by these Terms of Service and our Privacy
        Policy. If you do
        <br /> not agree with any of the terms, you may not use our platform.
      </div>
      <div className="terms-user">
        2. User Accounts <br />
        2.1. To use certain features of ShopCart, you may need to create a user
        account. You are responsible for maintaining the confidentiality of your
        account
        <br /> information, including your username and password. Any activities
        that occur under your account are your responsibility.
        <br /> 2.2. You must be at least 18 years old or the age of majority in
        your country to create an account.
      </div>
      <div className="terms-selling">
        3. Listing and Selling
        <br /> 3.1. As a seller on ShopCart, you are responsible for the
        accuracy of your product listings, including descriptions, prices, and
        images. <br />
        3.2. You agree not to list prohibited items, including but not limited
        to illegal or counterfeit products, weapons, drugs, and items that
        infringe on intellectual
        <br /> property rights.
        <br /> 3.3. ShopCart reserves the right to remove or suspend any
        listings that violate our policies.
        <br /> 3.4. You agree to fulfill your obligations to buyers in a timely
        and professional manner and comply with all applicable laws and
        regulations.
      </div>
      <div className="terms-buying">
        4. Buying
        <br /> 4.1. As a buyer on ShopCart, you agree to provide accurate
        information for your purchases. <br />
        4.2. You are responsible for reading and understanding the product
        descriptions, terms, and policies before making a purchase. <br />
        4.3. In the event of any dispute with a seller, you agree to work
        towards an amicable resolution in good faith..
      </div>
      <div className="terms-payment">
        5. Payment <br />
        5.1. ShopCart uses secure payment gateways for transactions. You agree
        to provide accurate payment information and authorize us to charge the
        applicable
        <br /> fees to your chosen payment method.
        <br /> 5.2. You are responsible for any additional fees, such as taxes
        and customs duties, associated with your purchases.
      </div>
      <div className="terms-intelectual">
        6. Intellectual Property <br />
        6.1. ShopCart and its content, including logos, trademarks, and other
        intellectual property, are owned by or licensed to ShopCart. You agree
        not to use,
        <br /> reproduce, or distribute any part of our platform without our
        explicit consent.
      </div>
      <div className="terms-prohibited">
        7. Prohibited Activities <br />
        7.1. You agree not to engage in any activities that violate applicable
        laws or our Terms of Service, including but not limited to fraud,
        hacking, spamming, or <br />
        any actions that could harm our platform or users.
        <br />
        7.2. You must not interfere with the proper functioning of ShopCart or
        compromise its security.
      </div>
      <div className="terms-termination">
        8. Termination <br />
        8.1. ShopCart reserves the right to suspend or terminate any user
        account at its sole discretion, without prior notice, if it believes
        that a user has violated
        <br /> our Terms of Service or any applicable laws.
      </div>
      <div className="terms-disclaimer">
        9. Disclaimer of Warranties <br />
        9.1. ShopCart provides its services on an "as is" and "as available"
        basis. We do not make any warranties regarding the accuracy,
        reliability, or <br />
        availability of our platform or its content.
      </div>
      <div className="terms-limitation">
        10. Limitation of Liability <br />
        10.1. In no event shall ShopCart or its affiliates be liable for any
        direct, indirect, incidental, special, or consequential damages arising
        from the use or inability <br />
        to use our platform or any products sold through it.
      </div>
      <div className="terms-changes">
        11. Changes to Terms of Service <br />
        11.1. ShopCart may update these Terms of Service from time to time. We
        will notify users of any significant changes, and the updated terms will
        be effective
        <br /> upon posting.
      </div>
      <div className="terms-govering">
        12. Governing Law <br />
        12.1. These Terms of Service shall be governed by and construed in
        accordance with the laws of [Your Country/State], without regard to its
        conflicts of laws principles.
      </div>
      <div className="terms-contacts">
        Thank you for using ShopCart! If you have any questions or concerns
        regarding our Terms of Service, please contact us at [Contact
        Email/Support].
        <a href="mailto:shopcart@gmail.com">shopcart@gmail.com</a>.
      </div>
    </div>
  );
}

export default TermsOfService;
