import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

function AddEntries() {
  const [name, setName] = useState([]);
  const [chore, setChore] = useState([]);

  const postData = (e) => {
    e.preventDefault();
    axios
      .post("/AddPeople", {
        name,
      })
      .catch((err) => console.log(err));

    axios
      .post("/AddChores", {
        chore,
      })
      .catch((err) => console.log(err));
    alert("Success");
    window.location.reload(false);
  };
  return (
    <div className="AddEntries">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="people-input"
        />
        <input
          type="text"
          placeholder="Enter Chore"
          value={chore}
          onChange={(e) => setChore(e.target.value)}
          className="chore-input"
        />
        <button onClick={postData} className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddEntries;
