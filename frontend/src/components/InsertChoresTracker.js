import React, { useState, useEffect } from "react";
import axios from "axios";

function InsertChoresTracker() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("/ViewPeople")
      .then((response) => {
        console.log(response);
        setPeople(response);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <div>Select User: {people}</div>
      <br />
      <select onChange={(e) => setPeople(e.target.value)}>
        <option value="">Select People</option>
        {people.map((people) => (
          <option key={people.ID} label={people.Name}></option>
        ))}
      </select>
    </div>
  );
}

export default InsertChoresTracker;
