import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { useContextValue } from "../data/contextApi";
import firestore from "../config/firebaseConfig";
import firebase from "firebase";

function ChatInput({ name, id }) {
  const { data } = useContextValue();
  const [roomUsers, setRoomUsers] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    const _room_users = roomUsers?.map((user) => user.user_id);
    e.preventDefault();
    if (message) {
      firestore.collection("rooms").doc(id).collection("messages").add({
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: data.user?.displayName,
        user_img: data.user?.photoURL,
      });
      setMessage("");
    }
  };

  useEffect(() => {
    firestore.collection("all_users_info").onSnapshot((snap) =>
      setRoomUsers(
        snap.docs?.map((doc) => ({
          user_id: doc.data().user_id,
        }))
      )
    );
  });
  return (
    <div className="chatInput">
      <form onSubmit={handleSubmit}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder={`send message to #${name ? name : ""}`}
        />
        <Button type="submit">
          <SendIcon />
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;
