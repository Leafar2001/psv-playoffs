import React, { useState } from "react";
import NavBar from "../components/NavBar";
import HeaderBar from "../components/HeaderBar";

import GoalsChart from "../components/charts/GoalsChart";
import { teamData } from "../data/teamData"

type Props = {};

const DashboardPage = (props: Props) => {

  const [activeData, setActiveData] = useState();
  const [activeData2, setActiveData2] = useState();

  const [activeNames, setActiveNames] = useState();
  const [activeNames2, setActiveNames2] = useState();

  const NamesPsv: any = []
  const NamesAjax: any = []
  NamesPsv.push(teamData[0].teamStats.players[0].playerName)
  NamesPsv.push(teamData[0].teamStats.players[1].playerName)
  NamesAjax.push(teamData[1].teamStats.players[0].playerName)
  NamesAjax.push(teamData[1].teamStats.players[1].playerName)

  const GoalsPsv: any = []
  const GoalsAjax: any = []
  GoalsPsv.push(teamData[0].teamStats.players[0].goals)
  GoalsPsv.push(teamData[0].teamStats.players[1].goals)
  GoalsAjax.push(teamData[1].teamStats.players[0].goals)
  GoalsAjax.push(teamData[1].teamStats.players[1].goals)

  const AssistsPsv: any = []
  const AssistsAjax: any = []
  AssistsPsv.push(teamData[0].teamStats.players[0].assists)
  AssistsPsv.push(teamData[0].teamStats.players[1].assists)
  AssistsAjax.push(teamData[1].teamStats.players[0].assists)
  AssistsAjax.push(teamData[1].teamStats.players[1].assists)
  
  const YellowCardsPsv: any = []
  const YellowCardsAjax: any = []
  YellowCardsPsv.push(teamData[0].teamStats.players[0].yellowCards)
  YellowCardsPsv.push(teamData[0].teamStats.players[1].yellowCards)
  YellowCardsAjax.push(teamData[1].teamStats.players[0].yellowCards)
  YellowCardsAjax.push(teamData[1].teamStats.players[1].yellowCards)

  const MinPlayedPsv: any = []
  const MinPlayedAjax: any = []
  MinPlayedPsv.push(teamData[0].teamStats.players[0].minutesPlayed)
  MinPlayedPsv.push(teamData[0].teamStats.players[1].minutesPlayed)
  MinPlayedAjax.push(teamData[1].teamStats.players[0].minutesPlayed)
  MinPlayedAjax.push(teamData[1].teamStats.players[1].minutesPlayed)

  const fetchData = (e: any) => {
    setActiveNames(NamesPsv)
    setActiveNames2(NamesAjax)

    if(e.target.value === "goals"){
      setActiveData(GoalsPsv)
      setActiveData2(GoalsAjax)
    }
    if(e.target.value === "assists"){
      setActiveData(AssistsPsv)
      setActiveData2(AssistsAjax)
    }
    if(e.target.value === "yellow-cards"){
      setActiveData(YellowCardsPsv)
      setActiveData2(YellowCardsAjax)
    }
    if(e.target.value === "min-played"){
      setActiveData(MinPlayedPsv)
      setActiveData2(MinPlayedAjax)
    }
  }

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
      <NavBar/>
      <HeaderBar Heading={"Dashboard"} />
      <div className="w-full text-[32px] bg-white min-h-[70vh] opacity-95 p-8">
        <div className="flex justify-between">
          <div className="w-1/3">
            <div className="flex justify-center align-center"><p>PSV</p></div>
            <GoalsChart chartData={psvData} />
          </div>
          <div className="w-1/5">
            <div className="flex justify-center">
              <select className="cursor-pointer" onChange={fetchData}>
                <option disabled selected>Filter option</option>
                <option value="goals">Goals</option>
                <option value="assists">Assists</option>
                <option value="yellow-cards">Yellow cards</option>
                <option value="min-played">Minutes played</option>
              </select>
            </div>
          </div>
          <div className="w-1/3">
            <div className="flex justify-center align-center"><p>AJAX</p></div>
            <GoalsChart chartData={ajaxData}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
