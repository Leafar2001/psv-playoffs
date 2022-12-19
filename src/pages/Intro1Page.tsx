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
        Stats
      </div>
      <div className="h-96"></div>
      <div className="text-black relative z-10 ml-12 pb-10 h-24 font-bold">Compare statistics of the two teams playing.</div>
      <div className="flex relative z-10 ml-10 py-2">
        <Link to="/" style={{display: "flex", alignItems: "center", color: "#EA0000"}}><FiChevronLeft className="text-3xl mx-2"/></Link>
        <Link to="/" style={{display: "flex", alignItems: "center", color: "#EA0000"}}><FiCircle className="text-3xl mx-2"/></Link>
        <Link to="/intro1" style={{display: "flex", alignItems: "center", color: "#EA0000"}}><FiCircle className="text-3xl mx-2 fill-[#EA0000]"/></Link>
        <Link to="/intro2" style={{display: "flex", alignItems: "center", color: "#EA0000"}}><FiCircle className="text-3xl mx-2"/></Link>
        <Link to="/intro3" style={{display: "flex", alignItems: "center", color: "#EA0000"}}><FiCircle className="text-3xl mx-2"/></Link>
        <Link to="/intro2" style={{display: "flex", alignItems: "center", color: "#EA0000"}}><FiChevronRight className="text-3xl mx-2"/></Link>
      </div>
    </div>

  );
};

export default IntroPage;
