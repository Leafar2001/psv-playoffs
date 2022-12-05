import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import HeaderBar from "../components/HeaderBar";
import Leaderboard from "../components/Leaderboard";
import { teamData } from "../data/teamData";
import Player from "../types/Player";

type Props = {};

const LeaderboardPage = (props: Props) => {
  const [scorers, setScorers] = useState<Player[]>([]);

  const scoringSystem = {
    goal: 10,
    assist: 5,
    // TODO: add other point scoring values
  };

  const liveMatchData = {
    goals: [
      { timeScored: 17, scoredBy: 1, assistedBy: 2 },
      { timeScored: 37, scoredBy: 2 },
      { timeScored: 47, scoredBy: 2, assistedBy: 4 },
      // TODO: implement mutation with JSON-server to add live goals into this array
    ],
  };

  const checkScorers = () => {
    const uniquePlayers = new Set<Player>();
    teamData.forEach((team) => {
      team.teamStats.players.map((player) => {
        uniquePlayers.add(player);
      });
    });
    const uniquePlayersArray = Array.from(uniquePlayers);
    const dupeScorers: Player[] = [];

    uniquePlayersArray.forEach(
      (player) =>
        player.playerId === liveMatchData.goals[0].scoredBy &&
        dupeScorers.push(player)
    );

    const uniqueScorers = new Set<Player>(dupeScorers);
    const scorers = Array.from(uniqueScorers);
    console.log(scorers);
  };

  useEffect(() => {
    checkScorers();
  }, [scorers]);

  return (
    <div>
      <NavBar />
      <HeaderBar Heading={"Leaderboard"} />
      <div className="w-full text-[32px] text-black bg-white min-h-[70vh] opacity-95 p-8">
        {scorers.map((player: Player) => (
          <p>{player.playerName}</p>
        ))}
        <Leaderboard />
      </div>
    </div>
  );
};

export default LeaderboardPage;
