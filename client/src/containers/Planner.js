import React, {useState, useEffect} from "react";
import MealPlannerService from "./MealPlannerService";


const Planner = ()=>{

    const PlannerApi = [
        {
          name: "planner", 
          url: "http://localhost:5000/api/planner"
        }
      ]

    const [recipesList, setRecipesList] = useState([]);

    useEffect(() => {
        loadAllRecipesInPlanner(PlannerApi[0].url)
        console.log(recipesList)
    }, [])

    const loadAllRecipesInPlanner = url => {
        fetch(url)
        .then(result => result.json())
        .then(recipesJson => setRecipesList(recipesJson))
    }

    // MealPlannerService.createRecipe(recipe, url)

    // make a dropdown menu

    const plannerList= recipesList?.map(recipe=>{

        const recipeIngredientList = recipe.ingredients.map(ingredient => {
            return(
                <p>{ingredient.amount} {ingredient?.unit} {ingredient.ingredient} </p>
            )
        })
    

        return(
        <>
            {/* <p>{recipe._id}</p> */}
            <p><b>{recipe.name}</b></p>
            <h4>ingredients</h4>
            {recipeIngredientList}
            {/* <p>{recipe.ingredients.ingredient}</p> */}
        </>
    )})

    const addButtons = ()=>{
        return(
            <div className="Button-container">
                <p className="add">+</p>
            </div>
            
        )
    }

//   IF there is a recipe in the planner database, display it as one of the 7 buttons ..

//   if there is no recipes in the planner.. display 7 add buttons

//   count varialbe = 7

//   if (recipelist > 0) {
//       const count = 7
//       recipesList.length = 2

//       const remaining buttons = count - recipesList.length

//       recipesList.map(recipe => {
//           return(
//               <div>
//                   <img>recipe.image</img>
//                   <p>recipe.name</p>
//               </div>
//           )
//       })

//       return (
          
//       )
//   }

    return(
        <>
            <h1>Planner</h1>
            {plannerList}
            <div className="link-container">
                <div className="button-group">
                    <p className="button-title" >+</p>
                </div>
                <div className="button-group">
                    <p className="button-title" >+</p>
                </div>
                <div className="button-group">
                    <p className="button-title" >+</p>
                </div>
                <div className="button-group">
                    <p className="button-title" >+</p>
                </div>
                <div className="button-group">
                    <p className="button-title" >+</p>
                </div>
                <div className="button-group">
                    <p className="button-title" >+</p>
                </div>
                <div className="button-group">
                    <p className="button-title" >+</p>
                </div>
            </div>
        </>
    );
};

export default Planner; 