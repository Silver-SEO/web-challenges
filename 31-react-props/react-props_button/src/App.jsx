import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Button color="#FF0000" disabled text="Lorem Ipsum." />
    </div>
  );
}

function Button({ color, disabled, text }) {
  return (
    <div>
      <button color={color}>{text}</button>
    </div>
  );
}
