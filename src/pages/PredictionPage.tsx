import React from "react";
import NavBar from "../components/NavBar";
import HeaderBar from "../components/HeaderBar";
import PredictionForm from "../components/PredictionForm";
import PredictionOverview from "../components/PredictionOverview";
import { motion } from "framer-motion";

type Props = {};

const PredictionPage = (props: Props) => {
  const currentUser = sessionStorage.getItem("name");

  return (
    <div>
      <NavBar />
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
      >
        <HeaderBar
          Heading={currentUser ? `${currentUser}'s Predictions` : "Predictions"}
        />
        <div className="w-full text-[32px] bg-white min-h-[70vh] opacity-95 p-8">
          {sessionStorage.getItem("predicted") ? (
            <PredictionOverview />
          ) : (
            <PredictionForm />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default PredictionPage;
