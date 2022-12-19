import HeaderBar from "../components/HeaderBar";
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FiCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
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
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="relative z-10 mt-5 flex h-[40px] w-[30vw] items-center justify-center bg-black text-[24px] font-bold uppercase text-white">
          Name
        </div>
      </div>
      <div className="h-36"></div>
      <div className="relative z-10 flex h-12 justify-center pb-2 text-black">
        What is your name?
      </div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleNameInput}
            className="h-14 w-96 rounded bg-[#D9D9D9] p-1 pl-4"
            required
            placeholder="First name"
          />
          <div className="h-20"></div>
          <div className="relative z-10 flex justify-center">
            <input
              type="submit"
              value="Get started"
              className="text-xxl flex cursor-pointer rounded bg-red px-4 py-2 font-bold text-white"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default IntroPage;
