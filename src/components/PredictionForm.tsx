import React from "react";
import { db } from "../db/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

type Props = {};

const PredictionForm = (props: Props) => {
  // Inputs
  const handleNameInput = (e: React.FormEvent<HTMLInputElement>) => {
    sessionStorage.setItem("name", e.currentTarget.value);
  };
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

  return (
    <form onSubmit={handleSubmitForm}>
      <label className="text-xxl">Name</label>
      <br />
      <input
        type="text"
        onChange={handleNameInput}
        className="bg-grey p-1 rounded"
        required
      />
      <br /> <br />
      <label className="text-xxl">Home score</label>
      <br />
      <input
        type="number"
        onChange={handleHomePrediction}
        className="bg-grey p-1 rounded"
        required
      />
      <br /> <br />
      <label className="text-xxl">Away score</label>
      <br />
      <input
        type="number"
        onChange={handleAwayPrediction}
        className="bg-grey p-1 rounded"
        required
      />
      <br /> <br />
      <label className="text-xxl">Time of first goal</label>
      <br />
      <input
        type="number"
        onChange={handleFirstGoalPrediction}
        className="bg-grey] p-1 rounded"
        required
      />
      <br /> <br />
      <label className="text-xxl">Yellow cards</label>
      <br />
      <input
        type="number"
        onChange={handleYellowCardsPrediction}
        className="bg-grey p-1 rounded"
        required
      />
      <br /> <br />
      <label className="text-xxl">Red cards</label>
      <br />
      <input
        type="number"
        onChange={handleRedCardsPrediction}
        className="bg-grey p-1 rounded"
        required
      />
      <br />
      <br />
      <input
        type="submit"
        value="Submit"
        className="bg-red text-white text-xxl px-4 py-2 font-bold rounded"
        required
      />
    </form>
  );
};

export default PredictionForm;
