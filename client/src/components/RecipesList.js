import react from "react";
import Recipe from "../containers/Recipe";


const RecipesList = ({recipes, onRecipeClick} )=>{


    let listOfRecipes = recipes.map(recipe => {

        const handleClick = ()=>{
            window.location.href = "/recipebook/" + recipe._id
        }

        // const url = "/recipebook/" + recipe._id

        return(
            <div onClick={handleClick}>
                <p>{recipe.name}</p>
                <img src="https://previews.123rf.com/images/krimkate/krimkate1908/krimkate190800024/129017535-food-square-background-top-view-of-various-fresh-vegetables-on-wooden-table.jpg" width="250px"/>
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