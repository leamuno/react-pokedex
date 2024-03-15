import React from 'react';
import "./Sidebar.css";
import logo from '../../assets/logo_w_context2.png';

function Sidebar({setPokemons}) {
  function addPokemon(form) {
    const url = "https://poke-api-9fa88e523c2a.herokuapp.com/api/v1/pokemons";
    fetch(url, {
      method: "POST",
      body: new FormData(form)
    })
      .then(response => response.json())
      .then((newPokemon) => {
        setPokemons((pokemonList) => [...pokemonList, newPokemon]);
        form.reset();
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    addPokemon(event.currentTarget);
  }

  const types = ["poison","electric","ground","fairy","fire","normal","flying","grass","water","bug","fighting","psychic","rock","steel","ice","ghost","dragon"];

  return (
    <div className="sidebar">
      <div>
        <h3>Add a missing pokemon</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="pokemon-name"><i className="fa-solid fa-mug-saucer form-icons"></i></span>
            <input name="pokemon[name]" placeholder="pikachu" type="text" className="form-control" aria-describedby="pokemon-name" />
            </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="pokemon-encounter"><i className="fa-solid fa-location-dot form-icons"></i></span>
            <input name="pokemon[encounter]" placeholder="route 1" aria-describedby="pokemon-encounter" type="text" className="form-control" />
          </div>
          <div className="mb-3">
          { types.map((criterion) => {
              return (
                <React.Fragment key={criterion}>
                  <input name="pokemon[types][]" type="checkbox" className="btn-check" id={criterion} autoComplete="off" value={criterion}/>
                  <label className="btn btn-outline-danger btn-sm mx-1 mb-1" htmlFor={criterion}>{criterion}</label>
                </React.Fragment>
              );
            }) }
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="pokemon-pictures"><i className="fa-solid fa-camera-retro form-icons"></i></span>
            <input name="pokemon[pictures]" type="text" className="form-control" aria-describedby="pokemon-picture" placeholder='http://example.com/image.jpg'/>
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
