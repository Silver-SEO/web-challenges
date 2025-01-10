import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [pageId, setPageId] = useState(0);

  console.log("PAGEID_", pageId);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${pageId}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [pageId]);

  return (
    <main>
      <button
        type="button"
        onClick={() => setPageId(pageId - 20)}
        disabled={pageId === 0}
      >
        Previous Page
      </button>
      <button type="button" onClick={() => setPageId(pageId + 20)}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
