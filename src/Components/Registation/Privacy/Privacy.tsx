import "./Privacy.css";
function Privacy() {
  return (
    <div className="privacy-container">
      <div className="privacy-header-container">
        <div className="privacy-text">Privacy Policy</div>
        <div className="privacy-policy-text">
          Learn more about how Shopcart collects and uses data <br />
          and your rights as a shopcart user.
        </div>

        <img
          className="privacy-img"
          src="https://cdn.dribbble.com/assets/art-banners/no-lock-in-658bbd6fa97b770c6a494e4febec74935fce45ec0c7c4845052bf4197aa512b7.png"
        ></img>
      </div>
      <div className="privacy-items-container">
        <div className="privacy-updated">Updated at July 3,2023</div>
        <hr className="privacy-hr" />
        <div className="privacy-welcome">
          Welcome to ShopCart! We are committed to protecting your privacy and
          ensuring the security of your personal information. This Privacy
          Policy explains how we <br /> collect, use, disclose, and safeguard
          your data when you access or use our website and services. By using
          ShopCart, you consent to the practices described in this
          <br /> Privacy Policy. If you do not agree with this policy, please
          refrain from accessing or using our services.
        </div>
        <div className="privacy-information-header">Information We Collect</div>

        <div className="privacy-first">
          1. Personal Information: When you create an account or place an order,
          we collect personal information such as your name, email address,
          shipping address, billing
          <br /> details, and contact information. This data is necessary for
          order processing, delivery, and customer support.
        </div>
        <br />
        <div className="privacy-second">
          2. Payment Information: When you make a purchase, we collect payment
          information, including credit/debit card details or other payment
          methods. Please note that we <br />
          do not store full payment card information on our servers. All payment
          transactions are securely processed through third-party payment
          processors.
        </div>
        <br />
        <div className="privacy-third">
          3. Device and Log Information: We automatically collect information
          about your device, web browser, IP address, and activity on our
          website. This data helps us
          <br /> understand how you interact with ShopCart, analyze trends, and
          improve our services.
        </div>
        <br />
        <div className="privacy-fourth">
          4. Cookies and Similar Technologies: ShopCart uses cookies and similar
          technologies to enhance user experience, analyze site usage, and
          personalize content. Cookies <br />
          may store information about your preferences and browsing behavior.
          You can control cookie settings through your web browser.
        </div>
        <div className="privacy-using-info-container">
          <div className="privacy-using-header">
            How We Use Your Information
          </div>
          <div className="privacy-using-info-item">
            1. Order Processing: We use your personal information to process and
            fulfill your orders, provide order updates, and arrange delivery.
          </div>
          <div className="privacy-using-info-item">
            {" "}
            2. Customer Support: Your contact information helps us respond to
            your inquiries, requests, and provide support when needed.
          </div>
          <div className="privacy-using-info-item">
            {" "}
            3. Improvement and Personalization: We analyze data to enhance our
            website's functionality, content, and user experience. Personalized
            recommendations and offers may <br />
            be provided based on your browsing and purchase history.
          </div>
          <div className="privacy-using-info-item">
            {" "}
            4. Marketing and Promotional Communications: If you opt-in, we may
            send you marketing communications, offers, and promotions via email.
            You can unsubscribe at
            <br /> any time.
          </div>
        </div>
        <div className="privacy-data-security-container">
          <div className="privacy-data-security-header">Data Security</div>
          <div className="privacy-security">
            We take data security seriously and implement appropriate technical
            and organizational measures to protect your personal information
            from unauthorized access, alteration,
            <br /> disclosure, or destruction. We use encryption, secure socket
            layer technology (SSL), and comply with industry standards to
            safeguard your data during transmission.
          </div>
        </div>
        <div className="privacy-children-container">
          <div className="privacy-children-header">Children's Privacy</div>
          <div className="privacy-children-text">
            ShopCart is not intended for children under 13. We do not knowingly
            collect personal information from children. If you are a parent or
            guardian and believe your child has <br /> provided personal
            information, please contact us, and we will take appropriate steps
            to remove the data.
          </div>
        </div>
      </div>
      <div className="privacy-changes-container">
        <div className="privacy-changes-header">Changes to Privacy Policy</div>
        <div className="privacy-changes-text">
          We may update this Privacy Policy periodically to reflect changes in
          our data practices or applicable laws. We will post any revised
          version on our website, and the revised <br />
          policy will be effective from the date of publication.
        </div>
      </div>
      <div className="privacy-contact-us">
        <div className="privacy-contact-header">Contact Us</div>{" "}
        <div className="privacy-contact-text">
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or your personal information, please contact us at{" "}
          <a href="mailto:shopcart@gmail.com">shopcart@gmail.com</a>.{" "}
        </div>
      </div>
    </div>
  );
}

export default Privacy;
