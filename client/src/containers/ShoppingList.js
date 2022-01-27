import React, {useState, useEffect} from "react";

const ShoppingList = () => {

//     const RecipesApi = [
//         {
//           name: "recipes", 
//           url: "http://localhost:5000/api/recipes"
//         }
//       ]
  
//       const [recipesList, setRecipesList] = useState([]);
//     //   const [shoppingList, setShoppingList] = useState([]);

//       const shoppingList = [];
//       const condensedList = [];
  
//       useEffect(() => {
//         loadRecipes(RecipesApi[0].url)
//         }, []);
      
//       const loadRecipes = url => {
//         fetch(url)
//           .then(result => result.json())
//           .then(recipesJson => setRecipesList(recipesJson))
//       }

//     //   const condenseShoppingList = shoppingList.map(ingredient => {
//             // return ingredient.name;
//     //   })


//       let listOfIngredients = recipesList.map(recipe => {

//         const fullIngredientDetails = recipe.ingredients.map(ingredient => {

//             shoppingList.push(ingredient);

//             return (
//                 <>
//                 {ingredient.amount}{ingredient.unit} {ingredient.ingredient}<br />
//                 </>
//                 )})

//         return(
//             <div>
//                 {/* {listOfIngredients} */}
//                 {fullIngredientDetails}
//             </div>
//         )
//     });

//     // console.log(shoppingList);

//     condensedList.push(shoppingList[0]);

//     // console.log(condensedList);

//     const mapShoppingList = shoppingList.map(result => {
//         const index = 10;
//         condensedList.indexOf(result.ingredient)
//         if (result.ingredient ==  shoppingList[index].ingredient && result.unit == shoppingList[index].unit) {
//             shoppingList[index].amount += result.amount
//         }
//         index ++;
//         condensedList.push(result);
//     })

//         console.log(condensedList);


//     return(
//         <>
//             <h1>Shopping List</h1>
//             <p>
//                 {listOfIngredients}
//                 {mapShoppingList}
//             </p>
//         </>
//     );
// };

return(
  null
)}

export default ShoppingList;