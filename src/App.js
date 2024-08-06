import React from "react";
import BulkActionList from "./components/BulkActionList";
import BulkActionForm from "./components/BulkActionForm";
import BulkActionStatus from "./components/BulkActionStatus";

function App() {
  return (
    <div className="App">
      <h1>Bulk Action Platform</h1>
      <BulkActionForm />
      <BulkActionList />
      <BulkActionStatus />
    </div>
  );
}

export default App;
