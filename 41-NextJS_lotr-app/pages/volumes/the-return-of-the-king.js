import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TheFellowshipOfTheRings() {
  const { title, description, cover, books } = volumes.find(
    (volume) => volume.slug === "the-return-of-the-king"
  );

  //   const index = volumes.findIndex(
  //     (volume) => volume.slug === "the-return-of-the-king"
  //   );
  //   const volume = volumes[index];
  //   const { title, description, cover, books } = volume;

  return (
    <div>
      <h1>{title}</h1>
      <Link href="/volumes/">← All Volumes</Link>
      <p>{description}</p>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image src={cover} width={140} height={230} alt={title} />
    </div>
  );
}
