import React, { useState } from "react";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { useContextValue } from "../data/contextApi";
import firestore from "../config/firebaseConfig";
import firebase from "firebase";

function ChatInput({ name, id }) {
  const { data } = useContextValue();
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
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
