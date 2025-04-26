import React from "react";
import IncidentDashboard from "./components/IncidentDashboard";
import "./styles/styles.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <IncidentDashboard />
    </div>
  );
};

export default App;
