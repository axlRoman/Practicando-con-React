import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon';
import PokemonTable from './components/PokemonTable';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Pokemon" element={<Pokemon id={1}/>}/>
        <Route path="/" element={<PokemonTable/>}/>
      </Routes>
    </Router>
  );
}

export default App;
