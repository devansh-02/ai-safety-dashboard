import React, { useState } from "react";
import { Incident } from "../types/incident";
import IncidentItem from "./IncidentItem";
import IncidentForm from "./IncidentForm";

const initialData: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics...",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z",
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information...",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z",
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata...",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z",
  },
];

const IncidentDashboard: React.FC = () => {
  const [incidents, setIncidents] = useState(initialData);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  const handleAdd = (incident: Incident) => {
    setIncidents((prev) => [...prev, incident]);
  };

  const filtered = incidents.filter(
    (i) => filter === "All" || i.severity === filter
  );

  const sorted = [...filtered].sort((a, b) =>
    sortOrder === "Newest"
      ? new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime()
      : new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime()
  );

  return (
    <div className="dashboard">
      <h2>AI Safety Incident Dashboard</h2>

      <div className="controls">
        <label>
          Filter:
          <select onChange={(e) => setFilter(e.target.value)} value={filter}>
            <option value="All">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <label>
          Sort:
          <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
            <option value="Newest">Newest First</option>
            <option value="Oldest">Oldest First</option>
          </select>
        </label>
      </div>

      <IncidentForm onAdd={handleAdd} nextId={incidents.length + 1} />

      <div className="incident-list">
        {sorted.map((incident) => (
          <IncidentItem key={incident.id} incident={incident} />
        ))}
      </div>
    </div>
  );
};

export default IncidentDashboard;
