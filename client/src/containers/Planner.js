import React, {useState, useEffect} from "react";
import MealPlannerService from "./MealPlannerService";

import '../static/CSS/planner.css'


const Planner = ({removeMeal})=>{

    const PlannerApi = [
        {
          name: "planner", 
          url: "http://localhost:5000/api/planner"
        }
      ]

    const [recipesList, setRecipesList] = useState([]);

    useEffect(() => {
        loadAllRecipesInPlanner(PlannerApi[0].url)
    },[])

    const loadAllRecipesInPlanner = url => {
        fetch(url)
        .then(result => result.json())
        .then(recipesJson => setRecipesList(recipesJson))
    }

    // make a dropdown menu

    // const handleRemove = ()=>{
    //     console.log("delete button was pressed")
    //     // console.log(recipe)
    //     // const recipeid = recipe._id;
    //     // const url = 'http://localhost:5000/api/planner/'
    //     // MealPlannerService.deleteRecipe(recipeid,url).then(()=>{
    //     //     removeMeal(recipeid)
    //     // })
    // }

    const plannerList= recipesList?.map(recipe=>{

        const recipeId = recipe._id;

        const recipeIngredientList = recipe.ingredients.map(ingredient => {
            
            return(
                <p>{ingredient.amount} {ingredient?.unit} {ingredient.ingredient} </p>
            
            )
        })



        return(
        <>
            {/* <div className="link-container"> */}
                <div className="button-group">
                    <img className="button-image" src={recipe.image} width="100px"/>
                    <p className="button-text">{recipe.name}</p>
                    <img onClick={()=>{
                        console.log(recipeId)
                        const url = 'http://localhost:5000/api/planner/'
                        MealPlannerService.deleteRecipe(recipeId,url)
                        console.log("You clicked the delete button")
                        console.log(url + recipeId)
                    }} src="https://findicons.com/files/icons/1262/amora/256/delete.png" width="25px"/>
                </div>
            {/* </div> */}
        </>
    )})


    return(
        <>
            <h1>Planner</h1>
            {/* <select type="select"></select> */}
            <div className="link-container">
                {plannerList}
            </div>
        </>
    );
};

export default Planner; 