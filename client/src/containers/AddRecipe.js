import {useState} from "react";

const AddRecipe = ({addRecipe})=>{

    const [name, setName] = useState("");
    // const [amount, setAmount] = useState("");
    // const [unit, setUnit] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [method, setMethod] = useState("");



    const handleNameChange = (ev) => setName(ev.target.value);
    // const handleAmountChange = (ev) => setAmount(ev.target.value);
    // const handleUnitChange = (ev) => setUnit(ev.target.value);
    const handleIngredientsChange = (ev) => setIngredients(ev.target.value);
    const handleMethodChange = (ev) => setMethod(ev.target.value);

    const handleSubmit = (e) =>{
        e.preventDefault();
        addRecipe({
            name: name,
            ingredients:[],
            method: method,
        });
        setName("");
        setIngredients([]);
        setMethod("");
    }
    return(
        <>
        
        <h2>Add a Recipe</h2>
        <form onSubmit={handleSubmit} id="recipe-form" >
            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input onChange={handleNameChange} type="name" id="name"  />
            </div>
            <div className="formWrap">
                <label htmlFor="ingredients">Ingredients:</label>
                <input onChange={handleIngredientsChange} type="text" id="ingridients"  />
            </div>
            <div className="formWrap">
                <label htmlFor="method">Method:</label>
                <input onChange={handleMethodChange} type="text" id="method"  />
            </div>


            <input type="submit" value="Save" id="save"/>
	    </form>

        </>
    );
};

export default AddRecipe;