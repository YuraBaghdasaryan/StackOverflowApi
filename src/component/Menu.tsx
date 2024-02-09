import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

export const Menu: React.FC = React.memo(({}): JSX.Element => {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to={"/AddQuestion"}>AddQuestion</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to={"/TopQuestions"}>TopQuestion</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
});
