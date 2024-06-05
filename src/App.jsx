import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import PokemonList from './components/PokemonList/PokemonList';

function App() {
  const [pokemons, setPokemons] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");

  React.useEffect(() => {
    const url = "https://poke-api-97bb8825da70.herokuapp.com/api/v1/pokemons";
    const params = (keyword !== "") ? `?title=${keyword}` : "";
    fetch(url + params)
      .then(response => response.json())
      .then((data) => {
        setPokemons(data);
      });
  }, [keyword]);

  return (
    <div className='app-frame'>
      <Navbar setKeyword={setKeyword}/>
      <div className="app-body">
        <Sidebar setPokemons={setPokemons} />
        <PokemonList pokemons={pokemons}/>
      </div>
    </div>
  );
}

export default App;
