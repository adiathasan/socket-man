import React, { useState } from "react";
import "../css/sidebar.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import EditIcon from "@material-ui/icons/Edit";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import SidebarBody from "./SidebarBody";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function SideBar() {
  const [openChannels, setOpenChannels] = useState(false);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h2>Kashem Network </h2>
        <ArrowDropDownIcon />
        <EditIcon />
      </div>
      <SidebarBody title={"Browse Slack"} Icon={MoreVertOutlinedIcon} />
      <SidebarBody
        title={"Channels"}
        Icon={openChannels ? ArrowDropDownIcon : ArrowRightIcon}
        channel
        openChannels={openChannels}
        setOpenChannels={setOpenChannels}
      />
      <SidebarBody title={"Direct messages"} Icon={ArrowRightIcon} />
    </div>
  );
}

export default SideBar;
