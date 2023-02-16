import React from "react";
import { Link } from "react-router-dom";
import useContextStates from "../hooks/useContextStates";

export default function Header(): JSX.Element {
  return (
    <header className="bg-secondary w-full">
      <nav className="navbar navbar-expand">
        <div className="container">
          <h1 className="navbar-brand text-white">Times</h1>
          <ul className="navbar-nav mb-2">
            <li className="nav-item" key={"home"}>
              <Link to={"/"} className="nav-link text-white">
                Times
              </Link>
            </li>
            <li className="nav-item" key={"search"}>
              <Link to={"/time"} className="nav-link text-white">
                Time
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
