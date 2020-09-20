import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Welcome from "./components/Welcome";
import Chat from "./components/Chat";
import "./css/app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <SideBar />
          <Switch>
            <Route path="/" component={Welcome} exact />
            <Route path="/room/:id" component={Chat} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
