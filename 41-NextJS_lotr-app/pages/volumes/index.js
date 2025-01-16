import { introduction, volumes } from "../../lib/data";
import Link from "next/link";

export default function Navigation() {
  return (
    <div>
      <h1>Lord of the Ring</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
