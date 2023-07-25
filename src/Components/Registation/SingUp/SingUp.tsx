import Input from "@mui/joy/Input";
import { Link } from "react-router-dom";
function SingUp() {
  return (
    <div className="sing-up-container">
      <div className="sing-up-text">Sing up to Shopcart </div>

      <div className="sing-up-name-field-container">
        <Input
          color="primary"
          disabled={false}
          placeholder="Name"
          size="sm"
          variant="plain"
        />
      </div>
      <div className="sing-up-surname-field-container">
        <Input
          color="primary"
          disabled={false}
          placeholder="Name"
          size="sm"
          variant="plain"
        />
      </div>
      <div className="sing-up-email-field-container">
        <Input
          color="primary"
          disabled={false}
          placeholder="Name"
          size="sm"
          variant="plain"
        />
      </div>
      <div className="sing-up-password-container">
        <div></div>
        <Input
          color="primary"
          disabled={false}
          placeholder="6+ characters"
          size="sm"
          variant="plain"
        />
      </div>
      <div className="sing-up-google-registration-container"></div>
      <div className="sing-up-agree-container"></div>
      <div className="sing-up-create-account-button"></div>

      <div className="sing-up-sing-in-text">
        Already have an account? <Link to="/singin">Sing in </Link>
      </div>
    </div>
  );
}

export default SingUp;
