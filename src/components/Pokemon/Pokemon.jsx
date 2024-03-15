import React from 'react';
import "./Pokemon.css";

function Pokemon({pokemon}) {
  return (
    <div className="pokemon-card">
      <img src={pokemon.pictures[0]} alt={pokemon.name} />
      <div>
        <div>
          <h5>{pokemon.name}</h5>
          <p>
            { pokemon.types .map( crit => <span key={crit}>{crit}</span>)}
          </p>
          <p>
            Location: { pokemon.encounter}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
