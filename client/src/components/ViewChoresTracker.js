import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

function ViewChoresTracker() {
  const [ChoresTracker, setChoresTracker] = useState([]);

  const apiURL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    console.log("API URL:", apiURL);
    axios
      .get(`${apiURL}/ViewChoresTracker`)
      .then((response) => {
        console.log(response.data);
        setChoresTracker(response.data);
      })
      .catch((err) => console.log(err));
  }, [apiURL]);
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
