import React, {useEffect, useState} from "react";
import RecipesList from "../components/RecipesList";
import Recipe from "./Recipe";
import RecipeDetail from "./RecipeDetail";

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
      const [searchTerm, setSearchTerm] = useState([]);

      const handleSearch = (ev) => setSearchTerm(ev.target.value);



      useEffect(() => {
            loadRecipes(RecipesApi[0].url)
            return () => {
            }
        }, [])
      
      const loadRecipes = url => {
        fetch(url)
        .then(result => result.json())
        .then(recipesJson => setRecipesList(recipesJson))
        }

      const recipeByTitle = recipesList.slice(0);
      recipeByTitle.sort(function(a,b) {
          let x = a.name.toLowerCase();
          let y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
      });

      const sortName = function() {
        setRecipesList(recipeByTitle);
      }

      const sortChron = function() {
        loadRecipes();
      }

      let foundItems = [];

      const search = function() {
        foundItems = [];
        recipesList.map(recipe => {
          if (recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) === true) {
            foundItems.push(recipe)
          }
          setRecipesList(foundItems)
        })
      }

      // const onRecipeClick = function(recipe) {
      //   setSelectedRecipe(recipe);
      // }

    return (
      <>
        <input onChange = {handleSearch} value = {searchTerm} type = "searchTerm" id = "searchTerm"/><button onClick = {search}>Search</button>
        <h1>Your Recipes</h1>
        <button onClick = {sortName}>A - Z</button>
        <button onClick = {sortChron}>Old to</button>
        <RecipesList recipes={recipesList} />
      </>
    );
};

export default RecipeBook;