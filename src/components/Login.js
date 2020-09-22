import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import "../css/login.css";
import firestore, { auth, provider } from "../config/firebaseConfig";
import { useContextValue } from "../data/contextApi";
import firebase from "firebase";
function Login() {
  const { data, dispatch } = useContextValue();
  const [roomUsers, setRoomUsers] = useState(null);
  const [err, setErr] = useState({ message: null });
  const handleSignIn = (e) => {
    const array = roomUsers?.map((user) => user.user_id);
    auth
      .signInWithPopup(provider)
      .then((result) => {
        if (!array.includes(result.user.uid)) {
          firestore.collection("all_users_info").doc(result.user.uid).set({
            user_name: result.user.displayName,
            user_email: result.user.email,
            user_id: result.user.uid,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          });
        }
      })
      .catch((err) => {
        setErr({ message: err.message });
      });
  };
  useEffect(() => {
    firestore.collection("all_users_info").onSnapshot((snap) =>
      setRoomUsers(
        snap.docs?.map((doc) => ({
          user_id: doc.data().user_id,
        }))
      )
    );
  }, []);
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__message">{err?.message}</div>
        <img
          src="https://cormullion.github.io/assets/images/slackmojif/slackanimation.gif"
          alt=""
        />
        <h1>Kashem Network</h1>
        <Button onClick={handleSignIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
