import React, { useState } from "react";
import NavBar from "../components/NavBar";
import HeaderBar from "../components/HeaderBar";

import DoughnutChart from "../components/charts/DoughnutChart";
import { teamData } from "../data/teamData";

type Props = {};

const DashboardPage = (props: Props) => {
  const NamesPsv: string[] = [];
  const NamesAjax: string[] = [];
  teamData[0].teamStats.players.forEach((player) =>
    NamesPsv.push(player.playerName)
  );
  teamData[1].teamStats.players.forEach((player) =>
    NamesAjax.push(player.playerName)
  );

  const GoalsPsv: number[] = [];
  const GoalsAjax: number[] = [];
  teamData[0].teamStats.players.forEach((player) =>
    GoalsPsv.push(player.goals)
  );
  teamData[1].teamStats.players.forEach((player) =>
    GoalsAjax.push(player.goals)
  );

  const AssistsPsv: number[] = [];
  const AssistsAjax: number[] = [];
  teamData[0].teamStats.players.forEach((player) =>
    AssistsPsv.push(player.assists)
  );
  teamData[0].teamStats.players.forEach((player) =>
    AssistsAjax.push(player.assists)
  );

  const YellowCardsPsv: number[] = [];
  const YellowCardsAjax: number[] = [];
  YellowCardsPsv.push(teamData[0].teamStats.players[0].yellowCards);
  YellowCardsPsv.push(teamData[0].teamStats.players[1].yellowCards);
  YellowCardsAjax.push(teamData[1].teamStats.players[0].yellowCards);
  YellowCardsAjax.push(teamData[1].teamStats.players[1].yellowCards);

  const MinPlayedPsv: number[] = [];
  const MinPlayedAjax: number[] = [];
  MinPlayedPsv.push(teamData[0].teamStats.players[0].minutesPlayed);
  MinPlayedPsv.push(teamData[0].teamStats.players[1].minutesPlayed);
  MinPlayedAjax.push(teamData[1].teamStats.players[0].minutesPlayed);
  MinPlayedAjax.push(teamData[1].teamStats.players[1].minutesPlayed);

  const [activeData, setActiveData] = useState(GoalsPsv);
  const [activeData2, setActiveData2] = useState(GoalsAjax);

  const [activeNames, setActiveNames] = useState(NamesPsv);
  const [activeNames2, setActiveNames2] = useState(NamesAjax);

  const fetchData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveNames(NamesPsv);
    setActiveNames2(NamesAjax);

    if (e.target.value === "goals") {
      setActiveData(GoalsPsv);
      setActiveData2(GoalsAjax);
    }
    if (e.target.value === "assists") {
      setActiveData(AssistsPsv);
      setActiveData2(AssistsAjax);
    }
    if (e.target.value === "yellow-cards") {
      setActiveData(YellowCardsPsv);
      setActiveData2(YellowCardsAjax);
    }
    if (e.target.value === "min-played") {
      setActiveData(MinPlayedPsv);
      setActiveData2(MinPlayedAjax);
    }
  };

  const psvData = {
    labels: activeNames,
    datasets: [
      {
        label: "Aantal",
        backgroundColor: ["#ed1c24", "#000"],
        data: activeData,
      },
    ],
  };

  const ajaxData = {
    labels: activeNames2,
    datasets: [
      {
        label: "Aantal",
        backgroundColor: ["#ed1c24", "#000"],
        data: activeData2,
      },
    ],
  };

  return (
    <div>
      <NavBar />
      <HeaderBar Heading={"Dashboard"} />
      <div className="w-full text-[32px] bg-white min-h-[70vh] opacity-95 p-8">
        <div className="flex justify-between">
          <div className="w-1/3">
            <div className="flex justify-center align-center">
              <p>PSV</p>
            </div>
            <DoughnutChart chartData={psvData} />
          </div>
          <div className="w-1/5">
            <div className="flex justify-center">
              <select className="cursor-pointer" onChange={fetchData}>
                <option disabled selected>
                  Filter option
                </option>
                <option value="goals">Goals</option>
                <option value="assists">Assists</option>
                <option value="yellow-cards">Yellow cards</option>
                <option value="min-played">Minutes played</option>
              </select>
            </div>
          </div>
          <div className="w-1/3">
            <div className="flex justify-center align-center">
              <p>AJAX</p>
            </div>
            <DoughnutChart chartData={ajaxData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
