import "./SingIn.css";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";

import { useForm, SubmitHandler } from "react-hook-form";
import { UserCredential, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Firebase/Firebase";
function SingIn(): JSX.Element {
  type inputs = {
    email: string;
    password: string;
  };
  let navigate: NavigateFunction = useNavigate();
  let singInFirebase = async (email: string, password: string) => {
    try {
      let user: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/");
    } catch (error) {
      throw error;
    }
  };
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<inputs>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<inputs> = (data: inputs) => {
    singInFirebase(data.email, data.password);
  };
  return (
    <div className="sing-in-container">
      <div className="sing-in-text">Sign in to Shopcart</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sing-in-form-container"
      >
        <div className="sing-in-email-container">
          <div className="sing-in-email-text">Email</div>
          <input
            type="email"
            className="sing-in-email"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "please write valid email",
              },
            })}
          ></input>
        </div>
        <div className="sing-in-forgot">
          <Link to={"/"}>Forgot</Link>
        </div>
        <div className="sing-in-password-container">
          <div className="sing-in-password-text">Password</div>
          <input
            type="password"
            className="sing-in-password"
            placeholder="Password"
            {...register("password", {
              required: "",

              minLength: {
                value: 8,
                message: "Password must contain minimum 8 letters",
              },
              maxLength: {
                value: 50,
                message: "Password must contain maximum 50 letters",
              },
            })}
          ></input>
          <div style={{ color: "red" }}>{errors.password?.message}</div>
        </div>
        <button className="sing-in-button">Sing in</button>

        <div className="sing-in-dont-have-account">
          Don't have an account? <Link to={"/singup"}> Sign up </Link>
        </div>
      </form>
    </div>
  );
}

export default SingIn;
