import React from "react";
import "../css/header.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, Button } from "@material-ui/core";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useContextValue } from "../data/contextApi";
import { auth } from "../config/firebaseConfig";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  const { data } = useContextValue();
  return (
    <div className="header">
      <div className="header__left">
        <Button onClick={() => history.push("/")}>
          <HomeIcon />
        </Button>
        {/* <AccessTimeIcon /> */}
        <form className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search Kashem Network" />
        </form>
      </div>
      <div className="header__right">
        {/* <HelpOutlineIcon /> */}
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
