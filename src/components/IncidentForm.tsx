import React, { useState } from "react";
import { Incident, Severity } from "../types/incident";

interface Props {
  onAdd: (incident: Incident) => void;
  nextId: number;
}

const IncidentForm: React.FC<Props> = ({ onAdd, nextId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState<Severity>("Low");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;

    onAdd({
      id: nextId,
      title,
      description,
      severity,
      reported_at: new Date().toISOString(),
    });

    setTitle("");
    setDescription("");
    setSeverity("Low");
  };

  return (
    <form className="incident-form" onSubmit={handleSubmit}>
      <h3>Report New Incident</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <select value={severity} onChange={(e) => setSeverity(e.target.value as Severity)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default IncidentForm;
