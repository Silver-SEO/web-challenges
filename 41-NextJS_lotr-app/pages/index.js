import { introduction } from "../lib/data";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings App</h1>
      <Link href="/volumes">Volume Overview</Link>
    </div>
  );
}
