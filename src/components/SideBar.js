import React, { useState } from "react";
import "../css/sidebar.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import EditIcon from "@material-ui/icons/Edit";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import SidebarBody from "./SidebarBody";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import PowerIcon from "@material-ui/icons/Power";
function SideBar({ setOpenBar, openBar }) {
  const [openChannels, setOpenChannels] = useState(false);

  return (
    <div className={`sidebar ${!openBar ? "hide" : ""}`}>
      <div className="sidebar__header">
        <h2>Soket-Man</h2>
        {openBar ? <PowerIcon /> : <EditIcon />}
        <MenuOpenIcon onClick={() => setOpenBar(!openBar)} />
      </div>
      <SidebarBody title={"Browse Socket"} Icon={MoreVertOutlinedIcon} />
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
