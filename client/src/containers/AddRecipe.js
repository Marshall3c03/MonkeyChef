import {useState} from "react";
import Recipe from "./Recipe";
import MealPlannerService from "./MealPlannerService";

const AddRecipe = ({addRecipe})=>{

    const [name, setName] = useState("");
    const [amount, setAmount] = useState();
    const [unit, setUnit] = useState(undefined);
    const [ingredient, setIngredient] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [image, setImage] = useState();
    const [method, setMethod] = useState();

    const handleNameChange = (ev) => setName(ev.target.value);
    const handleAmountChange = (ev) => setAmount(parseInt(ev.target.value));
    const handleUnitChange = (ev) => setUnit(ev.target.value);
    const handleIngredientChange = (ev) => setIngredient(ev.target.value);
    const handleMethodChange = (ev) => setMethod(ev.target.value);
    const handleImageChange = (ev) => setImage(ev.target.value);

    const clearState= ()=>{
        setName("");
        setIngredient("");
        setUnit(undefined);
        setAmount();
        setIngredients([]);
        setMethod();
        setImage();
    }
    
    const handleNewIngredientClick = (e) => {
        e.preventDefault();
        console.log("you clicked new ingredient")
        const newIngredient =
            {"amount" : amount,
             "unit" : unit,
             "ingredient": ingredient
            };
        setIngredients([...ingredients, newIngredient])
    };

    const allIngredients = ()=>{
        return ingredients.map(ingredient =>{
            return(
                <p>{ingredient.amount} {ingredient.unit} {ingredient.ingredient} </p>
            )
        })
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        const newIngredient =
            {"amount" : amount,
             "unit" : unit,
             "ingredient": ingredient
            };
        // console.log(newIngredient);
        ingredients.push(newIngredient);
        setIngredients([...ingredients, newIngredient]);
        // console.log(ingredients);
        const newRecipe = {
            "name": name,
            "ingredients": ingredients,
            // "amount": amount,
            // "unit": unit,
            "image" : image,
            "method": method,
        };
        MealPlannerService.createRecipe(newRecipe).then(() => clearState());
    };
    
    return(
        <>
        <h2>Add a Recipe</h2>
        <form method= "post" onSubmit={handleSubmit} id="recipe-form" >
            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input onChange={handleNameChange} type="name" id="name" required />
            </div>
            <div>
                <label htmlFor="image">Image URL:</label>
                <input onChange={handleImageChange} type="text" id="image" />
            </div>    
            <div className="formWrap">
                <label htmlFor="ingredients">Ingredients:</label>

                <label htmlFor="amount">Amount:</label>
                <input onChange={handleAmountChange} type="number" id="amount" value={amount} required placeholder="Enter amount"/>

                <label htmlFor="unit">Unit:</label>
                <input onChange={handleUnitChange} type="text" id="unit" value={unit}  />

                <label htmlFor="ingredient">Ingredient:</label>
                <input onChange={handleIngredientChange} type="text" id="ingridient" value={ingredient}/>

                <button onClick={handleNewIngredientClick}>+</button>
            </div>
            <div className="formWrap">
                <label htmlFor="method">Method:</label>
                <input onChange={handleMethodChange} type="text" id="method"  />
            </div>
            <input type="submit" value="Save" id="save"/>
	    </form>

        {allIngredients()}
        </>
        )
    }

export default AddRecipe;