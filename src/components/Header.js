import React from "react";
import "../css/header.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useContextValue } from "../data/contextApi";

function Header() {
  const { data, dispatch } = useContextValue();
  return (
    <div className="header">
      <div className="header__left">
        <AccessTimeIcon />
        <form className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search Kashem Network" />
        </form>
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
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
