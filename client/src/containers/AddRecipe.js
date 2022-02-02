import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MealRecipeService from "./MealRecipeService";
import swal from "sweetalert";
import "../static/CSS/addRecipeForm.css";

const AddRecipe = ()=>{

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [unit, setUnit] = useState(undefined);
    const [ingredient, setIngredient] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [image, setImage] = useState();
    const [method, setMethod] = useState();
    const [servings, setServings]=useState(undefined);
    const [category, setCategory]= useState("");
    const [dietary,setDietary]=useState("");
    const [notes, setNotes]=useState("");
    const {recipeId} = useParams();

    useEffect(()=>{
        if(recipeId){
            MealRecipeService.getById(recipeId)
                .then(resultJson => {
                    setName(resultJson.name);
                    setAmount(resultJson.amount);
                    setUnit(resultJson.unit);
                    setIngredient(resultJson.ingredient);
                    setIngredients(resultJson.ingredients);
                    setImage(resultJson.image);
                    setMethod(resultJson.method);
                    setNotes(resultJson.notes);
                    setServings(resultJson.servings);
                    setCategory(resultJson.category);
                    setDietary(resultJson.dietary);
                });
        }
    }, {});

    const handleNameChange = (ev) => setName(ev.target.value);
    const handleAmountChange = (ev) => setAmount(parseFloat(ev.target.value));
    const handleUnitChange = (ev) => setUnit(ev.target.value === "" ? undefined : ev.target.value);
    const handleIngredientChange = (ev) => setIngredient(ev.target.value);
    const handleMethodChange = (ev) => setMethod(ev.target.value);
    const handleImageChange = (ev) => setImage(ev.target.value);
    const handleServingsChange = (ev) => setServings(parseInt(ev.target.value === "" ? undefined : ev.target.value));
    const handleCategoryChange = (ev) => setCategory(ev.target.value);
    const handleDietaryChange = (ev) => setDietary(ev.target.value);
    const handleNotesChange=(ev)=>setNotes(ev.target.value);

    const clearState= ()=>{
        setName("");
        setIngredient("");
        setUnit("");
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
                <p className="ingredient-text">{ingredient.amount} {ingredient.unit} {ingredient.ingredient} </p> 
            )
        })
    };

    const handleSubmit = (e) =>{
        if(recipeId){
            e.preventDefault()
            const updatedRecipe = {
                "id": recipeId,
                "name": name,
                "ingredients": ingredients,
                "image" : image,
                "method": method,
                "servings": servings,
                "category": category,
                "dietary":dietary,
                "notes": notes,
                "amount" : amount,
                "unit" : unit,
                "ingredient": ingredient
            };
            MealRecipeService.update(updatedRecipe).then(() => clearState());
        } else {
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
        }
        setTimeout(navigate('/recipebook'),10000)
    };
    
    return(
        <div>
            <h1 className="add-recipe-title">Recipe Form</h1>
            <div className="add-recipe-form-container">
                <form className="ingredient-form" onSubmit={handleNewIngredientClick} id="ingredient-form" >
                    <table>  
                        <label className="ingredients" htmlFor="ingredients">Ingredients:</label>
                        <tr>
                        <td><label htmlFor="amount">Amount:</label></td>
                            <input className="input-add-recipe" onChange={handleAmountChange} type="number" step="any" id="amount" value={amount} required placeholder="Enter amount"/>
                        </tr>
                        <tr>
                            <td><label htmlFor="unit">Unit:</label></td>
                            <select className="select-option-recipe" onChange={handleUnitChange} type="text" id="unit" value={unit}>
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
                            <input className="input-add-recipe-ingredient" onChange={handleIngredientChange} type="text" id="ingredient" value={ingredient}/>
                            <a className="plus" colSpan="2"><input type="submit" value="+" id="save" border="0"/></a>
                            </tr>
                    </table>      
                        {allIngredients()}
                    </form>
                    <form  className="recipe-form"  method= "post" onSubmit={handleSubmit} id="recipe-form" >
                    <table>
                        <tr>
                            <td><label htmlFor="name">Name:</label></td>
                            <input className="input-add-recipe" onChange={handleNameChange} type="name" id="name" value={name} required />
                        </tr>
                        <tr>
                            <td><label htmlFor="servings">Servings:</label></td>
                            <input className="input-add-recipe" onChange={handleServingsChange} type="number" value={servings}  id="servings" />
                        </tr> 
                        <tr>
                            <td><label htmlFor="category">Category:</label></td>
                            <select className="select-option-recipe" onChange={handleCategoryChange} type="text" id="category" value={category}>
                                <option value="empty"></option>
                                <option value="breakfast">breakfast</option>
                                <option value="dinner">dinner</option>
                                <option value="lunch">lunch</option>
                                <option value="snack">snack</option>
                                <option value="sweet">sweet</option>          
                            </select>          
                        </tr> 
                        <tr>
                            <td><label htmlFor="dietary">Dietary:</label></td>
                            <select className="select-option-recipe" onChange={handleDietaryChange} type="text" id="dietary" value={dietary}>
                                <option value="empty"></option>   
                                <option value="dairy-free">dairy-free</option>
                                <option value="gluten-free">gluten-free</option>
                                <option value="protein">protein</option>          
                                <option value="vegan">vegan</option>
                                <option value="vegetarian">vegetarian</option>
                            </select>          
                        </tr> 
                        <tr>
                            <td><label htmlFor="image">Image URL:</label></td>
                            <input className="input-add-recipe" className="add-recipe-imageurl" onChange={handleImageChange} type="text" value={image}  id="image" />
                        </tr>    
                        <tr>
                            <td><label htmlFor="method">Method:</label></td>
                            <textarea onChange={handleMethodChange} type="text" cols="30" rows="10" id="method" value={method} />
                        </tr>
                        <tr>
                            <td><label htmlFor="notes">Notes:</label></td>
                            <textarea onChange={handleNotesChange} type="text" cols="30" rows="10" id="notes" value={notes} />
                        </tr>
                        <tr>
                            <td className="save" colSpan="2">
                                <div className="add-recipe-save">
                                    <input type="submit" value="Save" id="save" onClick = {() => {swal({
                                            title: "Recipe added to meal planner!",
                                            icon: "success",
                                            timer: 1500,
                                            buttons: false,
                                            className: "swal"
                                        })}}/>
                                </div>
                            </td>
                        </tr>    
                    </table> 
                </form>
            </div>
        </div>
        )
    }

export default AddRecipe;