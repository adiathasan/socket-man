import React from "react";
import moment from "moment";

function Message({ _message }) {
  const { message, timestamp, user, img_url } = _message;
  return (
    <div className="message">
      <img src={img_url} alt="" />
      <div className="message__info">
        <h5>
          {user}
          <span>
            {moment(new Date(timestamp?.toDate())).format("MMM Do YY")}
          </span>
        </h5>
        <p>{message} </p>
        <span
          style={{
            marginLeft: 0,
            color: "#ff1a0996",
          }}
        >
          {moment(new Date(timestamp?.toDate())).fromNow()}
        </span>
      </div>
    </div>
  );
}

export default Message;
