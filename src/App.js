import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Welcome from "./components/Welcome";
import Chat from "./components/Chat";
import "./css/app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { useContextValue } from "./data/contextApi";
import { auth } from "./config/firebaseConfig";
import Search from "./components/Search";

function App(props) {
  const [openBar, setOpenBar] = useState(false);
  const { data, dispatch } = useContextValue();
  const user = data.user;
  const [roomUsers, setRoomUsers] = useState(null);
  const [search, setSearch] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "USER_SIGNED_IN",
          user,
        });
      } else {
        dispatch({
          type: "USER_SIGNED_IN",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        {user ? (
          <>
            <Header setSearch={setSearch} />
            <div className="app__body">
              <SideBar setOpenBar={setOpenBar} openBar={openBar} />
              <Switch>
                <Route path="/" exact>
                  <Welcome setOpenBar={setOpenBar} openBar={openBar} />
                </Route>
                <Route path="/search" exact>
                  <Search
                    setOpenBar={setOpenBar}
                    openBar={openBar}
                    search={search}
                  />
                </Route>
                <Route path="/room/:id">
                  <Chat
                    setRoomUsers={setRoomUsers}
                    roomUsers={roomUsers}
                    setOpenBar={setOpenBar}
                    openBar={openBar}
                  />
                </Route>
              </Switch>
            </div>
          </>
        ) : (
          <Login />
        )}
      </div>
    </Router>
  );
}

export default App;
