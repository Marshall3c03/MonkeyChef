import React from 'react'
import { Route, Routes } from 'react-router-dom';

import HomePage from '../containers/HomePage';
import Planner from '../containers/Planner';
import RecipeBook from '../containers/RecipeBook';
import ShoppingList from '../containers/ShoppingList';
import Recipe from '../containers/Recipe';
import AddRecipe from '../containers/AddRecipe';

  const WebRoutes = () => {
    return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/addrecipe' element={<AddRecipe/>} />
        <Route path='/recipebook' element={<RecipeBook/>} />
        <Route path='/planner' element={<Planner />} />
        <Route path='/shoppingList' element={<ShoppingList />} />
        <Route path='/recipebook/:recipeId' element={<Recipe/>} />
      </Routes>
    )
  }

  export default WebRoutes;