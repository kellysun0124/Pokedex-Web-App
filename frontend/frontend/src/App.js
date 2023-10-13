import React from 'react';
import Register from './Components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pokedex from './Components/Pokedex';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Login />}></Route>
        <Route path ="/register" element={<Register />}></Route>
        <Route path ="/home" element={<Pokedex />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App

