interface Hipokemon {
  name: string;
  imgSrc?: string;
}

function PokemonCard({ pokemon }: Hipokemon) {
  //const pokemon = pokemonList[1];
  // console.log (pokemon)
  return (
    <figure>
      {pokemon[0].imgSrc ? (
        <img src={pokemon[0].imgSrc} alt={pokemon[0].name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon[0].name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
