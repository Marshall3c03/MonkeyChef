import React, {useEffect, useState} from "react";


const Recipe = ({recipe, onRecipeClick})=>{

    const handleClick = function() {
        onRecipeClick(recipe);
    }
    
    return(
        <>
        <div onClick = {handleClick}>
        <p>{recipe.name}</p>
        <p></p>
        </div>
        </>
    );
};

export default Recipe;