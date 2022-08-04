import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <ItemListContainer greeting="Soy el contenedor de los CONTENEDORES!"/>
    </div>
  )
}

export default App;

