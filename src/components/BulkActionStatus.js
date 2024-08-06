import React, { useState } from "react";
import { getBulkActionStatus, getBulkActionStats } from "../services/api";

const BulkActionStatus = () => {
  const [actionId, setActionId] = useState("");
  const [status, setStatus] = useState(null);
  const [stats, setStats] = useState(null);

  const handleFetchStatus = async () => {
    try {
      const response = await getBulkActionStatus(actionId);
      setStatus(response.data);
    } catch (error) {
      console.error("Error fetching bulk action status:", error);
    }
  };

  const handleFetchStats = async () => {
    try {
      const response = await getBulkActionStats(actionId);
      setStats(response.data);
    } catch (error) {
      console.error("Error fetching bulk action stats:", error);
    }
  };

  return (
    <div>
      <h2>Bulk Action Status</h2>
      <div>
        <label>Action ID:</label>
        <input
          type="text"
          value={actionId}
          onChange={(e) => setActionId(e.target.value)}
        />
        <button onClick={handleFetchStatus}>Fetch Status</button>
        <button onClick={handleFetchStats}>Fetch Stats</button>
      </div>
      {status && (
        <div>
          <h3>Status</h3>
          <pre>{JSON.stringify(status, null, 2)}</pre>
        </div>
      )}
      {stats && (
        <div>
          <h3>Stats</h3>
          <pre>{JSON.stringify(stats, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default BulkActionStatus;
