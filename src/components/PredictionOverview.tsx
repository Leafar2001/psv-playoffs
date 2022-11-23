import React from "react";

type Props = {};

const PredictionOverview = (props: Props) => {
  const homePrediction = sessionStorage.getItem("homeScorePrediction");
  const awayPrediction = sessionStorage.getItem("awayScorePrediction");
  const yellowCardsPrediction = sessionStorage.getItem("yellowCardsPrediction");
  const redCardsPrediction = sessionStorage.getItem("redCardsPrediction");
  const firstGoalPrediction = sessionStorage.getItem("firstGoalPrediction");

  return (
    <div>
      <p>Your home score prediction: {homePrediction}</p>
      <p>Your away score prediction: {awayPrediction}</p>
      <p>Your yellow cards prediction: {yellowCardsPrediction}</p>
      <p>Your red cards prediction: {redCardsPrediction}</p>
      <p>Your first goal prediction: {firstGoalPrediction}</p>
    </div>
  );
};

export default PredictionOverview;
