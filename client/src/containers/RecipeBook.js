import react, {useEffect, useState} from "react";
import RecipesList from "../components/RecipesList";


const RecipeBook = ()=>{

    const RecipesApi = [
        {
          name: "recipes", 
          url: "http://localhost:5000/api/recipes"
        }
      ]

      const [recipesList, setRecipesList] = useState([]);

      useEffect(() => {
            loadRecipes(RecipesApi[0].url)
            return () => {
                // console.log('planets unloaded')
            }
        }, [])
      
      const loadRecipes = url => {
        fetch(url)
        .then(result => result.json())
        .then(recipesJson => setRecipesList(recipesJson))
        }

    return(
        <>
        <h1>Your Recipes</h1>
        <RecipesList recipes={recipesList} />
        </>
    );
};

export default RecipeBook;