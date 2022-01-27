import react, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";

const Recipe = () => {
    const navigate = useNavigate(); 
    const [currentRecipe,setCurrentRecipe] = useState(null);
    const [servings, setServings] = useState(1);
    const {recipeId} = useParams();
    
    const handleMinus = function() {
        if (servings > 1) {
            setServings(servings - 1);
        }
    };

    const handlePlus = function() {
        setServings(servings + 1);
    };

    const numOfServings = 4;

    const roundedIngredient = function(number) {
        if (Number.isInteger(number)) {
            return number;
        } else {
            return Math.ceil(number/5) * 5;
        };
    };

    useEffect(()=>{
        fetch(`http://localhost:5000/api/recipes/${recipeId}`)
            .then(result => result.json())
            .then(resultJson => setCurrentRecipe(resultJson))
    }, []);

    const fullIngredients = currentRecipe?.ingredients.map((ingredient) => {

        const perDesiredPortions = (ingredient.amount/numOfServings) * servings;
        
        return(
            <>
            <p>{roundedIngredient(perDesiredPortions)}{ingredient?.unit} {ingredient.ingredient}</p>
            </>
        )
    })

    return(
        <>
        <img 
            onClick={()=> { navigate(-1) }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/768px-Back_Arrow.svg.png" width="55px"
        />
            <p>RecipeID: {recipeId}</p>
            <div>
                <button onClick = {handleMinus}>-</button> {servings} <button onClick = {handlePlus}>+</button>
            </div>
            
            <h2>Recipe Name: {currentRecipe?.name}</h2>
            {fullIngredients}
            {/* // the questionmark means a Nullcoalesent meaning if current recipe has a value... then try index into name */}
            {/* If ingredient can produce a null or undefined for the value its trying to index into.. i.e units then put a ? before the .unit  */}
        </>
    );
};

export default Recipe;