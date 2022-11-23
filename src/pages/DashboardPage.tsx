import React from "react";
import NavBar from "../components/NavBar";
import HeaderBar from "../components/HeaderBar";

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <div>
      <NavBar/>
      <HeaderBar Heading={"Dashboard"} />
      <div className="w-full text-[32px] bg-white min-h-[70vh] opacity-95 p-8">
      </div>
    </div>
  );
};

export default DashboardPage;
