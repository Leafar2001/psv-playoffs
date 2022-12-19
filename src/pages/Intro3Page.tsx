import HeaderBar from "../components/HeaderBar";
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FiCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

type Props = {};

const IntroPage = (props: Props) => {
  return (
    <div>
      <div className="intro-page fixed top-0 left-0 z-0 h-full w-full bg-[#AE0000]"></div>
      <div className="relative z-10 mt-5 flex h-[40px] w-[30vw] items-center justify-center bg-black text-[24px] font-bold uppercase text-white">
        Top of leaderboard
      </div>
      <div className="h-96"></div>
      <div className="relative z-10 ml-12 h-24 pb-10 font-bold text-black">
        Get on top of the leaderboard <br /> and win prizes.
      </div>
      <div className="relative z-10 ml-10 flex justify-between py-2">
        <div className="relative flex">
          <Link
            to="/intro2"
            style={{ display: "flex", alignItems: "center", color: "#EA0000" }}
          >
            <FiChevronLeft className="mx-2 text-3xl" />
          </Link>
          <Link
            to="/"
            style={{ display: "flex", alignItems: "center", color: "#EA0000" }}
          >
            <FiCircle className="mx-2 text-3xl" />
          </Link>
          <Link
            to="/intro1"
            style={{ display: "flex", alignItems: "center", color: "#EA0000" }}
          >
            <FiCircle className="mx-2 text-3xl" />
          </Link>
          <Link
            to="/intro2"
            style={{ display: "flex", alignItems: "center", color: "#EA0000" }}
          >
            <FiCircle className="mx-2 text-3xl" />
          </Link>
          <Link
            to="/intro3"
            style={{ display: "flex", alignItems: "center", color: "#EA0000" }}
          >
            <FiCircle className="mx-2 fill-[#EA0000] text-3xl" />
          </Link>
        </div>
        <div className="relative z-10 flex text-3xl">
          <Link
            to="/intro-name"
            style={{ display: "flex", alignItems: "center", color: "#ffffff" }}
          >
            Get started
            <FiChevronRight className="mx-2 text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
