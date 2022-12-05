import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import HeaderBar from "../components/HeaderBar";
import Leaderboard from "../components/Leaderboard";
import { teamData } from "../data/teamData";
import { liveMatchData } from "../data/liveMatchData";
import Player from "../types/Player";

type Props = {};

const LeaderboardPage = (props: Props) => {
  const [scorers, setScorers] = useState<Player[]>([]);

  // TODO: set dynamic points based on goals
  const scoringSystem = {
    goal: 10,
    assist: 5,
  };
  const playerPoints = 0;

  const checkScorers = () => {
    const uniquePlayers = new Set<Player>();
    teamData.forEach((team) => {
      team.teamStats.players.map((player) => {
        uniquePlayers.add(player);
      });
    });
    const uniquePlayersArray = Array.from(uniquePlayers);
    const dupeScorers: Player[] = [];
    liveMatchData.goals.forEach((goal) =>
      uniquePlayersArray.forEach(
        (player) =>
          player.playerId === goal.scoredBy && dupeScorers.push(player)
      )
    );
    const scorersArray = Array.from(new Set<Player>(dupeScorers));
    scorersArray.forEach((scorer) => {
      if (scorers.indexOf(scorer) === -1) {
        setScorers(scorersArray);
      }
    });
  };

  useEffect(() => {
    checkScorers();
  }, [scorers]);

  return (
    <div>
      <NavBar />
      <HeaderBar Heading={"Leaderboard"} />
      <div className="w-full text-[32px] text-black bg-white min-h-[70vh] opacity-95 p-8">
        <div className="w-full text-xl text-black flex flex-col mb-8">
          <p>Current goals:</p>
          {liveMatchData.goals.map((goal) => (
            <p key={goal.id}>
              {goal.timeScored +
                "' - scored by " +
                // teamData.map((team) =>
                //   console.log(
                //     team.teamStats.players.filter(
                //       (player) => player.playerId === goal.scoredBy
                //     )
                //   )
                // )
                teamData[0].teamStats.players.find(
                  (player) =>
                    player.playerId === goal.scoredBy && (
                      <span>{player.playerName}</span>
                    )
                )}
            </p>
          ))}
          <p className="mt-4">
            Current scorers:{" "}
            {scorers?.map((player: Player) => (
              <span className="mr-4" key={player.playerId}>
                {player.playerName}
              </span>
            ))}
          </p>
        </div>
        <Leaderboard />
      </div>
    </div>
  );
};

export default LeaderboardPage;
