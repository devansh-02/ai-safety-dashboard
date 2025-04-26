import React, { useState } from "react";
import { Incident } from "../types/incident";

interface Props {
  incident: Incident;
}

const IncidentItem: React.FC<Props> = ({ incident }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="incident-card">
      <div className="incident-header">
        <div className="incident-info">
          <h3 className="incident-title">{incident.title}</h3>
          <div className="incident-meta">
            <span className={`severity ${incident.severity.toLowerCase()}`}>
              {incident.severity}
            </span>
            <span>
                {new Date(incident.reported_at).toLocaleString(undefined, {dateStyle: "medium",timeStyle: "short",})}</span>

          </div>
        </div>
        <button className="toggle-btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? "▲ Hide Details" : "▼ View Details"}
        </button>
      </div>

      {expanded && (
        <div className="incident-description">
          <p>{incident.description}</p>
        </div>
      )}
    </div>
  );
};

export default IncidentItem;
