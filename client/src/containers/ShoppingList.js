import React, {useState, useEffect} from "react";

const ShoppingList = () => {

    const RecipesApi = [
        {
          name: "recipes", 
          url: "http://localhost:5000/api/planner"
        }
      ]
  
      const [recipesList, setDisplayedRecipesList] = useState([]);

      const shoppingList = [];
      let condensedShoppingList = [];
  
      useEffect(() => {
        loadRecipes(RecipesApi[0].url)
        }, []);
      
      const loadRecipes = url => {
        fetch(url)
          .then(result => result.json())
          .then(recipesJson => setDisplayedRecipesList(recipesJson))
      }



      let listOfIngredients = recipesList.map(recipe => {
          
        let fullIngredientList = recipe.ingredients.map(ingredient => {
            
            shoppingList.push(ingredient);
            
            return (
                <>
                <a>{ingredient.amount}{ingredient.unit} {ingredient.ingredient}</a><br />
                </>
                   
        )})
        
    });

    // const foundItemId = function(ingredientName) {
    //   shoppingList.
    // }


    for (let item of shoppingList) {
      const checkIfObjectExists = condensedShoppingList.indexOf(item.ingredient);
              console.log("condensed list: ", condensedShoppingList);
              console.log("item ingredient: ", item.ingredient);
              console.log("check if object exists: ", checkIfObjectExists);
      if (checkIfObjectExists >= 0 && item.unit === condensedShoppingList[checkIfObjectExists].unit) {
              console.log("this is the if");
        condensedShoppingList[checkIfObjectExists].unit += item.unit;
      } else {
              console.log("this is the else")
        condensedShoppingList.push(item);
      }
    }

    console.log("shopping list: ", shoppingList);
    console.log("condensed shopping list: ", condensedShoppingList);

    // const loopedList = [];

    // for (let item of shoppingList) {

    //   const keys = Object.keys(loopedList);
      
    //   let found = false;
    //   const name = item.ingredient.toLowerCase();
    //   const quantity = parseFloat(item.amount);
    //   let unit = item.unit;


    //   for (let key of keys){
    //     if (name == key) { 
    //       found = true
    //     }
    //   }
    //   if(found){
    //         loopedList[name] += quantity
    //   } else {
    //     loopedList[name] = quantity
    //   };
    // };

    // let condensedList = Object.entries(loopedList);

    let listItem = condensedShoppingList.map(item => {
      return (
        <li key="{item._id}">{item.amount}{item.unit} {item.ingredient} </li>
      )
    })
    
    
    
    
    return(
        <>
            <h1>Shopping List</h1>
            <div>
                {listItem}
            </div>
        </>
    );
};

export default ShoppingList;