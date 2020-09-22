import React, { useEffect } from "react";
import "../css/welcome.css";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
function Welcome(props) {
  const { setOpenBar, openBar } = props;

  useEffect(() => {
    document.title = "Socket";
    setOpenBar(true);
  }, []);
  return (
    <div className="welcome">
      <h1>
        {!openBar ? (
          <MenuOpenIcon onClick={() => setOpenBar(!openBar)} className="svg" />
        ) : (
          ""
        )}{" "}
        Soket-Man <span> #Home</span>
      </h1>
    </div>
  );
}

export default Welcome;
