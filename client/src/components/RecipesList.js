import react from "react";
import Recipe from "../containers/Recipe";


const RecipesList = ({recipes} )=>{


    let listOfRecipes = recipes.map(recipe => {

        const url = "/recipebook/" + recipe._id

        return(
            <div>
                <a href={url}>{recipe.name}</a>
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