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

function App() {

  // const [selectedRecipe, setSelectedRecipe] = useState(null);
  // const [AllRecipes, setAllRecipes] = useState([]);

  // // useEffect(() => {
  // //   getRecipes();
  // // }, []);

  // // const getRecipes = ()=> {
  // //   fetch("http://localhost:5000/api/recipes")
  // //       .then(result => result.json())
  // //       .then(recipesJson => setAllRecipes(recipesJson))
  // // }

  // const onRecipeClick = function(recipe) {
  // setSelectedRecipe(recipe);
  // }

  const recipe_id = "Hello"

  return (
    <>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/addrecipe' element={<AddRecipe />} />
        <Route path='/recipebook' element={<RecipeBook/>} />
        <Route path='/planner' element={<Planner />} />
        <Route path='/shoppingList' element={<ShoppingList />} />
        <Route path={`/recipebook/${recipe_id}`} element={<Recipe/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;