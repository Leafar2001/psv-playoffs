import HeaderBar from "../components/HeaderBar";
import NavBar from "../components/NavBar";
import BarChart from "../components/charts/BarChart";
import DoughnutChart from "../components/charts/DoughnutChart";
import { teamData } from "../data/teamData";
import { motion } from "framer-motion";
import React, { useState } from "react";

type Props = {};

const DashboardPage = (props: Props) => {
  let NamesTeam1: any = [];
  let NamesTeam2: any = [];

  //Compare data
  let CompareData: any[] = [];
  let CompareNames: any[] = [];

  //Goals
  const GoalsTeam1: number[] = [];
  const GoalsTeam2: number[] = [];

  const loadData = () => {
    teamData[0].teamStats.players
      .filter((player) => player.goals > 0)
      .forEach((player) => {
        GoalsTeam1.push(player.goals);
        NamesTeam1.push(player.playerName);
      });
    teamData[1].teamStats.players
      .filter((player) => player.goals > 0)
      .forEach((player) => {
        GoalsTeam2.push(player.goals);
        NamesTeam2.push(player.playerName);
      });
    teamData[0].teamStats.players.forEach((player) => {
      CompareData.push(player.goals);
      CompareNames.push(player.playerName);
    });
    teamData[1].teamStats.players.forEach((player) => {
      CompareData.push(player.goals);
      CompareNames.push(player.playerName);
    });
  };
  loadData();

  //Assists
  const AssistsTeam1: number[] = [];
  const AssistsTeam2: number[] = [];

  //YellowCards
  const YellowCardsTeam1: number[] = [];
  const YellowCardsTeam2: number[] = [];

  //Minutes played
  const MinPlayedTeam1: number[] = [];
  const MinPlayedTeam2: number[] = [];

  //Fetch data functions
  const fetchGoalData = () => {
    CompareNames = [];
    teamData[0].teamStats.players
      .filter((player) => player.goals > 0)
      .forEach((player) => {
        GoalsTeam1.push(player.goals);
        NamesTeam1 = [];
        NamesTeam1.push(player.playerName);
      });
    teamData[0].teamStats.players.forEach((player) => {
      CompareData.push(player.goals);
      CompareNames.push(player.playerName);
    });
    teamData[1].teamStats.players
      .filter((player) => player.goals > 0)
      .forEach((player) => {
        GoalsTeam2.push(player.goals);
        NamesTeam2 = [];
        NamesTeam2.push(player.playerName);
      });
    teamData[1].teamStats.players.forEach((player) => {
      CompareData.push(player.goals);
      CompareNames.push(player.playerName);
    });
  };

  const fetchAssistData = () => {
    CompareNames = [];
    teamData[0].teamStats.players
      .filter((player) => player.assists > 0)
      .forEach((player) => {
        AssistsTeam1.push(player.assists);
        NamesTeam1 = [];
        NamesTeam1.push(player);
      });
    teamData[0].teamStats.players.forEach((player) => {
      CompareData.push(player.assists);
      CompareNames.push(player.playerName);
    });
    teamData[1].teamStats.players
      .filter((player) => player.assists > 0)
      .forEach((player) => {
        AssistsTeam2.push(player.assists);
        NamesTeam2 = [];
        NamesTeam2.push(player.playerName);
      });
    teamData[1].teamStats.players.forEach((player) => {
      CompareData.push(player.assists);
      CompareNames.push(player.playerName);
    });
  };

  const fetchYellowCardData = () => {
    CompareNames = [];
    teamData[0].teamStats.players
      .filter((player) => player.yellowCards > 0)
      .forEach((player) => {
        YellowCardsTeam1.push(player.yellowCards);
        NamesTeam1 = [];
        NamesTeam1.push(player.playerName);
      });
    teamData[0].teamStats.players.forEach((player) => {
      CompareData.push(player.yellowCards);
      CompareNames.push(player.playerName);
    });
    teamData[1].teamStats.players
      .filter((player) => player.yellowCards > 0)
      .forEach((player) => {
        YellowCardsTeam2.push(player.yellowCards);
        NamesTeam2 = [];
        NamesTeam2.push(player.playerName);
      });
    teamData[1].teamStats.players.forEach((player) => {
      CompareData.push(player.yellowCards);
      CompareNames.push(player.playerName);
    });
  };

  const fetchMinPlayedData = () => {
    CompareNames = [];
    teamData[0].teamStats.players
      .filter((player) => player.minutesPlayed > 0)
      .forEach((player) => {
        MinPlayedTeam1.push(player.minutesPlayed);
        NamesTeam1 = [];
        NamesTeam1.push(player.playerName);
      });
    teamData[0].teamStats.players.forEach((player) => {
      CompareData.push(player.minutesPlayed);
      CompareNames.push(player.playerName);
    });
    teamData[1].teamStats.players
      .filter((player) => player.minutesPlayed > 0)
      .forEach((player) => {
        MinPlayedTeam2.push(player.minutesPlayed);
        NamesTeam2 = [];
        NamesTeam2.push(player.playerName);
      });
    teamData[1].teamStats.players.forEach((player) => {
      CompareData.push(player.minutesPlayed);
      CompareNames.push(player.playerName);
    });
  };

  const [activeData, setActiveData] = useState(GoalsTeam1);
  const [activeData2, setActiveData2] = useState(GoalsTeam2);
  const [activeCompareData, setCompareData] = useState(CompareData);

  const [activeNames, setActiveNames] = useState(NamesTeam1);
  const [activeNames2, setActiveNames2] = useState(NamesTeam2);
  const [activeCompareNames, setCompareNames] = useState(CompareNames);

  const fetchData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveNames(NamesTeam1);
    setActiveNames2(NamesTeam2);
    setCompareNames(CompareNames);

    if (e.target.value === "goals") {
      CompareData = [];

      fetchGoalData();
      setActiveData(GoalsTeam1);
      setActiveData2(GoalsTeam2);
      setCompareData(CompareData);
    }
    if (e.target.value === "assists") {
      CompareData = [];

      fetchAssistData();
      setActiveData(AssistsTeam1);
      setActiveData2(AssistsTeam2);
      setCompareData(CompareData);
    }
    if (e.target.value === "yellow-cards") {
      CompareData = [];

      fetchYellowCardData();
      setActiveData(YellowCardsTeam1);
      setActiveData2(YellowCardsTeam2);
      setCompareData(CompareData);
    }
    if (e.target.value === "min-played") {
      CompareData = [];

      fetchMinPlayedData();
      setActiveData(MinPlayedTeam1);
      setActiveData2(MinPlayedTeam2);
      setCompareData(CompareData);
    }
  };

  let colorTeam1: any = [];
  let colorTeam2: any = [];
  const fillColors = () => {
    if (teamData[0].teamStats.teamName === "PSV") {
      teamData[0].teamStats.players.forEach(() => {
        colorTeam1.push("#ED1C24");
      });
    }
    if (teamData[1].teamStats.teamName === "AJAX") {
      teamData[1].teamStats.players.forEach(() => {
        colorTeam2.push("#111111");
      });
    }
  };
  fillColors();
  let colorCompare: any = colorTeam1.concat(colorTeam2);

  const Team1Data = {
    labels: activeNames,
    datasets: [
      {
        label: "Aantal",
        backgroundColor: colorTeam1,
        data: activeData,
      },
    ],
  };

  const Team2Data = {
    labels: activeNames2,
    datasets: [
      {
        label: "Aantal",
        backgroundColor: colorTeam2,
        data: activeData2,
      },
    ],
  };

  const DataComparison = {
    labels: activeCompareNames,
    datasets: [
      {
        label: "Aantal",
        backgroundColor: colorCompare,
        data: activeCompareData,
      },
    ],
  };

  return (
    <div>
      <NavBar />
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
      >
        <HeaderBar Heading={"Dashboard"} />
        <div className="min-h-[70vh] w-full bg-white p-8 text-[32px] opacity-95">
          <div className="flex justify-between">
            <div className="w-1/3">
              <div className="align-center mb-8 flex justify-center">
                <p>{teamData[0].teamStats.teamName}</p>
              </div>
              <BarChart chartData={Team1Data} />
            </div>
            <div className="w-1/5">
              <div className="flex flex-col justify-center">
                <select className="mb-10 cursor-pointer" onChange={fetchData}>
                  <option defaultValue="goals" value="goals">
                    Goals
                  </option>
                  <option value="assists">Assists</option>
                  <option value="yellow-cards">Yellow cards</option>
                  <option value="min-played">Minutes played</option>
                </select>
                <DoughnutChart chartData={DataComparison} />
              </div>
            </div>
            <div className="w-1/3">
              <div className="align-center mb-8 flex justify-center">
                <p>{teamData[1].teamStats.teamName}</p>
              </div>
              <BarChart chartData={Team2Data} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardPage;
