import React, { useEffect, useState } from "react";
import { getBulkActions } from "../services/api";

const BulkActionList = () => {
  const [bulkActions, setBulkActions] = useState([]);

  useEffect(() => {
    fetchBulkActions();
  }, []);

  const fetchBulkActions = async () => {
    try {
      const response = await getBulkActions();
      setBulkActions(response.data);
    } catch (error) {
      console.error("Error fetching bulk actions:", error);
    }
  };

  return (
    <div>
      <h2>Bulk Actions</h2>
      <ul>
        {bulkActions?.map((action) => (
          <li key={action._id}>
            {action.actionType} - {action.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulkActionList;
