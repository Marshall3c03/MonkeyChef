import react, { useState } from "react";
import Recipe from "../containers/Recipe";

const RecipesList = ({recipes, onRecipeClick} )=>{

    // const [recipies, setRecipes]=useState([])    

    let listOfRecipes = recipes.map(recipe => {

        const handleClick = ()=>{
            window.location.href = "/recipebook/" + recipe._id
        }

        // const url = "/recipebook/" + recipe._id

        return(
            <div onClick={handleClick}className="button-group" key={recipe._id}>
                <img className="button-image" src={recipe.image} width="100px" height="200px"/>
                <p className="button-text">{recipe.name}</p>
            </div>
        )
    });

    return(
        <>
        <div className="link-container">
        {listOfRecipes}
        </div>
        </>
    );
};

export default RecipesList;