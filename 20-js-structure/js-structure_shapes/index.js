console.clear();
import { circle } from "./components/Circle/Circle.js";
import { square } from "./components/Square/Square.js";
import { pentagon } from "./components/Pentagon/Pentagon.js";

const root = document.getElementById("root");

root.append(circle, square, pentagon);
