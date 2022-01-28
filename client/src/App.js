import React, { useState, useEffect } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

//CSS IMPORT//
import './App.css';
//CSS IMPORT//


import MealPlannerService from './containers/MealPlannerService';
import Layout from './components/Layout';
import WebRoutes from './routes/WebRoutes';

function App() {

  const [recipes, setRecipes] = useState([]);

  const addRecipe = newRecipe => {
    MealPlannerService.createRecipe(newRecipe)
      .then(savedRecipe => setRecipes([ ...recipes, savedRecipe ]));
  };

  return (
    <BrowserRouter>
    
      <Layout>
        <WebRoutes />
      </Layout>
    </BrowserRouter>
  );
}
export default App;