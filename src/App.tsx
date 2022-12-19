import DashboardPage from "./pages/DashboardPage";
import Intro1Page from "./pages/Intro1Page";
import Intro2Page from "./pages/Intro2Page";
import Intro3Page from "./pages/Intro3Page";
import IntroNamePage from "./pages/IntroNamePage";
import IntroPage from "./pages/IntroPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import PredictionPage from "./pages/PredictionPage";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app px-16 py-10">
      <Router>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/intro1" element={<Intro1Page />} />
          <Route path="/intro2" element={<Intro2Page />} />
          <Route path="/intro3" element={<Intro3Page />} />
          <Route path="/intro-name" element={<IntroNamePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="leaderboard" element={<LeaderboardPage />} />
          <Route path="prediction" element={<PredictionPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
