import React, {useEffect, useState} from "react";


const Recipe = ({recipe, onRecipeClick})=>{

    const handleClick = function() {
        onRecipeClick(recipe);
    };

    // const getIngredients = recipe.ingredients.map(ingredient => {
    //         return(ingredient.name);
    // };
    
    return(
        <>
        <div onClick = {handleClick}>
        <p>{recipe.name}</p>
        {/* <p>{getIngredients}</p> */}
        <p>{recipe.method}</p>
        <p></p>
        </div>
        </>
    );
};

export default Recipe;