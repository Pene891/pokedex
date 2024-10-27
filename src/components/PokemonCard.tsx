import { useState } from "react";
interface Hipokemon {
  name: string;
  imgSrc?: string;
}

function PokemonCard({ pokemon }: Hipokemon) {
  //const pokemon = pokemonList[1];
  // console.log (pokemon)
  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
