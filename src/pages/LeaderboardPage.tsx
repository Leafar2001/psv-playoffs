import React from "react";
import NavBar from "../components/NavBar";
import HeaderBar from "../components/HeaderBar";
import Leaderboard from "../components/Leaderboard";
import { teamData } from "../data/teamData";

type Props = {};

const LeaderboardPage = (props: Props) => {
  const scoringSystem = {
    goal: 10,
    assist: 5,
  };

  const currentMatchData = [
    // scoredBy & assistedBy checks playerId
    {
      goals: [
        { timeScored: 17, scoredBy: 1, assistedBy: 2 },
        { timeScored: 37, scoredBy: 2 },
        { timeScored: 47, scoredBy: 2, assistedBy: 4 },
      ],
    },
  ];

  return (
    <div>
      <NavBar />
      <HeaderBar Heading={"Leaderboard"} />
      <div className="w-full text-[32px] bg-white min-h-[70vh] opacity-95 p-8">
        <Leaderboard />
      </div>
    </div>
  );
};

export default LeaderboardPage;
