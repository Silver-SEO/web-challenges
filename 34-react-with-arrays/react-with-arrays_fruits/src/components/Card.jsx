import "./Card.css";

export default function Card({ color, name }) {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      {name}
    </div>
  );
}
