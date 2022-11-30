import React, { useEffect, useState } from "react";
import { db } from "../db/firebase";
import { doc, getDocs, collection } from "firebase/firestore";
import Prediction from "../types/Prediction";

type Props = {};

const Leaderboard = (props: Props) => {
  const [predictions, setPredictions] = useState([] as any);

  // Get firebase data
  const getLeaderboardData = async () => {
    await getDocs(collection(db, "predictions")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPredictions(newData);
    });
  };

  useEffect(() => {
    getLeaderboardData();
  }, []);

  return (
    <div>
      {predictions?.map((prediction: any, i: string) => (
        <div key={i} className="flex text-lg w-full bg-grey mb-2 p-2">
          <p>{prediction.userInfo.name}</p>
          <div className="flex ml-auto">
            <p className="mr-4">
              Home score: {prediction.predictions.homeScore}
            </p>
            <p className="mr-4">
              Away score: {prediction.predictions.awayScore}
            </p>
            <p className="mr-4">
              First goal: {prediction.predictions.firstGoal}
            </p>
            <p className="mr-4">
              Yellow cards: {prediction.predictions.yellowCards}
            </p>
            <p className="mr-4">Red cards: {prediction.predictions.redCards}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
