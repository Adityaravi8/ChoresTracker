import React, { useState, useEffect } from "react";
import axios from "axios";

function InsertChoresTracker() {
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState();
  const [selectedChore, setSelectedChore] = useState();
  const [chores, setChores] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    axios
      .get("/ViewPeople")
      .then((response) => {
        console.log(response.data);
        setPeople(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("/ViewChores")
      .then((response) => {
        console.log(response.data);
        setChores(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const postData = (e) => {
    e.preventDefault();
    console.log({ selectedChore, selectedPerson });
    axios
      .post("/InsertChoresTracker", {
        name_id: selectedPerson,
        chore_id: selectedChore,
        date,
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>Select User:</div>
      <br />
      <select onChange={(event) => setSelectedPerson(event.target.value)}>
        <option value="">Select People</option>
        {people.map((peopleResult) => (
          <option value={peopleResult.id} label={peopleResult.name}></option>
        ))}
      </select>
      <br />
      <br />
      <div>Select Chore:</div>
      <br />
      <select onChange={(event) => setSelectedChore(event.target.value)}>
        <option value="">Select Chore</option>
        {chores.map((choreResult) => (
          <option value={choreResult.id} label={choreResult.chore}></option>
        ))}
      </select>
      <br />
      <br />
      <form>
        <div>Enter Date:</div>
        <br />
        <input
          type="text"
          placeholder="Enter Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
      </form>
      <br />
      <br />
      <button onClick={postData}>Submit</button>
    </div>
  );
}

export default InsertChoresTracker;
