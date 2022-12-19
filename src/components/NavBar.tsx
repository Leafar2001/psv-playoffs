import React from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {};

const NavBar = (props: Props) => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <nav className="mb-10 flex w-full items-center justify-between">
      <ul className="flex">
        <li className="text-[48px] font-bold text-white">
          <Link className="logo-link" to="/dashboard">
            <img
              src="/brainport-psv-logo.png"
              alt="logo"
              className="logo-home"
            />
          </Link>
        </li>
      </ul>
      <ul className="flex">
        <li>
          <Link
            to="/dashboard"
            className={`bg-black px-10 py-6 text-[32px] font-bold text-white ${
              splitLocation[1] === "dashboard" ? "active" : ""
            }`}
          >
            DASHBOARD
          </Link>
        </li>
        <li>
          <Link
            to="/leaderboard"
            className={`bg-black px-10 py-6 text-[32px] font-bold text-white ${
              splitLocation[1] === "leaderboard" ? "active" : ""
            }`}
          >
            LEADERBOARD
          </Link>
        </li>
        <li>
          <Link
            to="/prediction"
            className={`bg-black px-10 py-6 text-[32px] font-bold text-white ${
              splitLocation[1] === "prediction" ? "active" : ""
            }`}
          >
            PREDICTION
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
