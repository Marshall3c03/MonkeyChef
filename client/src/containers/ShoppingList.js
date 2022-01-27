import React, {useState, useEffect} from "react";

const ShoppingList = () => {


  
      const [recipesList, setRecipesList] = useState([]);
      const [shoppingList, setShoppingList] = useState([]);
 

      const condensedList = [];
      
      const loadRecipes = url => {
        fetch(url)
          .then(result => result.json())
          .then(recipesJson => setRecipesList(recipesJson))
      }



      let listOfIngredients = recipesList.map(recipe => {
          
        let fullIngredientList = recipe.ingredients.map(ingredient => {
            
            
            shoppingList.push(ingredient); 
            
            
            return (
                <>
                <a key="{ingredient}">{ingredient.amount}{ingredient.unit} {ingredient.ingredient}</a><br />
                </>

                   
        )})
        
        return(
            <div>
            {shoppingList}
            </div>
        )
        
    });
    

    const loopedList = {};

    for (let item of shoppingList){
      const keys = Object.keys(loopedList);
      let found = false;
      const name = item.ingredient.toLowerCase();
      const quantity = item.amount;

      console.log("These are the keys ", keys);
  

      for (let key of keys){
        if (name == key) { 
          found = true 
        }
      }

      console.log(found);
     

      if(found){
            
            loopedList[name] += quantity;
            console.log(loopedList[name]);
          }
      else {
            loopedList[name] = quantity;
            console.log(loopedList[name]);
          };
    
      
    }
    console.log(loopedList);


    
    return(
        <>
            <h1>Shopping List</h1>
            <div>
                {condensedList}
            </div>
        </>
    );
};

export default ShoppingList;