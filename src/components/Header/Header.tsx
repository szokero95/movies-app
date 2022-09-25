import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header: FC = () => {
  return (
    <div className="header">
      <div className="logoBox">
        <div className="logo"></div>
      </div>
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/series">Series</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
