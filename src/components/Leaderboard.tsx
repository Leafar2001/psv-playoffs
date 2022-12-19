import { liveMatchData } from "../data/liveMatchData";
import { db } from "../db/firebase";
import Prediction from "../types/Prediction";
import { getDocs, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

const Leaderboard = (props: Props) => {
  const [predictions, setPredictions] = useState([] as any);
  const [userPoints, setUserPoints] = useState(0);

  const getLeaderboardData = async () => {
    await getDocs(collection(db, "predictions")).then((querySnapshot) => {
      const newData = querySnapshot?.docs?.map((doc) => ({
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
      {predictions.map((prediction: Prediction, i: number) => (
        <div
          key={i}
          className="mb-2 flex w-full items-center justify-start rounded-xl bg-grey p-4 text-lg"
        >
          <div className="mr-8 flex min-w-[5vw] flex-col items-center font-bold">
            <img
              src={prediction.userInfo.avatar}
              className="h-8 w-8 rounded-full bg-black"
            />
            <p className="capitalize">{prediction.userInfo.name}</p>
          </div>
          <div className="flex gap-x-16">
            {/* <div className="min-w-[8vw]">
              <p className="font-bold">Best player</p>
              <p>{prediction.predictions.bestPlayer}</p>
            </div> */}
            <div>
              <p className="font-bold">Home Team</p>
              <p>{prediction.predictions.homeScore}</p>
            </div>
            <div>
              <p className="font-bold">Away Team</p>
              <p>{prediction.predictions.awayScore}</p>
            </div>
            <div>
              <p className="font-bold">First Goal</p>
              <p>{prediction.predictions.firstGoal}"</p>
            </div>
            <div>
              <p className="font-bold">Yellow Cards</p>
              <p>{prediction.predictions.yellowCards}</p>
            </div>
            <div>
              <p className="font-bold">Red Cards</p>
              <p>{prediction.predictions.redCards}</p>
            </div>
          </div>
          {/* <div className="font-bold ml-auto">
            <Link to="/leaderboard">All Predictions</Link>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
