import { teamData } from "../data/teamData";
import { db } from "../db/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";

type Props = {};

const PredictionForm = (props: Props) => {
  const [players, setPlayers] = useState<string[]>([]);

  // Inputs
  // const handlePlayerPrediction = (e: React.FormEvent<HTMLSelectElement>) => {
  //   sessionStorage.setItem("bestPlayerPrediction", e.currentTarget.value);
  // };
  const handleHomePrediction = (e: React.FormEvent<HTMLInputElement>) => {
    sessionStorage.setItem("homeScorePrediction", e.currentTarget.value);
  };
  const handleAwayPrediction = (e: React.FormEvent<HTMLInputElement>) => {
    sessionStorage.setItem("awayScorePrediction", e.currentTarget.value);
  };
  const handleFirstGoalPrediction = (e: React.FormEvent<HTMLInputElement>) => {
    sessionStorage.setItem("firstGoalPrediction", e.currentTarget.value);
  };
  const handleYellowCardsPrediction = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    sessionStorage.setItem("yellowCardsPrediction", e.currentTarget.value);
  };
  const handleRedCardsPrediction = (e: React.FormEvent<HTMLInputElement>) => {
    sessionStorage.setItem("redCardsPrediction", e.currentTarget.value);
  };
  // Submit data
  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    sessionStorage.setItem("predicted", "true");
    e.preventDefault();
    const userInfo = {
      name: sessionStorage.getItem("name"),
    };
    const predictions = {
      // bestPlayer: sessionStorage.getItem("bestPlayerPrediction"),
      homeScore: sessionStorage.getItem("homeScorePrediction"),
      awayScore: sessionStorage.getItem("awayScorePrediction"),
      firstGoal: sessionStorage.getItem("firstGoalPrediction"),
      yellowCards: sessionStorage.getItem("yellowCardsPrediction"),
      redCards: sessionStorage.getItem("redCardsPrediction"),
    };
    try {
      await addDoc(collection(db, "predictions"), {
        userInfo,
        predictions,
        created: Timestamp.now(),
      });
    } catch (err) {
      alert(err);
    }
    window.location.reload();
  };

  // const getPlayerList = () => {
  //   const uniquePlayers = new Set<string>();
  //   teamData.forEach((team) => {
  //     team.teamStats.players.map((player) => {
  //       uniquePlayers.add(player.playerName);
  //     });
  //   });
  //   const uniquePlayersArray = Array.from(uniquePlayers);
  //   setPlayers(uniquePlayersArray);
  // };

  // useEffect(() => {
  //   getPlayerList();
  // }, []);

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="flex flex-wrap items-center justify-center gap-x-32 gap-y-16">
        {/* <div>
          <label className="text-xxl">Name</label>
          <br />
          <input
            type="text"
            onChange={handleNameInput}
            className="bg-grey p-1 rounded"
            required
          />
        </div> */}

        {/* <br /> <br />
      <label className="text-xxl">Top scorer</label>
      <br />
      <select
        className="cursor-pointer"
        onChange={handlePlayerPrediction}
        required
      >
        <option selected disabled value="">
          Select player
        </option>
        {players.map((player: string, i) => {
          return (
            <option key={i} value={player}>
              {player}
            </option>
          );
        })}
      </select> */}
        <div>
          <label className="text-xxl">Home score</label>
          <br />
          <input
            type="number"
            onChange={handleHomePrediction}
            className="rounded bg-grey p-1"
            required
          />
        </div>
        <div>
          <label className="text-xxl">Away score</label>
          <br />
          <input
            type="number"
            onChange={handleAwayPrediction}
            className="rounded bg-grey p-1"
            required
          />
        </div>
        <div>
          <label className="text-xxl">Time of first goal</label>
          <br />
          <input
            type="number"
            onChange={handleFirstGoalPrediction}
            className="rounded bg-grey p-1"
            required
          />
        </div>
        <div>
          <label className="text-xxl">Yellow cards</label>
          <br />
          <input
            type="number"
            onChange={handleYellowCardsPrediction}
            className="rounded bg-grey p-1"
            required
          />
        </div>
        <div>
          <label className="text-xxl">Red cards</label>
          <br />
          <input
            type="number"
            onChange={handleRedCardsPrediction}
            className="rounded bg-grey p-1"
            required
          />
        </div>
      </div>
      <input
        type="submit"
        value="Submit predictions"
        className="text-xxl mx-auto mt-32 flex cursor-pointer rounded bg-red px-4 py-2 font-bold text-white"
        required
      />
    </form>
  );
};

export default PredictionForm;
