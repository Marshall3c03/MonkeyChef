import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import MealPlannerService from "./MealPlannerService";
import MealRecipeService from "./MealRecipeService";
import '../static/CSS/recipe.css';

const Recipe = () => {
    const navigate = useNavigate();
    const [currentRecipe,setCurrentRecipe] = useState(null);
    const [servings, setServings] = useState(4);
    const [mealAddedToPlanner, setMealAddedToPlanner] = useState(null);
    const {recipeId} = useParams();

    useEffect(()=>{
        MealRecipeService.getById(recipeId)
            .then(resultJson => setCurrentRecipe(resultJson))
    }, []);
    
    const handleMinus = function() {
        if (servings > 1) {
            setServings(servings - 1);
        }
    };

    const handlePlus = function() {
        setServings(servings + 1);
    };

    const handleDelete = ()=>{
        MealRecipeService.delete(recipeId)
        setTimeout(()=>navigate("/recipebook"),500)
    }

    const numOfServings = currentRecipe?.servings;

    const handleAdding = ()=> {
        MealPlannerService.create(currentRecipe)
        setMealAddedToPlanner(<button>&#10004; Recipe added to Planner</button>)
    };

    const handleUpdate=()=>{
        MealRecipeService.update(recipeId);
        navigate(`/update-recipe/${recipeId}`);
    }

    let counter = 1;

    const fullIngredients = currentRecipe?.ingredients.map((ingredient) => {

        const perDesiredPortions = ((ingredient.amount/numOfServings) * servings).toFixed(1);
        
        counter += 1; 
        return(
            <div key={counter}>
            <p><b>{perDesiredPortions} {ingredient?.unit}</b> {ingredient.ingredient}</p>
            </div>
        )
    })

    return(
        <div className="recipe">
        <h1><img 
            onClick={()=> { navigate(-1) }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/768px-Back_Arrow.svg.png" width="35px"
        /> {currentRecipe?.name}</h1>
            <table>
                <tbody>
                    <td>
                        <div className="core-recipe-details"> 
                            <img className="recipe-avatar" src={currentRecipe?.image}/>
                           <div className="recipe-serving-buttons"> Serves <button onClick = {handleMinus}>-</button> {servings} <button onClick = {handlePlus}>+</button></div>
                        </div>
                        {fullIngredients}
                    </td>
                    <td width = "70%">
                        <p><b>Method: </b> {currentRecipe?.method}</p>
                        <p><b>Notes: </b>{currentRecipe?.notes}</p>
                        <p><b>Category: </b>{currentRecipe?.category} </p>
                        <p><b>Dietary: </b>{currentRecipe?.dietary} </p>
                        <p><b>Recommended Servings: </b>{currentRecipe?.servings} </p>
                    </td>
                </tbody>
            </table>
            <button onClick={handleDelete}>Delete Recipe</button>
            <button onClick={handleAdding}>Add Recipe to Meal Plan</button>
            <button onClick={handleUpdate}>Update Recipe</button>

                    {mealAddedToPlanner}
        </div>
            /* // the questionmark means a Nullcoalesent meaning if current recipe has a value... then try index into name */
            /* If ingredient can produce a null or undefined for the value its trying to index into.. i.e units then put a ? before the .unit  */
    );
};

export default Recipe;