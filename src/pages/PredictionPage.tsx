import React from "react";
import NavBar from "../components/NavBar";
import HeaderBar from "../components/HeaderBar";
import PredictionForm from "../components/PredictionForm";
import PredictionOverview from "../components/PredictionOverview";
type Props = {};

const PredictionPage = (props: Props) => {
  return (
    <div>
      <NavBar />
      <HeaderBar Heading={"Predictions"} />
      <div className="w-full text-[32px] bg-white min-h-[70vh] opacity-95 p-8">
        {sessionStorage.getItem("predicted") ? (
          <PredictionOverview />
        ) : (
          <PredictionForm />
        )}
      </div>
    </div>
  );
};

export default PredictionPage;
