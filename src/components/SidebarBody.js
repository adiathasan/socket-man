import React, { useState, useEffect } from "react";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import firestore from "../config/firebaseConfig";
import Modal from "./Modal";
import { useHistory } from "react-router-dom";
import { useContextValue } from "../data/contextApi";

function SidebarBody(props) {
  const { data, dispatch } = useContextValue();
  const { title, Icon, channel, openChannels, setOpenChannels } = props;
  const [popup, setPopup] = useState(false);
  const [active, setActive] = useState(null);
  const [_channel, setChannel] = useState([]);

  const history = useHistory();

  const handleChannel = (id) => {
    setActive(id);
    history.push("/room/" + id);
  };

  useEffect(() => {
    firestore
      .collection("all_users_info")
      .doc(data.user?.uid)
      .collection("channels")
      .onSnapshot((snapshot) => {
        const allChannel = snapshot.docs.map((doc) => {
          return {
            room_id: doc.data().channel_id,
            room_name: doc.data().channel_name,
          };
        });
        setChannel(allChannel);
        dispatch({
          type: "CHANNELS_ADDED",
          channels: [...allChannel],
        });

        const url = history.location.pathname.split("/");
        const _id = url.slice(url.length - 1)[0];
        setActive(_id);
      });
  }, []);
  return (
    <div className="sidebar__body">
      <div
        className="sidebar__bodyBrowse"
        onClick={() => channel && setOpenChannels(!openChannels)}
      >
        {Icon && <Icon />}
        <h3>{title}</h3>
        {channel && <AddOutlinedIcon style={{ marginLeft: "auto" }} />}
      </div>

      {channel && openChannels && (
        <div className="sidebar__bodyChannels">
          <div
            className="sidebar__bodyChannelsChannel"
            onClick={() => setPopup(!popup)}
          >
            <span>+</span> <h5>Add Channel</h5>
          </div>
          {_channel?.map((channel) => (
            <div
              className={`sidebar__bodyChannelsChannel
               ${active === channel.room_id ? "active" : ""}`}
              onClick={() => handleChannel(channel.room_id)}
              key={channel.room_id}
            >
              <span>#</span> <h5>{channel.room_name}</h5>
            </div>
          ))}
        </div>
      )}
      <Modal open={popup} setOpen={setPopup} />
    </div>
  );
}

export default SidebarBody;
