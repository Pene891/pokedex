function PokemonCard({pokemon})  {
  //const pokemon = pokemonList[1];
  // console.log (pokemon)
  return (
    <figure>
      {pokemon[1].imgSrc ? (
        <img src={pokemon[1].imgSrc} alt={pokemon[1].name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon[1].name}</figcaption>
    </figure>
  )
}



export default PokemonCard;
