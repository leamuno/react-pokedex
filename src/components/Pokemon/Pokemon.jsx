import React from 'react';
import "./Pokemon.css";

function Pokemon({pokemon}) {
  return (
    <div className="pokemon-card">
      <img src={pokemon.defaultSprite} alt={pokemon.name} />
      <div>
        <div>
          <h5>{pokemon.name}</h5>
          <p>
            <span>{pokemon.type1}</span>
            {pokemon.type2 && <span>{pokemon.type2}</span>}
          </p>
          <p>
            Location: { pokemon.location }
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
