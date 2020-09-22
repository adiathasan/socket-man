import React, { useEffect } from "react";
import moment from "moment";
import { useContextValue } from "../data/contextApi";
import AndroidIcon from "@material-ui/icons/Android";

function Message({ _message, _id }) {
  const { data } = useContextValue();
  const { message, timestamp, user, img_url } = _message;
  useEffect(() => {
    var elmntToView = document.getElementById(_id);
    var header = document.querySelector(".header");
    elmntToView && elmntToView.scrollIntoView();
    header && header.scrollIntoView();
  }, [message]);
  return (
    <div
      className={`message ${
        user === data?.user?.displayName ? "ownMessage" : ""
      }`}
      id={_id && _id}
    >
      <img src={img_url} alt="" />
      <div className="message__info">
        <h5>
          {user != data?.user?.displayName ? user : ""}
          <span>
            {moment(new Date(timestamp?.toDate())).format("MMM Do YY")}
          </span>
        </h5>
        <div className="message__text">
          <p>{message} </p>
        </div>
        <span
          style={{
            marginLeft: 0,
            color: "#ff1a0996",
            fontSize: ".7rem",
          }}
        >
          {moment(new Date(timestamp?.toDate())).fromNow()}
        </span>
      </div>
    </div>
  );
}

export default Message;
