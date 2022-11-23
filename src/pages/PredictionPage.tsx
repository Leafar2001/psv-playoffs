import React from "react";
import NavBar from "../components/NavBar";

type Props = {};

const PredictionPage = (props: Props) => {
  return (
    <div>
      <NavBar/>
      <div className="w-full text-[32px] bg-white min-h-[70vh] opacity-95 p-8">
      Predictions
      </div>
    </div>
  );
};

export default PredictionPage;
