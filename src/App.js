import React, { useContext } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Welcome from "./components/Welcome";
import Chat from "./components/Chat";
import "./css/app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { useContextValue } from "./data/contextApi";

function App() {
  const { data } = useContextValue();
  return (
    <Router>
      <div className="app">
        {data.user ? (
          <>
            <Header />
            <div className="app__body">
              <SideBar />
              <Switch>
                <Route path="/" component={Welcome} exact />
                <Route path="/room/:id" component={Chat} />
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
