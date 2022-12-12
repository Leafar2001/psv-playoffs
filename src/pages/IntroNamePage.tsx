import React from "react";
import { Link } from "react-router-dom";
import HeaderBar from "../components/HeaderBar"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FiCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { redirect } from "react-router-dom";

type Props = {};

const IntroPage = (props: Props) => {

  let navigate = useNavigate();

  const handleNameInput = (e: React.FormEvent<HTMLInputElement>) => {
    sessionStorage.setItem("name", e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/dashboard")
  }

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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleNameInput}
            className="bg-[#D9D9D9] p-1 pl-4 rounded w-96 h-14"
            required
            placeholder="First name"
          />
          <div className="h-20"></div>
          <div className="flex relative justify-center z-10">
            <input 
              type="submit"
              value="Get started"
              className="bg-red text-white text-xxl flex px-4 py-2 font-bold rounded cursor-pointer"
              required
            />
          </div>
        </form>
      </div>
      
    </div>

  );
};

export default IntroPage;
