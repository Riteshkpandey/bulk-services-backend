import React, { useState } from "react";
import { createBulkAction } from "../services/api";

const BulkActionForm = () => {
  const [accountId, setAccountId] = useState("");
  const [actionType, setActionType] = useState("");
  const [entityType, setEntityType] = useState("");
  const [updates, setUpdates] = useState({});
  const [scheduleTime, setScheduleTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { accountId, actionType, entityType, updates, scheduleTime };
    try {
      await createBulkAction(data);
      alert("Bulk action created successfully");
    } catch (error) {
      console.error("Error creating bulk action:", error);
      alert("Error creating bulk action");
    }
  };

  return (
    <div>
      <h2>Create Bulk Action</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Account ID:</label>
          <input
            type="text"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Action Type:</label>
          <input
            type="text"
            value={actionType}
            onChange={(e) => setActionType(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Entity Type:</label>
          <input
            type="text"
            value={entityType}
            onChange={(e) => setEntityType(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Updates:</label>
          <textarea
            value={JSON.stringify(updates)}
            onChange={(e) => setUpdates(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Schedule Time:</label>
          <input
            type="datetime-local"
            value={scheduleTime}
            onChange={(e) => setScheduleTime(e.target.value)}
          />
        </div>
        <button type="submit">Create Bulk Action</button>
      </form>
    </div>
  );
};

export default BulkActionForm;
