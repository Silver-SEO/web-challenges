import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>First Button</Button>
      <Button>Second Button</Button>
      <Button>Third Button</Button>
      <Button>Last Button</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <div>
      <button className="button" type="button">
        {children}
      </button>
    </div>
  );
}
