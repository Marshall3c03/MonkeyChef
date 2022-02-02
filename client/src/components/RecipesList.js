import react, { useState, useEffect} from "react";
import Recipe from "../containers/Recipe";
import MealPlannerService from "../containers/MealPlannerService";
import { nanoid } from 'nanoid'
import swal from "sweetalert";

const RecipesList = ({recipes} )=>{

    let listOfRecipes = recipes.map(recipe => {
        
        const recipeId = recipe._id;

        const handleClick = ()=>{
            window.location.href = "/recipebook/" + recipeId
        }
        
       

        return(
            <>
                <div className="recipe-button-group" key={nanoid()}>
                <img onClick={handleClick} className="button-image" src={recipe.image} width="100px"/>
                <p className="recipe-button-text" >{recipe.name}</p>
                <img className="recipe-button-image"onClick={()=>{
                    swal({
                        title: "Recipe added to meal planner!",
                        icon: "success",
                        timer: 1500,
                        buttons: false,
                        className: "swal"
                    });
                    MealPlannerService.create(recipe);
                }} src="https://icons.iconarchive.com/icons/martz90/circle-addon1/48/text-plus-icon.png" width="25px"/>

            </div>
            </>
        )
    });

    return(
        <>
        <div className="recipe-book-link-container">
        {listOfRecipes}
        </div>
        </>
    );
};

export default RecipesList;