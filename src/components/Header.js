import React, { useState } from "react";
import "../css/header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, Button } from "@material-ui/core";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useContextValue } from "../data/contextApi";
import firestore, { auth } from "../config/firebaseConfig";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";

function Header({ setSearch }) {
  const [input, setInput] = useState("");
  const history = useHistory();
  const { data, dispatch } = useContextValue();
  const handleSubmit = (e) => {
    e.preventDefault();
    const unsub = firestore.collection("rooms").onSnapshot((snap) => {
      const arr = snap?.docs.map((doc) => ({
        room: doc.data().room.toLowerCase(),
        id: doc.id,
      }));
      console.log(arr);
      setSearch({ find: [...arr], input });
      setInput("");
      history.push("/search");
    });
    return () => unsub();
  };
  return (
    <div className="header">
      <div className="header__left">
        <Button onClick={() => history.push("/")}>
          <HomeIcon />
        </Button>
        <form className="header__search" id="form" onSubmit={handleSubmit}>
          <SearchIcon onClick={handleSubmit} />
          <input
            required
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Soket-Man"
          />
        </form>
      </div>
      <div className="header__right">
        <Button onClick={() => auth.signOut()}>
          Log <ExitToAppIcon />
        </Button>
        <Avatar
          className="avatar"
          src={data.user?.photoURL}
          alt={data.user?.displayName}
        />
      </div>
    </div>
  );
}

export default Header;
