import react from "react";
import Recipe from "../containers/Recipe";

const RecipesList = ({recipes, onRecipeClick} )=>{


    let listOfRecipes = recipes.map(recipe => {

        const handleClick = ()=>{
            window.location.href = "/recipebook/" + recipe._id
        }

        // const url = "/recipebook/" + recipe._id

        return(
            <div onClick={handleClick} key={recipe._id}>
                <p>{recipe.name}</p>
                <img src={recipe.image} width="250px"/>
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