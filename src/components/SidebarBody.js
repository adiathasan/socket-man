import React, { useState, useEffect } from "react";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import firestore from "../config/firebaseConfig";

function SidebarBody({ title, Icon, channel }) {
  const [_channel, setChannel] = useState([]);

  useEffect(() => {
    firestore.collection("rooms").onSnapshot((snapshot) => {
      const allChannel = snapshot.docs.map((doc) => {
        return {
          room_id: doc.id,
          room_name: doc.data().room,
        };
      });
      setChannel(allChannel);
    });
  }, []);
  return (
    <div className="sidebar__body">
      <div className="sidebar__bodyBrowse">
        {Icon && <Icon />}
        <h3>{title}</h3>
        {channel && <AddOutlinedIcon style={{ marginLeft: "auto" }} />}
      </div>

      {channel && (
        <div className="sidebar__bodyChannels">
          {_channel?.map((channel) => (
            <div className="sidebar__bodyChannelsChannel" key={channel.room_id}>
              <span>#</span> <h5>{channel.room_name}</h5>
            </div>
          ))}
          <div className="sidebar__bodyChannelsChannel">
            <span>+</span> <h5>Add Channel</h5>
          </div>
        </div>
      )}
    </div>
  );
}

export default SidebarBody;
