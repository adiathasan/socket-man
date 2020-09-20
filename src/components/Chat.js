import React from "react";
import "../css/chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import { Avatar } from "@material-ui/core";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
function Chat({ history }) {
  const { id } = useParams;
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h5>
            <strong>#Laliga </strong>
            <StarBorderOutlinedIcon />
          </h5>
          <h6>Add a topic</h6>
        </div>
        <div className="chat__headerRight">
          <Avatar className="avatar" />
          <h3>1</h3>
          <PersonAddOutlinedIcon />
          <InfoOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Chat;
