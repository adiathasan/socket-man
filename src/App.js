import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import "./css/app.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
