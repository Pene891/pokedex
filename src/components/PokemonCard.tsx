function PokemonCard({pokemon}) {
  console.log(pokemon)
  //const pokemon = { name: "mew", imgSrc: null }; 
  return (
    <figure>
      {pokemon[1].imgSrc ? (
        <img src={pokemon[1].imgSrc} alt={pokemon[1].name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon[1].name}</figcaption>
    </figure>
  );
}


export default PokemonCard;
