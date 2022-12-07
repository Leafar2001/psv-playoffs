import React, { useEffect, useState } from "react";
import { db } from "../db/firebase";
import { getDocs, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import Prediction from "../types/Prediction";
import { liveMatchData } from "../data/liveMatchData";

type Props = {};

const Leaderboard = (props: Props) => {
  const [predictions, setPredictions] = useState([] as any);
  const [userPoints, setUserPoints] = useState(0);

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
      {predictions?.map((prediction: Prediction, i: number) => (
        <div
          key={i}
          className="flex items-center justify-start text-lg w-full bg-grey mb-2 p-4 rounded-xl"
        >
          <div className="flex flex-col font-bold items-center min-w-[5vw] mr-8">
            <img
              src={prediction.userInfo.avatar}
              className="w-8 h-8 bg-black rounded-full"
            />
            <p className="capitalize">
              {prediction.userInfo.name + " (" + userPoints + ")"}
            </p>
          </div>
          <div className="flex gap-x-8">
            <div className="min-w-[8vw]">
              <p className="font-bold">Best player</p>
              <p>{prediction.predictions.bestPlayer}</p>
            </div>
            <div>
              <p className="font-bold">{liveMatchData.teams.homeTeam}</p>
              <p>{prediction.predictions.homeScore}</p>
            </div>
            <div>
              <p className="font-bold">{liveMatchData.teams.awayTeam}</p>
              <p>{prediction.predictions.awayScore}</p>
            </div>
          </div>
          <div className="font-bold ml-auto">
            <Link to="/leaderboard">All Predictions</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
