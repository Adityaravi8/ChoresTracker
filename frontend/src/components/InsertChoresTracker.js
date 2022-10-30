import React from "react";

function InsertChoresTracker() {
  return (
    <div>
      <h2>Choose a Person</h2>
      <select>
        <option value="test">Test</option>
        <option value="people">People</option>
        <option value="react">React</option>
      </select>
      <br />
      <h2>Choose a Chore</h2>
      <select>
        <option value="test">Test</option>
        <option value="people">People</option>
        <option value="react">React</option>
      </select>
      <br />
      <h2>Enter a Date</h2>
      <input type="text" placeholder="Enter Date" />
    </div>
  );
}

export default InsertChoresTracker;
