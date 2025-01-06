import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Sum valueA="1" valueB="3" />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  const sum = Number(valueA) + Number(valueB);
  return (
    <div>
      Take {valueA} + {valueB} = {sum}.
    </div>
  );
}
