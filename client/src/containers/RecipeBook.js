import React, {useEffect, useState} from "react";
import RecipesList from "../components/RecipesList";
import MealRecipeService from "./MealRecipeService";
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

      const [displayedRecipesList, setDisplayedRecipesList] = useState([]);
      const [permanantRecipesList, setPermanantRecipesList] = useState([]);
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
        .then(recipesJson => {
          setDisplayedRecipesList(recipesJson)
          setPermanantRecipesList(recipesJson)})
        }

      

        const reloadRecipes = () => { fetch("http://localhost:5000/api/recipes")
          .then(result => result.json())
          .then(recipesJson => setDisplayedRecipesList(recipesJson))
              }

      const recipeByTitle = displayedRecipesList.slice(0);
      recipeByTitle.sort(function(a,b) {
          let x = a.name.toLowerCase();
          let y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
      });

      const recipeByDefault = displayedRecipesList.slice(0);
      recipeByDefault.sort(function(a,b) {
          let x = a._id;
          let y = b._id;
      return x < y ? -1 : x > y ? 1 : 0;
      });

      const sortName = function() {
        setDisplayedRecipesList(recipeByTitle);
      }

      const sortDefault = function() {
        setDisplayedRecipesList(recipeByDefault.reverse());
      }


      let foundItems = [];

      const search = function() {
        foundItems = [];
        displayedRecipesList.map(recipe => {
          if (recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) === true) {
            foundItems.push(recipe)
          }
          setDisplayedRecipesList(foundItems)
          document.getElementById('searchTerm').value = ''
        })
      }

      const filterByCategory = function(filterBy) {
        console.log("filterBy", filterBy);
        console.log("recipeList", displayedRecipesList);
        foundItems = [];
        permanantRecipesList.map(recipe => {
          if (recipe.category.toLowerCase() === filterBy) {
            foundItems.push(recipe)
          }
        })
        console.log("FoundItems", foundItems);
        setDisplayedRecipesList(foundItems)
      }

      const filterByDiet = function(filterBy) {
        console.log("filterbydiet", "button pressed")
        console.log(filterBy)
        foundItems = [];
        console.log(foundItems);
        permanantRecipesList.map(recipe=> {
          // console.log("diet ", recipe.dietary)
          if (recipe?.dietary?.toLowerCase() === filterBy) {
            foundItems.push(recipe) 
          console.log(foundItems);
          }
        })
        console.log(foundItems)
        setDisplayedRecipesList(foundItems)
      }
      

      const filterByBreakfast = function() {
        filterByCategory("breakfast");
      }

      const filterByLunch = function() {
        filterByCategory("lunch");
      }

      const filterByDinner = function() {
        filterByCategory("dinner");
      }

      const filterBySweet = function() {
        filterByCategory("sweet");
      }

      const filterByVegan = function() {
        filterByDiet("vegan");
      }

      const filterByVegetarian = function() {
        filterByDiet("vegetarian");
      }

      const filterByGlutenFree = function() {
        filterByDiet("gluten-free");
      }

      // const onRecipeClick = function(recipe) {
      //   setSelectedRecipe(recipe);
      // }  

      // const resetOnClick = () => {
      //   MealRecipeService.getAll()
      //     .then(recipesJson => setRecipesList(recipesJson))
      // };

    return (
      <>
        <input onChange = {handleSearch} value = {searchTerm} type = "searchTerm" id = "searchTerm"/>
        <h1>Your Recipes</h1>
        <div>
          Sort by: <button onClick = {sortName}>A - Z</button>

          Filter By: MEAL <button onClick = {filterByBreakfast}>Breakfast</button>
          <button onClick = {filterByLunch}>Lunch</button>
          <button onClick = {filterByDinner}>Dinner</button>
          <button onClick = {filterBySweet}>Sweet</button>

          DIET <button onClick = {filterByVegetarian}>Vegetarian</button>
          <button onClick = {filterByVegan}>Vegan</button>
          <button onClick = {filterByGlutenFree}>Gluten-Free</button>
        </div>

        <RecipesList recipes={displayedRecipesList} />
      </>
    );
};

export default RecipeBook;