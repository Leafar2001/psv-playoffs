import React from "react";
import { Link } from "react-router-dom";
import HeaderBar from "../components/HeaderBar"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FiCircle } from "react-icons/fi";

type Props = {};

const IntroPage = (props: Props) => {

  const handleNameInput = (e: React.FormEvent<HTMLInputElement>) => {
    sessionStorage.setItem("name", e.currentTarget.value);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[30vw] h-[40px] relative mt-5 z-10 flex justify-center items-center bg-black text-white font-bold uppercase text-[24px]">
          Name
        </div>
      </div>
      <div className="h-36"></div>
      <div className="flex justify-center text-black relative z-10 pb-2 h-12">What is your name?</div>
      <div className="flex justify-center">
        <input
          type="text"
          onChange={handleNameInput}
          className="bg-[#D9D9D9] p-1 pl-4 rounded w-96 h-14"
          required
          placeholder="Name"
        />
      </div>
      <div className="h-60"></div>
      <div className="flex relative justify-end z-10">
        <Link to="/dashboard" className="font-bold text-3xl" style={{display: "flex", alignItems: "center", color: "#EA0000"}}>Go to dashboard<FiChevronRight className="text-3xl mx-2"/></Link>
      </div>
    </div>

  );
};

export default IntroPage;
