import React, { useState, useEffect } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

//CSS IMPORT//
import './App.css';
//CSS IMPORT//

import HomePage from './containers/HomePage';
import NavBar from './components/NavBar';
import Planner from './containers/Planner';
import RecipeBook from './containers/RecipeBook';
import ShoppingList from './containers/ShoppingList';
import Recipe from './containers/Recipe';
import AddRecipe from './containers/AddRecipe';
import MealPlannerService from './containers/MealPlannerService';

function App() {

  const [recipes, setRecipes] = useState([]);

  const addRecipe = newRecipe => {
    console.log("Hello")
    MealPlannerService.createRecipe(newRecipe)
      .then(savedRecipe => setRecipes([ ...recipes, savedRecipe ]));
  };

  return (
    <>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/addrecipe' element={<AddRecipe addRecipe={addRecipe}/>} />
          <Route path='/recipebook' element={<RecipeBook/>} />
          <Route path='/planner' element={<Planner />} />
          <Route path='/shoppingList' element={<ShoppingList />} />
          <Route path='/recipebook/:recipeId' element={<Recipe/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;