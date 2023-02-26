import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailsPage from '../pages/DetailsPage/DetailsPage'
import HomePage from '../pages/HomePage/HomePage'
import PokedexPage from '../pages/PokedexPage/PokedexPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/page/:page" element={<HomePage />}/>
        <Route path='/detail/:pokemonName' element={<DetailsPage />}/>
        <Route path="/pokedex" element={<PokedexPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router