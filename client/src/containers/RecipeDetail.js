import React from "react";

const RecipeDetail = ({recipe, onRecipeClick})=>{

    const handleClick = function() {
        onRecipeClick(recipe);
    };
    
    return(
        <div>
            <div onClick = {handleClick}>
                <p>{recipe.name}</p>
                <p>{recipe.method}</p>
            </div>
        </div>
    );
};

export default RecipeDetail;