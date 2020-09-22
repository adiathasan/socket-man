import React, { useEffect } from "react";
import "../css/search.css";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { Link } from "react-router-dom";

function Search(props) {
  const { setOpenBar, openBar, search } = props;

  useEffect(() => {
    console.log(search);
  });
  return (
    <div className="search">
      <div>
        {!openBar ? (
          <MenuOpenIcon onClick={() => setOpenBar(!openBar)} className="svg" />
        ) : (
          ""
        )}{" "}
        Soket-Man <span> #Search</span>
      </div>
      <div className="search__rooms">
        <h3>{search ? "channels" : "Not Searched yet!"}</h3>
        <hr />
        {search?.find.map((item) => {
          if (item.room === search?.input) {
            return (
              <>
                <Link to={"room/" + item.id}>
                  <h4>{item.room}</h4>
                </Link>
              </>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Search;
