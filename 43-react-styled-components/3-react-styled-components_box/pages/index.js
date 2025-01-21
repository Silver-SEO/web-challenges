import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";

export default function HomePage() {
  return (
    <div>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
    </div>

    // {/* <div>
    // <BoxWithStyledComponents />
    // <BoxWithStyledComponents isBlack />
    // </div> */}
  );
}
