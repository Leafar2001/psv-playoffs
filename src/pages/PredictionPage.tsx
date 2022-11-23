import React from "react";
import HeaderBar from "../components/HeaderBar";

type Props = {};

const PredictionPage = (props: Props) => {
  return (
    <div>
      <HeaderBar Heading={"Predictions"} />
      <div className="w-full text-[32px] bg-white min-h-[70vh] opacity-95 p-8"></div>
    </div>
  );
};

export default PredictionPage;
