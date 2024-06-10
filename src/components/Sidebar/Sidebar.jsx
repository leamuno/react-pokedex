import React from 'react';
import "./Sidebar.css";
import logo from '../../assets/logo_w_context2.png';

function Sidebar({ setPokemons }) {
  function addPokemon(form) {
    const formData = new FormData(form);
    const pokemon = {};
    formData.forEach((value, key) => {
      const keys = key.split('[').map(k => k.replace(']', ''));
      let current = pokemon;
      for (let i = 0; i < keys.length; i++) {
        if (i === keys.length - 1) {
          current[keys[i]] = value;
        } else {
          current[keys[i]] = current[keys[i]] || {};
          current = current[keys[i]];
        }
      }
    });

    // Extract only the value of the "pokemon" key
    const pokemonData = pokemon.pokemon;

    // Log the JSON data to the console
    console.log(JSON.stringify(pokemonData));

    const url = "https://nf07ey28qa.execute-api.ap-northeast-1.amazonaws.com/prod/pokemon";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pokemonData)
    })
      .then(response => response.json())
      .then((newPokemon) => {
        // Ensure newPokemon is properly structured and set the state
        if (newPokemon && newPokemon.Pokemon) {
          setPokemons((pokemonList) => [...pokemonList, newPokemon.Pokemon]);
        } else {
          console.error('Unexpected response structure:', newPokemon);
        }
        form.reset();
      })
      .catch(error => console.error('Error:', error));
  }

  function handleSubmit(event) {
    event.preventDefault();
    addPokemon(event.currentTarget);
  }

  const types = ["", "poison", "electric", "ground", "fairy", "fire", "normal", "flying", "grass", "water", "bug", "fighting", "psychic", "rock", "steel", "ice", "ghost", "dragon"];

  return (
    <div className="sidebar">
      <div>
        <h3>Add a missing pokemon</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="pokemonID"><i className="fa-solid fa-mug-saucer form-icons"></i></span>
            <input name="pokemon[pokemonID]" placeholder="152" type="text" className="form-control" aria-describedby="pokemonID" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="name"><i className="fa-solid fa-mug-saucer form-icons"></i></span>
            <input name="pokemon[name]" placeholder="chikorita" type="text" className="form-control" aria-describedby="name" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="dexId"><i className="fa-solid fa-mug-saucer form-icons"></i></span>
            <input name="pokemon[dexId]" placeholder="152" type="text" className="form-control" aria-describedby="dexId" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="location"><i className="fa-solid fa-location-dot form-icons"></i></span>
            <input name="pokemon[location]" placeholder="new bark town area" aria-describedby="location" type="text" className="form-control" />
          </div>
          <div className="input-group mb-3">
            <select className="input-group-text" id="type1" name="pokemon[type1]" aria-label="type1">
              {types.map((criterion) => {
                return (
                  <React.Fragment key={criterion}>
                    <option value={criterion}>{criterion}</option>
                  </React.Fragment>
                );
              })}
            </select>
          </div>
          <div className="input-group mb-3">
            <select className="input-group-text" id="type2" name="pokemon[type2]" aria-label="type2">
              {types.map((criterion) => {
                return (
                  <React.Fragment key={criterion}>
                    <option value={criterion}>{criterion}</option>
                  </React.Fragment>
                );
              })}
            </select>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="defaultSprite"><i className="fa-solid fa-camera-retro form-icons"></i></span>
            <input name="pokemon[defaultSprite]" type="text" className="form-control" aria-describedby="defaultSprite" placeholder='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png' />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="shinySprite"><i className="fa-solid fa-camera-retro form-icons"></i></span>
            <input name="pokemon[shinySprite]" type="text" className="form-control" aria-describedby="shinySprite" placeholder='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/152.png' />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-danger">Send to Oak</button>
          </div>
        </form>
      </div>
      <img src={logo} alt="keyboard and matcha logo" />
    </div>
  );
}

export default Sidebar;
