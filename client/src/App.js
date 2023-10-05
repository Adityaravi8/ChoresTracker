import React from "react";
import "./App.css";
import AddEntries from "./components/AddEntries";
import InsertChoresTracker from "./components/InsertChoresTracker";
import ViewChoresTracker from "./components/ViewChoresTracker";

function App() {
  return (
    <div className="App">
      <h2>Add a Person and a Chore</h2>
      <AddEntries />
      <br />
      <h1>ChoresTracker</h1>
      <InsertChoresTracker />
      <br />
      <ViewChoresTracker />
    </div>
  );
}

export default App;
