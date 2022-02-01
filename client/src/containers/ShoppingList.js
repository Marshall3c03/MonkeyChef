import React, {useState, useEffect} from "react";
import "../static/CSS/shoppinglist.css";

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

    // condensedShoppingList.push(shoppingList[0])

    // for (let item of shoppingList) {
    //   const checkIfObjectExists = condensedShoppingList.indexOf(item.ingredient);
    //           console.log("condensed list: ", condensedShoppingList);
    //           console.log("item ingredient: ", item.ingredient);
    //           console.log("check if object exists: ", checkIfObjectExists);
    //   if (checkIfObjectExists >= 0 && item.unit === condensedShoppingList[checkIfObjectExists].unit) {
    //           console.log("this is the if");
    //     condensedShoppingList[checkIfObjectExists].unit += item.unit;
    //   } else {
    //           console.log("this is the else")
    //     condensedShoppingList.push(item);
    //   }
    // }


    const loopedList = {};

    console.log("Shopping List: ", shoppingList)
    for (let item of shoppingList) {

      const ingNames = Object.keys(loopedList);
      // const ingUnits = Object.keys(ingNames);
      console.log('ingNames: ', ingNames)
      
      let found = false;
      const name = item.ingredient.toLowerCase();
      const amount = item.amount;
      let unit = item.unit;
      let details = {"unit" : unit, "amount": amount};
      // console.log("details: ", details);

      // console.log("before looped list: ", loopedList)

      for (let ingName of ingNames){
        // console.log(`looped list ${name}: `, loopedList)
        if (loopedList[name] !== undefined) {
          //if (loopedList[name]["unit"] !== undefined) {
            if (ingName === name) {
                found = true
            }
          //}
      }
    }
      if(found){
        loopedList[name]["amount"] += details["amount"];
      } else {
        loopedList[name] = details
      };
      // if (loopedList[name]["unit"] != undefined) {
        // console.log("accessing unit: ", loopedList[name]["unit"])
      // }
    };

    let condensedList = Object.entries(loopedList);

    console.log("condensed list", condensedList);

    let listItems = condensedList.map((item, index) => {
      console.log("item:", item)
      return (
  <div>
    <input type="checkbox" id="checkbox" name="items"/>
    <li key={index}>{item[1]["amount"]} {item[1]["unit"]} {item[0]}</li>
  </div>
      )
    })
        
    
    return(
        <>
            <h1>Shopping List</h1>
            <div>
                {listItems}
            </div>
        </>
    );
};

export default ShoppingList;