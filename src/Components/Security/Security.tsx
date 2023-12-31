import "./Security.css";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { getDoc, updateDoc } from "firebase/firestore";

import { db } from "../../Firebase/Firebase";

import { doc } from "firebase/firestore";
import { auth } from "../../Firebase/Firebase";
import { useState } from "react";
import { DocumentData } from "firebase/firestore";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useAppDispatch, useAppSelector } from "../../Redux/Hook";
import { setSnackbar } from "../../Redux/SnackbarReducer";
import SnackbarUi from "../../Ui/Snackbar";
type dataType = {
  name: string;
  password: string;
  email: string;
  surname: string;
};
type inputs = {
  email: string;
  password: string;
};
function Security() {
  let [agree, setAgree] = useState<DocumentData>();
  let [showPassword, setShowPassword] = useState<boolean>(false);
  let dispatch = useAppDispatch();
  let snackbarColor = useAppSelector((state): boolean => state.snackbar.color);
  let snackbarMessage = useAppSelector((state) => state.snackbar.message);
  let snackbarIsOpen = useAppSelector((state): boolean => state.snackbar.open);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },

    setError,
  } = useForm<inputs>({
    mode: "onBlur",
  });
  const changePassAndEmail = async (data: inputs) => {
    try {
      const favoriteRef = doc(db, "Users", `${auth.currentUser?.uid}`);
      await updateDoc(favoriteRef, {
        password: data.password,
        email: data.email,
      });
      dispatch(
        setSnackbar({
          message: "Your message and email was changed successfully",
          color: true,
          open: true,
        })
      );
    } catch (e) {
      dispatch(
        setSnackbar({
          message: `Your message and email were'nt changed successfully`,
          color: false,
          open: true,
        })
      );
    }
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
          <SnackbarUi
            color={snackbarColor}
            message={snackbarMessage}
            open={snackbarIsOpen}
          />
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
