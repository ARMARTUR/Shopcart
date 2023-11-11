import React from "react";
import { signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { NavigateFunction } from "react-router-dom";
import { useAppDispatch } from "../../Redux/Hook";
import { userAuth } from "../../Redux/AuthReducer";
import Avatar from "@mui/joy/Avatar";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import "./AccountPage.css";
import { Height } from "@mui/icons-material";
import { getAuth } from "firebase/auth";
import Security from "../../Components/Security/Security";
import { auth } from "../../Firebase/Firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import { updateDoc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import { useEffect } from "react";
import { getDoc } from "firebase/firestore";
import { DocumentData } from "firebase/firestore";
import { useState } from "react";
import { Auth } from "firebase/auth";

function AccountPage() {
  let [agree, setAgree] = useState<any>({});
  type dataType = {
    name: string;
    password: string;
    email: string;
    surname: string;
  };

  // const smth = async () => {
  //   const data = await getDocs(asd);
  //   const a = data.docs.map((doc) => {
  //     console.log(doc.data().email, "dhfdsjh");
  //   });
  //   // const moviedoc = doc(db, "Users", "email");
  //   // await updateDoc(moviedoc, { email: "suuuuuuuuuuuuuu" });
  // };

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
      console.log("asd" in userData, "userdata");
      setAgree(userData);
    };

    getuser();
  }, []);
  // const data = await getDocs(asd);
  // const a = data.docs.filter((doc) => {
  //   return;
  // });
  // const docRef = doc(db, "Users", `${auth.currentUser?.uid}`);
  // let docSnap = await getDoc(docRef);
  // let aa = await docSnap.data();
  // setAgree(aa);

  // console.log(docSnap.data());
  let dispatch = useAppDispatch();
  let navigate: NavigateFunction = useNavigate();
  const onLogOutClick = (): void => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message, 11111111111111111111111);
      });
    dispatch(userAuth(null));
  };

  return (
    <div className="account-page-container">
      <div onClick={onLogOutClick}>sfkhds</div>
      <div className="account-page-avatar-container">
        <Avatar sx={{ height: "100px", width: "100%" }} />
      </div>

      <div className="accout-page-name-container">
        <input type="file"></input>
      </div>
      <div className="accout-page-tab-container">
        <Tabs
          aria-label="Vertical tabs"
          orientation="vertical"
          sx={{ minWidth: 300, height: 160 }}
        >
          <TabList>
            <Tab>Account</Tab>
            <Tab>Security</Tab>
            <Tab>Orders</Tab>
            <Tab>Adresses</Tab>
          </TabList>
          <TabPanel value={0}>
            <div className="account-page-tab-account-container">
              <div className="account-page-account-header">
                Account Settings
              </div>
              <div className="account-page-account-name-container">
                <div className="account-page-surname-text">Name</div>
                <input
                  type="text"
                  className="account-page-account-name-input"
                  placeholder="Name"
                  value={agree?.name}
                ></input>
              </div>
              <div className="account-page-account-surname-container">
                <div className="account-page-surname-text">Surname</div>
                <input
                  type="text"
                  className="account-page-account-surname-input"
                  placeholder="Surname"
                  value={agree?.surname}
                ></input>
              </div>
              <div className="account-page-account-email-container">
                <div className="account-page-email-text">Email</div>
                <input
                  type="text"
                  className="account-page-account-email-input"
                  placeholder="Email"
                  value={agree?.email}
                ></input>
              </div>
              <div className="account-page-account-password-container">
                <div className="account-page-password-text">Password</div>
                <input
                  type="password"
                  className="account-page-account-password-input"
                  placeholder="Password"
                  value={agree?.password}
                ></input>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={1}>
            <Security />
          </TabPanel>
          <TabPanel value={2}>
            <div className="account-page-tab-orders-container"></div>
          </TabPanel>
          <TabPanel value={3}>
            <div className="account-page-tab-adresses-container">dsad</div>
          </TabPanel>
        </Tabs>
      </div>
      <div className="accout-page"></div>
      <div className="accout-page"></div>
    </div>
  );
}

export default AccountPage;
