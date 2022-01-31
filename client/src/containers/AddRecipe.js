import {useState} from "react";
import MealRecipeService from "./MealRecipeService";
import "../static/CSS/addRecipeForm.css";


const AddRecipe = ({addRecipe})=>{

    const [name, setName] = useState("");
    const [amount, setAmount] = useState();
    const [unit, setUnit] = useState(undefined);
    const [ingredient, setIngredient] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [image, setImage] = useState();
    const [method, setMethod] = useState();
    const [servings, setServings]=useState();
    const [category, setCategory]= useState("");
    const [dietary,setDietary]=useState("");
    const [notes, setNotes]=useState("");


    const handleNameChange = (ev) => setName(ev.target.value);
    const handleAmountChange = (ev) => setAmount(parseFloat(ev.target.value));
    const handleUnitChange = (ev) => setUnit(ev.target.value === "" ? undefined : ev.target.value);
    const handleIngredientChange = (ev) => setIngredient(ev.target.value);
    const handleMethodChange = (ev) => setMethod(ev.target.value);
    const handleImageChange = (ev) => setImage(ev.target.value);
    const handleServingsChange = (ev) => setServings(parseInt(ev.target.value));
    const handleCategoryChange = (ev) => setCategory(ev.target.value);
    const handleDietaryChange = (ev) => setDietary(ev.target.value);
    const handleNotesChange=(ev)=>setNotes(ev.target.value);



    const clearState= ()=>{
        setName("");
        setIngredient("");
        setUnit(undefined);
        setAmount();
        setIngredients([]);
        setMethod("");
        setImage("");
        setServings();
        setCategory("");
        setDietary("");
        setNotes("");
    }
    
    const handleNewIngredientClick = (e) => {
        e.preventDefault();
        setAmount();
        setUnit(undefined);
        setIngredient("");
        // console.log("you clicked new ingredient")
        const newIngredient =
            {"amount" : amount,
             "unit" : unit,
             "ingredient": ingredient
            };
        setIngredients([...ingredients, newIngredient])
    };

    const  allIngredients = ()=>{
        return ingredients.map(ingredient =>{
            return(
                <p>{ingredient.amount} {ingredient.unit} {ingredient.ingredient} </p>
            )
        })
    };


    const handleSubmit = (e) =>{
        e.preventDefault()
        const newRecipe = {
            "name": name,
            "ingredients": ingredients,
            "image" : image,
            "method": method,
            "servings": servings,
            "category": category,
            "dietary":dietary,
            "notes": notes
        };
        MealRecipeService.create(newRecipe).then(() => clearState());
    };
    
    return(
        <>
       
        <div className="form-wrap">
            <form className="ingredient-form" onSubmit={handleNewIngredientClick} id="ingredient-form" >
            
                <table>  
                    <label className="ingredients" htmlFor="ingredients">Ingredients:</label>
            
                    <tr>
                    <td><label htmlFor="amount">Amount:</label></td>
                        <input onChange={handleAmountChange} type="number" step="any" id="amount" value={amount} required placeholder="Enter amount"/>
                    </tr>
                
                    <tr>
                        <td><label htmlFor="unit">Unit:</label></td>
                        <select onChange={handleUnitChange} type="text"  name="unit" id="unit" value={unit}>
                                <option value={undefined}></option>
                                <option value="cup">cup</option>
                                <option value="g">g</option>
                                <option value="kg">kg</option>
                                <option value="l">l</option>
                                <option value="ml">ml</option>
                                <option value="tbsp">tbsp</option>
                                <option value="tsp">tsp</option>
                        </select>
                    </tr>
            
                    <tr>
                        <td><label htmlFor="ingredient">Ingredient:</label></td>
                        <input onChange={handleIngredientChange} type="text" id="ingredient" value={ingredient}/>
                    </tr>
                    <tr>
                        <td colSpan="2"><input type="submit" value="+" id="save" border="0"/>   </td>
                    </tr>
                </table>      
                </form>

            

                <form  className="recipe-form"  method= "post" onSubmit={handleSubmit} id="recipe-form" >
                <table>
                    <tr>
                        <td><label htmlFor="name">Name:</label></td>
                        <input onChange={handleNameChange} type="name" id="name" value={name} required />
                    </tr>
                    <tr>
                        <td><label htmlFor="servings">Servings:</label></td>
                        <input onChange={handleServingsChange} type="number" value={servings}  id="servings" />
                    </tr> 
                    
                    <tr>
                        <td><label htmlFor="category">Category:</label></td>
                        <select onChange={handleCategoryChange} type="text"  name="category" id="category" value={category}>
                            <option value="breakfast">breakfast</option>
                            <option value="dinner">dinner</option>
                            <option value="lunch">lunch</option>
                            <option value="snack">snack</option>
                            <option value="sweet">sweet</option>          
                        </select>          
                    </tr> 
                    <tr>
                        <td><label htmlFor="dietary">Dietary:</label></td>
                        <select onChange={handleDietaryChange} type="text"  name="dietary" id="dietary" value={dietary}>
                            <option value="dairy-free">dairy-free</option>
                            <option value="gluten-free">gluten-free</option>
                            <option value="protein">protein</option>          
                            <option value="vegan">vegan</option>
                            <option value="vegetarian">vegetarian</option>
                        </select>          
                    </tr> 
                    <tr>
                        <td><label htmlFor="image">Image URL:</label></td>
                        <input onChange={handleImageChange} type="text" value={image}  id="image" />
                    </tr>    
            
                    <tr>
                        <td><label htmlFor="method">Method:</label></td>
                        <input onChange={handleMethodChange} type="text" id="method" value={method} />
                    </tr>
                    <tr>
                        <td><label htmlFor="notes">Notes:</label></td>
                        <input onChange={handleNotesChange} type="text" id="notes" value={notes} />
                    </tr>

                    {allIngredients()}
                    <tr>
                        <td colSpan="2"><input type="submit" value="Save" id="save"/></td>
                    </tr>    
                </table> 
            </form>
        </div>
    
        </>
        )
    }

export default AddRecipe;