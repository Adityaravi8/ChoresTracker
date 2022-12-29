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
          {ChoresTracker.map((chorestrackerResults) => (
            <tr>
              <td className="td1">{chorestrackerResults.Person}</td>
              <td className="td2">{chorestrackerResults.Chores}</td>
              <td className="td3">{chorestrackerResults.Date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ViewChoresTracker;
