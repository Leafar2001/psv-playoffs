import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import HeaderBar from "../components/HeaderBar";
import Leaderboard from "../components/Leaderboard";
import { teamData } from "../data/teamData";
import { liveMatchData } from "../data/liveMatchData";
import Player from "../types/Player";

type Props = {};

const LeaderboardPage = (props: Props) => {
  // const [scorers, setScorers] = useState<Player[]>([]);
  // const [playerPoints, setPlayerPoints] = useState<number>(0);

  // // TODO: set dynamic points based on goals
  // const scoring = {
  //   goal: 10,
  //   assist: 5,
  // };

  // const checkScorers = () => {
  //   const uniquePlayers = new Set<Player>();
  //   teamData.forEach((team) => {
  //     team.teamStats.players.map((player) => {
  //       uniquePlayers.add(player);
  //       return uniquePlayers;
  //     });
  //   });
  //   const uniquePlayersArray = Array.from(uniquePlayers);
  //   const dupeScorers: Player[] = [];
  //   liveMatchData.goals.forEach((goal) =>
  //     uniquePlayersArray.forEach(
  //       (player) =>
  //         player.playerId === goal.scoredBy && dupeScorers.push(player)
  //     )
  //   );
  //   const scorersArray = Array.from(new Set<Player>(dupeScorers));
  //   scorersArray.forEach((scorer) => {
  //     if (scorers.indexOf(scorer) === -1) {
  //       setScorers(scorersArray);
  //     }
  //   });
  // };

  // const setPoints = () => {
  //   const points = playerPoints;
  //   const pointsAdded = scoring.goal;
  //   //TODO: Function for points adding when goal
  //   const newPoints = points + pointsAdded;
  //   setPlayerPoints(newPoints);
  // };

  // useEffect(() => {
  //   checkScorers();
  // }, [scorers, playerPoints]);

  return (
    <div>
      <NavBar />
      <HeaderBar Heading={"Leaderboard"} />
      <div className="w-full text-[32px] text-black bg-white min-h-[70vh] opacity-95 p-8">
        <div className="w-full text-xl text-black flex flex-col mb-8">
          {/* <p>Current goals:</p>
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
                teamData[0].teamStats.players
                  // .filter((player) => player.playerId === goal.scoredBy)
                  .filter(
                    (player) =>
                      player.playerId === goal.scoredBy && (
                        <span>{player.playerName}</span>
                      )
                  )
                  .toString()}
            </p>
          ))} */}
          {/* <p className="mt-4">
            Current scorers:{" "}
            {scorers?.map((player: Player) => (
              <span className="mr-4" key={player.playerId}>
                {`${player.playerName} (${playerPoints})`}
              </span>
            ))}
          </p> */}
        </div>
        <Leaderboard />
      </div>
    </div>
  );
};

export default LeaderboardPage;
