import react from "react";
import Recipe from "../containers/Recipe";


const RecipesList = ({recipes, onRecipeClick} )=>{


    let listOfRecipes = recipes.map(recipe => {


        return(
            <div>
                <Recipe recipe = {recipe} onRecipeClick = {onRecipeClick}/>
            </div>
        )
    });

    return(
        <>
        <div>
        {listOfRecipes}
        </div>
        </>
    );
};

export default RecipesList;