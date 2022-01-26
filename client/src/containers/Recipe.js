import react, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";

const Recipe = () => {
    const navigate = useNavigate(); 
    const [currentRecipe,setCurrentRecipe] = useState(null);
    const {recipeId} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:5000/api/recipes/${recipeId}`)
            .then(result => result.json())
            .then(resultJson => setCurrentRecipe(resultJson))
    }, []);

    const fullIngredients = currentRecipe?.ingredients.map(ingredient => {
        return(
            <p>{ingredient.amount} {ingredient?.unit} {ingredient.ingredient}</p>
        )
    })

    return(
        <>
        <img 
            onClick={()=> { navigate(-1) }} 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/768px-Back_Arrow.svg.png" width="55px"
        />
            <p>RecipeID: {recipeId}</p>
            
            <h2>Recipe Name: {currentRecipe?.name}</h2>
            {fullIngredients}
            {/* // the questionmark means a Nullcoalesent meaning if current recipe has a value... then try index into name */}
            {/* If ingredient can produce a null or undefined for the value its trying to index into.. i.e units then put a ? before the .unit  */}
        </>
    );
};

export default Recipe;