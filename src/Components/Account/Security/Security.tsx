import "./Security.css";

import React, { useEffect } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { getDocs, collection, getDoc, updateDoc } from "firebase/firestore";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
import Key from "@mui/icons-material/Key";
import { db } from "../../../Firebase/Firebase";
import { addDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { auth } from "../../../Firebase/Firebase";
import { useState } from "react";
import { DocumentData } from "firebase/firestore";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { setDoc } from "firebase/firestore";

type dataType = {
  name: string;
  password: string;
  email: string;
  surname: string;
};
function Security() {
  let [showPassword, setShowPassword] = useState<boolean>(false);
  let user = auth.currentUser;

  let [agree, setAgree] = useState<DocumentData>();
  type inputs = {
    email: string;
    password: string;
  };

  // let [, setInputEmailValue] = useState<string>();
  console.log(agree);
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
  const changePassAndEmail = async (data: inputs) => {
    const favoriteRef = doc(db, "Users", `${auth.currentUser?.uid}`);
    await updateDoc(favoriteRef, {
      password: data.password,
      email: data.email,
    });
  };
  const onSubmit: SubmitHandler<inputs> = (data: inputs) => {
    if (data.password !== agree?.password && data.email !== agree?.email) {
      if (!/(?=.*[A-Za-z])/.test(watch("password"))) {
        setError("password", {
          message: "Password must contain at least one letter",
        });
      } else if (!/(?=.*\d)/.test(watch("password"))) {
        setError("password", {
          message: "Password must contain at least one number",
        });
      } else {
        changePassAndEmail(data);
      }
    } else {
      setError("password", {
        message: "Please write new password or new email",
      });
    }
  };
  // i^]sifNR(.EI6X64te<EWkBTIJ9.RYl&.1`6/mTDU2l6Cc617S
  useEffect(() => {
    const getuser = async () => {
      const docRef = doc(db, "Users", `${auth.currentUser?.uid}`);
      const docSnap: DocumentData | undefined = (await getDoc(docRef)).data();
      let userData: dataType = {
        name: docSnap?.name,
        password: docSnap?.password,
        email: docSnap?.email,
        surname: docSnap?.surname,
      };

      setAgree(userData);
    };

    getuser();
  }, []);

  return (
    <div className="account-page-security-container">
      <div className="account-page-security-container">
        <div className="account-page-security-changing">
          <div className="account-page-security-changing-text">
            Change the password
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="account-page-security-email-container">
              <div className="account-page-security-email-text">Email</div>
              <input
                placeholder="Write new mail"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "please write valid email",
                  },
                })}
                className="account-page-security-email-input"
                defaultValue={agree?.email}
              />
            </div>
            {errors?.email && <div>{errors.email.message}</div>}

            <div className="account-page-security-password-container">
              <div className="account-page-security-password-text">
                Password
              </div>
              <input
                type={showPassword === false ? "password" : "text"}
                placeholder="Type in here…"
                {...register("password")}
                className="account-page-security-password-input"
                defaultValue={agree?.password}
              />
              <div onClick={(): void => setShowPassword(!showPassword)}>
                <VisibilityIcon className="account-page-security-password-visibility-icon" />
              </div>
            </div>

            {errors?.password && (
              <div style={{ background: "blue" }}>
                {errors.password.message}
              </div>
            )}

            <button className="account-page-security-password-button">
              Change{" "}
            </button>
          </form>
        </div>
      </div>
      <div className="account-page-security-email-verifcation-container"></div>
    </div>
  );
}

export default Security;
