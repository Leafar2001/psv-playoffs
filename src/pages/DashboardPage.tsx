import React from "react";
import HeaderBar from "../components/HeaderBar";

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <div>
      <HeaderBar Heading={"Dashboard"} />
      <div className="w-full text-[32px] bg-white min-h-[70vh] opacity-95 p-8">
        {/* <iframe
        src="https://media.ortecsports.com/site/login"
        className="w-full h-[60vh]"
      ></iframe> */}
      </div>
    </div>
  );
};

export default DashboardPage;
