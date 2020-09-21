import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import "../css/login.css";
import { auth, provider } from "../config/firebaseConfig";
import { useContextValue } from "../data/contextApi";

function Login() {
  const { data, dispatch } = useContextValue();
  const [err, setErr] = useState({ message: null });
  const handleSignIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        // dispatch({
        //   type: "SET_USER",
        //   user: result.user,
        // });
      })
      .catch((err) => {
        setErr({ message: err.message });
      });
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
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
