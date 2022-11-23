import React from "react";

type Props = {};

const PredictionForm = (props: Props) => {
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
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    sessionStorage.setItem("predicted", "true");
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <label>Home score</label>
      <br />
      <input
        type="number"
        onChange={handleHomePrediction}
        className="bg-black text-white p-2"
        required
      />
      <br /> <br />
      <label>Away score</label>
      <br />
      <input
        type="number"
        onChange={handleAwayPrediction}
        className="bg-black text-white p-2"
        required
      />
      <br /> <br />
      <label>Time of first goal</label>
      <br />
      <input
        type="number"
        onChange={handleFirstGoalPrediction}
        className="bg-black text-white p-2"
      />
      <br /> <br />
      <label>Yellow cards</label>
      <br />
      <input
        type="number"
        onChange={handleYellowCardsPrediction}
        className="bg-black text-white p-2"
        required
      />
      <br /> <br />
      <label>Red cards</label>
      <br />
      <input
        type="number"
        onChange={handleRedCardsPrediction}
        className="bg-black text-white p-2"
        required
      />
      <br />
      <br />
      <input
        type="submit"
        value="Submit"
        className="bg-red text-white p-2 font-bold"
        required
      />
    </form>
  );
};

export default PredictionForm;
