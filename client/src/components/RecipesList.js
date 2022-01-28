import react from "react";
import Recipe from "../containers/Recipe";

import '../static/CSS/homepage.css'


const RecipesList = ({recipes, onRecipeClick} )=>{


    let listOfRecipes = recipes.map(recipe => {

        const handleClick = ()=>{
            window.location.href = "/recipebook/" + recipe._id
        }

        // const url = "/recipebook/" + recipe._id

        return(
            <div onClick={handleClick}className="button-group">
                <img className="button-image" src={recipe.image} width="100px"/>
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