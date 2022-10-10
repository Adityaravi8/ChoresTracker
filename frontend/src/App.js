import React from "react";
import "./App.css";
import AddPeople from "./components/AddPeople";
import AddChores from "./components/AddChores";

function App() {
  return (
    <div className="App">
      <AddPeople />
      <AddChores />
    </div>
  );
}

export default App;
