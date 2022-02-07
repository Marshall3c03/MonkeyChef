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


    const loopedList = {};

    for (let item of shoppingList) {

      const ingNames = Object.keys(loopedList);
      
      let found = false;
      const name = item.ingredient.toLowerCase();
      const amount = item.amount;
      let unit = item.unit;
      let details = {"unit" : unit, "amount": amount};
      
      for (let ingName of ingNames){
        if (loopedList[name] !== undefined) {
          if (ingName === name) {
            found = true
          }
      }
    }
      if(found){
        loopedList[name]["amount"] += details["amount"];
      } else {
        loopedList[name] = details
      }
    };

    let condensedList = Object.entries(loopedList);

    let listItems = condensedList.map((item, index) => {
      return (
        <div>
          <input type="checkbox" id="checkbox" name="items"/>
          <label key={index}>{item[1]["amount"]} {item[1]["unit"]} {item[0]}</label>
        </div>
      )
    })
        
    return(
        <>
          <div className = "banner">
              <h1 className = "titles">
                  Shopping List
              </h1>
          </div>
            <div>
                {listItems}
            </div>
        </>
    );
};

export default ShoppingList;