import React, { useState, useEffect } from 'react';
import {Routes, Route, Router, BrowserRouter} from 'react-router-dom';

import './App.css';
import HomePage from './containers/HomePage';
import NavBar from './containers/NavBar';
import Planner from './containers/Planner';
import RecipeBook from './containers/RecipeBook';
import ShoppingList from './containers/ShoppingList';

function App() {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/recipebook' element={<RecipeBook />} />
        <Route path='/planner' element={<Planner />} />
        <Route path='/shoppingList' element={<ShoppingList />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
