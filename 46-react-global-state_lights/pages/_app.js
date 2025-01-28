import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLightStatus = [
  { name: "Living Room", isOn: false, id: "1" },
  { name: "Kitchen", isOn: false, id: "2" },
  { name: "Bedroom", isOn: false, id: "3" },
  { name: "Bathroom", isOn: false, id: "4" },
  { name: "Garage", isOn: false, id: "5" },
  { name: "Porch", isOn: false, id: "6" },
  { name: "Garden", isOn: false, id: "7" },
  { name: "Office", isOn: false, id: "8" },
];

export default function App({ Component, pageProps }) {
  const [lightStatus, setLightStatus] = useState(initialLightStatus);

  function toggleLight(id) {
    setLightStatus(
      lightStatus.map((light) => {
        if (light.id === id) {
          return { ...lightStatus, isOn: !light.isOn };
        } else {
          return light;
        }
      })
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}
