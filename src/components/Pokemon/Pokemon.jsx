import React from 'react';
import "./Pokemon.css";

function Pokemon({pokemon}) {
  return (
    <div className="pokemon-card">
      <img src={pokemon.pictures[0]} alt={pokemon.name} />
      <div>
        <div>
          <h5>{pokemon.name}</h5>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
