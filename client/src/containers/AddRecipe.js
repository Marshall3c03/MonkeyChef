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
        setMethod("");
        setImage("");
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
        setIngredient("");
        setAmount();
        setUnit(undefined)
    };

    const allIngredients = ()=>{
        return ingredients.map(ingredient =>{
            return(
                <p>{ingredient.amount} {ingredient.unit} {ingredient.ingredient} </p>
            )
        })
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        const newRecipe = {
            "name": name,
            "ingredients": ingredients,
            "image" : image,
            "method": method,
        };
        const url = "http://localhost:5000/api/recipes"
        MealPlannerService.createRecipe(newRecipe, url).then(() => clearState());
    };
    
    return(
        <>
        <h2>Add a Recipe</h2>
        <form method= "post" onSubmit={handleSubmit} id="recipe-form" >
            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input onChange={handleNameChange} type="name" id="name" value={name} required />
            </div>
            <br/>
            <div>
                <label htmlFor="image">Image URL:</label>
                <input onChange={handleImageChange} type="text" value={image}  id="image" />
            </div>    
            <div className="formWrap">
                <label htmlFor="ingredients">Ingredients:</label>

                <br/>

                <label htmlFor="amount">Amount:</label>
                <input onChange={handleAmountChange} type="number" id="amount" value={amount}  required placeholder="Enter amount"/>

                <label htmlFor="unit">Unit:</label>
                <select onChange={handleUnitChange} name="unit" id="unit">
                        <option  value={unit}></option>
                        <option value="kg">Kg</option>
                        <option value="g">g</option>
                        <option value="l">L</option>
                        <option value="tbsp">tbsp</option>
                        <option value="ml">ml</option>
                        <option value="tsp">tsp</option>
                        <option value="cup">Cup</option>

                </select>


                <label htmlFor="ingredient">Ingredient:</label>
                <input onChange={handleIngredientChange} type="text" id="ingredient" value={ingredient}/>

                <button onClick={handleNewIngredientClick}>+</button>
            </div>
            <br/>
           
            <div className="formWrap">
                <label htmlFor="method">Method:</label>
                <input onChange={handleMethodChange} type="text" id="method" value={method} width="500px" />
            </div>
            {allIngredients()}
            <input type="submit" value="Save" id="save"/>
	    </form>

        
        </>
        )
    }

export default AddRecipe;