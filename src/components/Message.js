import React, { useEffect } from "react";
import moment from "moment";
import { useContextValue } from "../data/contextApi";
import EditIcon from "@material-ui/icons/Edit";

function Message({ _message, _id }) {
  const { data, dispatch } = useContextValue();
  const { message, timestamp, user, img_url, edited } = _message;
  useEffect(() => {
    var elmntToView = document.getElementById(_id);
    var header = document.querySelector(".header");
    elmntToView && elmntToView.scrollIntoView();
    header && header.scrollIntoView();
  }, []);

  const handleEdit = (_message) => {
    dispatch({
      type: "EDIT_MESSAGE_RECIVED",
      editMessage: _message,
    });
  };

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
          <span style={{ marginLeft: ".1rem" }}>
            {moment(new Date(timestamp?.toDate())).format("MMM Do YY")}
            {user === data?.user?.displayName && (
              <EditIcon
                onClick={() => handleEdit(_message)}
                className="avatar"
              />
            )}
          </span>
        </h5>
        <div className="message__text">
          <p>{message} </p>
        </div>
        <span
          style={{
            color: "#ff1a0996",
            fontSize: ".7rem",
            marginLeft: "-.04rem",
          }}
        >
          {moment(new Date(timestamp?.toDate())).fromNow()}
          <span style={{ color: "rgb(14, 103, 175)" }}>
            {edited && "edited"}
          </span>
        </span>
      </div>
    </div>
  );
}

export default Message;
