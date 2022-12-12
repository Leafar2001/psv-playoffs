import React from "react";
import { Link } from "react-router-dom";
import HeaderBar from "../components/HeaderBar"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FiCircle } from "react-icons/fi";

type Props = {};

const IntroPage = (props: Props) => {
  return (
    <div>
      <div className="intro-page w-full h-full top-0 left-0 fixed bg-[#AE0000] z-0"></div>
      <div className="w-[30vw] h-[40px] relative mt-5 z-10 flex justify-center items-center bg-black text-white font-bold uppercase text-[24px]">
        Top of leaderboard
      </div>
      <div className="h-96"></div>
      <div className="text-black relative z-10 ml-12 pb-10 h-24 font-bold">Get on top of the leaderboard <br/> and win prizes.</div>
      <div className="flex relative justify-between z-10 ml-10 py-2">
        <div className="flex relative">
          <Link to="/intro2" style={{display: "flex", alignItems: "center", color: "#EA0000"}}><FiChevronLeft className="text-3xl mx-2"/></Link>
          <Link to="/" style={{display: "flex", alignItems: "center", color: "#EA0000"}}><FiCircle className="text-3xl mx-2"/></Link>
          <Link to="/intro1" style={{display: "flex", alignItems: "center", color: "#EA0000"}}><FiCircle className="text-3xl mx-2"/></Link>
          <Link to="/intro2" style={{display: "flex", alignItems: "center", color: "#EA0000"}}><FiCircle className="text-3xl mx-2"/></Link>
          <Link to="/intro3" style={{display: "flex", alignItems: "center", color: "#EA0000"}}><FiCircle className="text-3xl mx-2 fill-[#EA0000]"/></Link>
        </div>
        <div className="flex relative z-10 text-3xl">
          <Link to="/intro-name" style={{display: "flex", alignItems: "center", color: "#ffffff"}}>Get started<FiChevronRight className="text-3xl mx-2"/></Link>
        </div>
      </div>
      
    </div>

  );
};

export default IntroPage;
