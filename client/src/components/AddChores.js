import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

function AddChores() {
  const [chore, setChore] = useState([]);

  const postData = (e) => {
    e.preventDefault();
    axios
      .post("/AddChores", {
        chore,
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="AddChores">
      <form onSubmit={(e) => e.preventDefault()}>
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
export default AddChores;
