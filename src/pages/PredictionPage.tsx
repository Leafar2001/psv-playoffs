import HeaderBar from "../components/HeaderBar";
import NavBar from "../components/NavBar";
import PredictionForm from "../components/PredictionForm";
import PredictionOverview from "../components/PredictionOverview";
import { motion } from "framer-motion";
import React from "react";

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
        <div className="min-h-[70vh] w-full bg-white p-8 text-[32px] opacity-95">
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
