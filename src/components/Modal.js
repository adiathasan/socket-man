import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import firestore from "../config/firebaseConfig";
import { useContextValue } from "../data/contextApi";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({ open, setOpen }) {
  const classes = useStyles();
  const { data } = useContextValue();
  const [input, setInput] = useState("");
  const [room_id, setRoom_id] = useState("");
  const [_user_id, setUser_id] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input && room_id) {
      firestore
        .collection("rooms")
        .add({
          room: input,
          room_id,
          room_created_by: data.user?.email,
        })
        .then((data) =>
          firestore
            .collection("all_users_info")
            .doc(_user_id)
            .collection("channels")
            .doc(data.id)
            .set({
              channel_name: input,
              channel_id: data.id,
            })
        );

      setInput(null);
      setRoom_id(null);
      setOpen(false);
    }
  };

  useEffect(() => {
    setUser_id(data.user.uid);
  }, []);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form className="channel__form" onSubmit={handleSubmit}>
              <input
                required
                placeholder="channel #name"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <input
                required
                placeholder="channel #id"
                type="text"
                value={room_id}
                onChange={(e) => setRoom_id(e.target.value)}
              />
              <button type="submit">Add Channel</button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
