import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1331,
      name: "🍌 Banana",
      color: "yellow",
      healthy: true,
      img: "https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg",
    },
    {
      id: 1332,
      name: "🍎 Red apple",
      color: "red",
      healthy: true,
      img: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    },
    {
      id: 1333,
      name: "🍏 Green apple",
      color: "green",
      healthy: true,
      img: "https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg",
    },
    {
      id: 1334,
      name: "🍔 Burger",
      color: "black",
      healthy: false,
      img: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card id={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
{
  /* <div className="app">
<Card name="🍌 banana" />
</div> */
}
