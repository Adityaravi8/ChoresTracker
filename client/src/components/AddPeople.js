import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

function AddPeople() {
  const [name, setName] = useState([]);

  const postData = (e) => {
    e.preventDefault();
    axios
      .post("/AddPeople", {
        name,
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="AddPeople">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="people-input"
        />
        <button onClick={postData} className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddPeople;
