import react from "react";


const RecipesList = ({recipes})=>{

    const listOfRecipes = recipes.map(recipe => {

        const fullIngredients = recipe.ingredients.map(ingredient => {
            return(
                <p>{ingredient.amount} {ingredient.unit} {ingredient.ingredient}</p>
            )
        })

        return(
            <div>
                <a href="/recipes/{recipe[_id]}">{recipe.name}</a>
                {fullIngredients}
                {/* <a href="/recipes/{recipe[_id]}">{recipe._id}</a> */}
                {/* <p>{recipe.ingredients[0].amount} </p> */}
                <p>{recipe.method}</p>
            </div>
        )
    });

    return(
        <>
        {listOfRecipes}
        </>
    );
};

export default RecipesList;