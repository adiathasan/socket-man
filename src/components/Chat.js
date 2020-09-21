import React, { useEffect, useState } from "react";
import "../css/chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import { Avatar } from "@material-ui/core";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import firestore from "../config/firebaseConfig";
import Message from "./Message";
import ChatInput from "./ChatInput";
import ListIcon from "@material-ui/icons/List";

function Chat({ setOpenBar, openBar }) {
  const { id } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState(null);

  useEffect(() => {
    if (id) {
      firestore
        .collection("rooms")
        .doc(id)
        .onSnapshot((snap) => setRoomDetails(snap.data()));

      firestore
        .collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snap) =>
          setRoomMessages(
            snap.docs?.map((message) => ({
              message_id: message.id,
              message: message.data().message,
              user: message.data().user,
              img_url: message.data().user_img,
              timestamp: message.data().timestamp,
            }))
          )
        );
    }
  }, [id]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h5>
            {openBar ? (
              ""
            ) : (
              <ListIcon
                onClick={() => setOpenBar(!openBar)}
                style={{
                  transform: "scale(1.2)",
                  color: "white",
                  marginRight: ".7rem",
                  backgroundColor: "var(--slack-color)",
                  borderRadius: "6px",
                  padding: ".3rem",
                  marginBottom: ".5rem",
                  transition: "ease-in .4s",
                }}
              />
            )}
            <strong>#{roomDetails?.room} </strong>
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
      <div className="chat__messages">
        {roomMessages?.map((message, i) => (
          <Message
            _message={message}
            key={message.message_id}
            _id={i === roomMessages?.length - 1 && message.message_id}
          />
        ))}
      </div>
      <div className="chat__input">
        <ChatInput name={roomDetails?.room} id={id} />
      </div>
    </div>
  );
}

export default Chat;
