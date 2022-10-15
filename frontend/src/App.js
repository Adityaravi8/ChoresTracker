import React from "react";
import "./App.css";
import AddPeople from "./components/AddPeople";
import AddChores from "./components/AddChores";

function App() {
  return (
    <div className="App">
      <h2>Add a Person</h2>
      <AddPeople />
      <h2>Add a Chore</h2>
      <AddChores />
      <br />
      <h1>ChoresTracker</h1>
      <br />
    </div>
  );
}

export default App;
