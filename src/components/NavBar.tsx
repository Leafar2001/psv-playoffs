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
    <nav className="w-full flex justify-between items-center mt-20 mb-10">
      <ul className="flex">
        <li className="text-[48px] py-4 font-bold text-white">
          <Link className="logo-home" to="/">
            PSV
          </Link>
        </li>
      </ul>
      <ul className="flex">
        <li
          className={`px-8 py-4 text-[32px] font-bold text-white bg-[#222222] ${
            splitLocation[1] === "" ? "active" : ""
          }`}
        >
          <Link to="/">DASHBOARD</Link>
        </li>
        <li
          className={`px-8 py-4 text-[32px] font-bold text-white bg-[#222222] ${
            splitLocation[1] === "leaderboard" ? "active" : ""
          }`}
        >
          <Link to="leaderboard">LEADERBOARD</Link>
        </li>
        <li
          className={`px-8 py-4 text-[32px] font-bold text-white bg-[#222222] ${
            splitLocation[1] === "prediction" ? "active" : ""
          }`}
        >
          <Link to="prediction">PREDICTION</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
