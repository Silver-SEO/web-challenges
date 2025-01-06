import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Alex" />
      <Greeting name="Maindrea" />
      <Greeting name="J-Lö" />
    </div>
  );
}

function Greeting({ name }) {
  return (
    <div>
      <p>Hello, {name === "Maindrea" || name === "J-Lö" ? "Coach" : name}!</p>
    </div>
  );
}
