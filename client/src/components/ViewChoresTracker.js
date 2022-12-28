import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

function ViewChoresTracker() {
  const [ChoresTracker, setChoresTracker] = useState([]);

  useEffect(() => {
    axios
      .get("ViewChoresTracker")
      .then((response) => {
        console.log(response.data);
        setChoresTracker(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <table className="table">
        <thead className="thead">
          <tr className="trhead">
            <th className="th">Name</th>
            <th>Chore</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {ChoresTracker.map((chorestrackerResult) => (
            <tr>
              <td className="td">{chorestrackerResult.Person}</td>
              <td>{chorestrackerResult.Chores}</td>
              <td>{chorestrackerResult.Date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ViewChoresTracker;
