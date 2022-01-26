import {useState} from "react";

const AddRecipe = ({addRecipe})=>{

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [unit, setUnit] = useState("");
    const [ingredient, setIngredient] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [method, setMethod] = useState("");

    const handleNameChange = (ev) => setName(ev.target.value);
    const handleAmountChange = (ev) => setAmount(ev.target.value);
    const handleUnitChange = (ev) => setUnit(ev.target.value);
    const handleIngredientChange = (ev) => setIngredient(ev.target.value);
    const handleMethodChange = (ev) => setMethod(ev.target.value);

    const handleIngredientClick = (e)=>{
        e.preventDefault();
        const newIngredient =
            {amount : amount,
             unit : unit,
             ingredient: ingredient
            };
        // console.log(newIngredient)
        setIngredients([...ingredients, newIngredient]);
        setIngredient("");
        // document.getElementById("ingredient").reset();
        setUnit("");
        // document.getElementById("unit").reset();
        setAmount("");
        // document.getElementById("amount").reset();
    };

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     addRecipe({
    //         name: name,
    //         ingredients:[],
    //         method: method,
    //     });
    //     setName("");
    //     setIngredient("");
    //     setUnit("");
    //     setAmount("");
    //     setIngredients([]);
    //     setMethod("");
    // };
    return(
        <>
        
        <h2>Add a Recipe</h2>
        <form  id="recipe-form" >
            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input onChange={handleNameChange} type="name" id="name"  />
            </div>
            <div className="formWrap">
                <label htmlFor="ingredients">Ingredients:</label>
                <label htmlFor="amount">Amount:</label>
                <input onChange={handleAmountChange} type="number" id="amount"  />
                <label htmlFor="unit">Unit:</label>
                <input onChange={handleUnitChange} type="text" id="unit"  />
                <label htmlFor="ingredient">Ingredient:</label>
                <input onChange={handleIngredientChange} type="text" id="ingridient"  />
                <button onClick={handleIngredientClick}>Add Ingredient</button>
            </div>
            <div className="formWrap">
                <label htmlFor="method">Method:</label>
                <input onChange={handleMethodChange} type="text" id="method"  />
            </div>


            <input type="submit" value="Save" id="save"/>
	    </form>
        </>
        )
    }

export default AddRecipe;