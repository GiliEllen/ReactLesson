import { Link, Outlet } from "react-router-dom";
import React, { FC, useState, useEffect } from "react";
import Search from "./Search";
import { useOnlineStatus } from "../hooks/useOnlineStatus";

interface MainProps {
  breeds: any;
  setInputValue: any;
}

const Main: FC<MainProps> = ({ breeds, setInputValue }) => {
  const isOnline = useOnlineStatus();
  const logInOut = <h3>{isOnline ? "LogIn" : "LogOut"}</h3>;
  let disp = "";
  if (isOnline) disp = "none";
  else disp = "block";

  return (
    <div className="main">
      <nav>
        <ul>
          <li>
            <Link style={{ textDecoration: "none", display: disp}}
               to="/">
                Home
            </Link>
          </li>
        </ul>
        <Search setInputValue={setInputValue} />
        <h2 id="bredds">{breeds}</h2>
        <Link id="logout" to="/login">
          {logInOut}
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Main;
