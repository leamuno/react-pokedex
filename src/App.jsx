import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import PokemonList from './components/PokemonList/PokemonList';

function App() {
  const [pokemons, setPokemons] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");

  React.useEffect(() => {
    const url = "https://nf07ey28qa.execute-api.ap-northeast-1.amazonaws.com/prod/pokemons";
    const params = (keyword !== "") ? `?title=${keyword}` : "";
    fetch(url + params)
      .then(response => response.json())
      .then((data) => {
        const objs = data["pokemons"];
        objs.sort((a,b) => (a.dexId > b.dexId) ? 1 : ((b.dexId > a.dexId) ? -1 : 0));
        setPokemons(objs);
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
