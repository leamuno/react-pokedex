import React from 'react';
import Pokemon from '../Pokemon/Pokemon';
import "./PokemonList.css";

function PokemonList({pokemons}) {
  return (
    <div className="pokemon-list">
      { pokemons.map( pokemon => <Pokemon pokemon={pokemon} key={pokemon.title}/>)}
    </div>
  );
}

export default PokemonList;
