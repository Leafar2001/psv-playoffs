import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const IntroPage = (props: Props) => {
  return (
    <div className="w-full text-[32px] bg-white min-h-[70vh] opacity-95 p-8">
      <Link to="dashboard">Temporary link to dashboard</Link>
    </div>
  );
};

export default IntroPage;
