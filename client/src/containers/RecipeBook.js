import React, {useEffect, useState} from "react";
import RecipesList from "../components/RecipesList";
import '../static/CSS/recipebook.css'
import logo from '../static/CSS/graphics/MonkeyChefLogo.png'

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
      const [noResults, setNoResults] = useState(null);

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
        .then(setNoResults(null))
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
        setDisplayedRecipesList(null);

        foundItems = [];
        displayedRecipesList.map(recipe => {
          if (recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) === true) {
            foundItems.push(recipe)
          } else {
            setNoResults(<div class = "no-results"><img className="no-results-image" src={require('../static/CSS/graphics/SadMonkey.png')}/><h1>No results</h1>Your search didn't find <br/>any recipes</div>)
          }
          setDisplayedRecipesList(foundItems);
          document.getElementById('searchTerm').value = "";
        })
      }

      const filterByCategory = function(filterBy) {
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
        foundItems = [];
        console.log(foundItems);
        permanantRecipesList.map(recipe=> {
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
      
    return (
      <div>
        <h1 className="recipebook-title">Your Recipes</h1>
        <div className="recipebook-search-container">
          <input className="recipe-search-bar" onChange = {handleSearch} value = {searchTerm} type = "searchTerm" id = "searchTerm"/>
          <button id = "search-button" onClick = {search}>Search</button>
          <button onClick = {reloadRecipes}>Reset</button>
        </div>
        <div className="recipebook-filters-container">
          <button onClick = {sortName}>A - Z</button>
          <button onClick = {sortDefault}>Newest</button>
          <img className="recipebook-monkey" src={logo} width="50px"/>
          <button onClick = {filterByBreakfast}>Breakfast</button>
          <button onClick = {filterByLunch}>Lunch</button>
          <button onClick = {filterByDinner}>Dinner</button>
          <button onClick = {filterBySweet}>Sweet</button>
          <img className="recipebook-monkey" src={logo} width="50px"/>
          <button onClick = {filterByVegetarian}>Vegetarian</button>
          <button onClick = {filterByVegan}>Vegan</button>
          <button onClick = {filterByGlutenFree}>Gluten-Free</button>
        </div>
        <RecipesList recipes={displayedRecipesList} />
        {noResults}
      </div>
    );
};

export default RecipeBook;