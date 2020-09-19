import React from "react";
import "../css/sidebar.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import EditIcon from "@material-ui/icons/Edit";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import SidebarBody from "./SidebarBody";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h2>Kashem Network </h2>
        <ArrowDropDownIcon />
        <EditIcon />
      </div>
      <SidebarBody title={"Browse Slack"} Icon={MoreVertOutlinedIcon} />
      <SidebarBody title={"Channels"} Icon={ArrowDropDownIcon} channel />
      <SidebarBody title={"Direct messages"} Icon={ArrowDropDownIcon} />
    </div>
  );
}

export default SideBar;
