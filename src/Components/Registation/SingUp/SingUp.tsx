import { Link, NavigateFunction } from "react-router-dom";
import "./SingUp.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import {
  Auth,
  UserCredential,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import firebase from "firebase/app";
import { auth } from "../../../Firebase/Firebase";
import { db } from "../../../Firebase/Firebase";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useAppDispatch } from "../../../Redux/Hook";
type inputs = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function SingUp() {
  let navigate: NavigateFunction = useNavigate();
  let dispatch = useAppDispatch();
  let [agree, setAgree] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setError,
  } = useForm<inputs>({
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<inputs> = (data: inputs) => {
    if (!/(?=.*[A-Za-z])/.test(watch("password"))) {
      setError("password", {
        message: "Password must contain at least one letter",
      });
    } else if (!/(?=.*\d)/.test(watch("password"))) {
      setError("password", {
        message: "Password must contain at least one number",
      });
    } else if (agree === true) {
      createAccount(data.name, data.surname, data.email, data.password);
    }
  };
  async function createAccount(
    name: string,
    surname: string,
    email: string,
    password: string
  ) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        const usersRef = doc(db, "Users", `${user.uid}`);
        setDoc(
          usersRef,
          { name: name, surname: surname, email: email, password: password },
          { merge: true }
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    navigate("/");
  }

  return (
    <div className="sing-up-container">
      <div className="sing-up-text">Sing up to Shopcart </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sing-up-form-container"
      >
        <div className="sing-up-name-field-container">
          <div className="sing-up-name-text">Name</div>
          <input
            placeholder="Name"
            {...register("name", {
              required: "",
            })}
            className="sing-up-name"
          />
        </div>
        {errors?.name && <div>{errors.name.message}</div>}
        <div className="sing-up-surname-field-container">
          <div className="sing-up-surname-text">Surname</div>
          <input
            placeholder="Surname"
            {...register("surname", {
              required: "Surnmame must contain a one uppercase letter",
            })}
            className="sing-up-surname"
          />
        </div>
        <div className="sing-up-email-field-container">
          <div className="sing-up-email-text">Email</div>
          <input
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "please write valid email",
              },
            })}
            className="sing-up-email"
          />
        </div>
        <div className="sing-up-password-container">
          <div className="sing-up-password-text">Password</div>
          <input
            type="password"
            placeholder="8+ characters"
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
            className="sing-up-password"
          />
          <div style={{ color: "red" }}>{errors.password?.message}</div>
        </div>

        <div className="sing-up-agree-container">
          <input
            type="checkbox"
            className="sing-up-agree-checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
          ></input>
          <div className="sing-up-agree-text">
            I agree with Shopcart's{" "}
            <Link to="/terms" style={{ color: "black" }}>
              Terms of Service
            </Link>
            ,{" "}
            <Link to="/privacy" style={{ color: "black" }}>
              Privacy Policy
            </Link>
            , and <br /> default{" "}
            <Link to="/notification" style={{ color: "black" }}>
              Notification Settings
            </Link>
            .
          </div>
        </div>
        <button className="sing-up-create-account-button">
          Create Account
        </button>
        <div className="sing-up-sing-in-text">
          Already have an account?{" "}
          <Link to="/singin" style={{ color: "black" }}>
            Sing in{" "}
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SingUp;
