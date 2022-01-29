import React, {useEffect, useState} from "react";
import RecipesList from "../components/RecipesList";
import Recipe from "./Recipe";
import RecipeDetail from "./RecipeDetail";

import '../static/CSS/recipebook.css'

// import { useMatch } from "@reach/router"


// const RecipeID = useMatch("/films/:id").params.id;

const RecipeBook = () => {
    const RecipesApi = [
        {
          name: "recipes", 
          url: "http://localhost:5000/api/recipes"
        }
      ]

      const [recipesList, setRecipesList] = useState([]);
      const [selectedRecipe, setSelectedRecipe] = React.useState(null);


      useEffect(() => {
            loadRecipes(RecipesApi[0].url)
            loadSearchJson(RecipesApi[0].url)
            return () => {
            }
        }, [])
      
      const loadRecipes = url => {
        fetch(url)
        .then(result => result.json())
        .then(recipesJson => setRecipesList(recipesJson))
        }

        const loadSearchJson = url => {
          fetch(url)
          .then(result => result.json())
  
          .then(recipesJson => console.log(recipesJson))
  
          }

      const onRecipeClick = function(recipe) {
        setSelectedRecipe(recipe);
      }

    return (
      <>
        <h1>Your Recipes</h1>
        <RecipesList recipes={recipesList} />
      </>
    );
};

export default RecipeBook;