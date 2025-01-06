import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Smiley name="Alex" />
      <Smiley name="Julia" isHappy />
    </div>
  );
}

function Smiley({ name, isHappy }) {
  return (
    <div>
      <p>
        {name}
        {isHappy ? "😊" : "😒"} !
      </p>
    </div>
  );
}
