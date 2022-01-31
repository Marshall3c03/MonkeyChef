import react, { useState, useEffect} from "react";
import Recipe from "../containers/Recipe";
import MealPlannerService from "../containers/MealPlannerService";


const RecipesList = ({recipes} )=>{
   
    let listOfRecipes = recipes.map(recipe => {
        
        const recipeId = recipe._id;

        const handleClick = ()=>{
            window.location.href = "/recipebook/" + recipeId
        }
          

        return(
            <>
                <div className="button-group" key={recipe}>
                    <img onClick={handleClick} className="button-image" src={recipe.image} width="100px"/>
                    <p className="button-text">{recipe.name}</p>
                    <img onClick={()=>{
                        MealPlannerService.create(recipe);
                    }} src="https://icons.iconarchive.com/icons/martz90/circle-addon1/48/text-plus-icon.png" width="25px"/>
                </div>
               
            </>
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