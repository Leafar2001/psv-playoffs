import React from "react";
import NavBar from "../components/NavBar";
import HeaderBar from "../components/HeaderBar";

import PieChart from "../components/charts/PieChart";

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <div>
      <NavBar/>
      <HeaderBar Heading={"Dashboard"} />
      <div className="w-full text-[32px] bg-white min-h-[70vh] opacity-95 p-8">
        <div className="">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
