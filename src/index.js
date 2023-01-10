import React from "react";
import ReactDOM from "react-dom";

const fname = "Ankush";
const lname = "Negi";
const luckyNo = 7;

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p> your lucky number is {luckyNo}</p>
  </div>,
  document.getElementById("root")
);
