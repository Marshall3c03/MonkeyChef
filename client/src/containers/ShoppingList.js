import React, {useState, useEffect} from "react";

const ShoppingList = () => {

    const RecipesApi = [
        {
          name: "recipes", 
          url: "http://localhost:5000/api/planner"
        }
      ]
  
      const [recipesList, setDisplayedRecipesList] = useState([]);
      // const [shoppingList, setShoppingList] = useState([]);

      const shoppingList = [];
      // const condensedList = [];
  
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

    // const loopedList = []

    

    const loopedList = {};

    for (let item of shoppingList){
      // console.log(shoppingList)

      // const temporyItem = {
      //   name: item.ingredient.toLowerCase(),
      //   quantity: parseInt(item.amount),
      //   unit: item.unit
      // }

      // console.log("temporyItem: ", temporaryItem)


      const keys = Object.keys(loopedList);
      
      // console.log(item)
      let found = false;
      const name = item.ingredient.toLowerCase();

      // const quantityAndUnit = {quantity: "blarg",
      // unit: item.unit}

      const quantity = parseFloat(item.amount);
      let unit = item.unit;
      // console.log(unit)

      for (let key of keys){
        if (name == key) { 
          found = true
        }
      }
      if(found){
            loopedList[name] += quantity
      } else {
        loopedList[name] = quantity
      };
    };

  
    let condensedList = Object.entries(loopedList);

    let listItem = condensedList.map(items => {
      return (
        <li key={items}>{items[0]}: {items[1]} </li>
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