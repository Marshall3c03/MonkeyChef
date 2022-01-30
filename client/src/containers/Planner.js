import React, {useState, useEffect, useMemo} from "react";
import MealPlannerService from "./MealPlannerService";




import '../static/CSS/planner.css'


function Planner({}){

    const PlannerApi = [
        {
            name: "planner", 
            url: "http://localhost:5000/api/planner"
        },
        {
            name: "recipe", 
            url: "http://localhost:5000/api/recipes"
          },
      ]

    const [recipesList, setRecipesList] = useState([]);
    const [recipeBookList, setRecipeBookList] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    useEffect(() => {
        loadAllRecipesInPlanner(PlannerApi[0].url);
        loadAllRecipes(PlannerApi[1].url);
    },[])

    const loadAllRecipesInPlanner = url => {
        fetch(url)
        .then(result => result.json())
        .then(recipesJson => setRecipesList(recipesJson))
    };

    const loadAllRecipes = url => {
        fetch(url)
        .then(result => result.json())
        .then(recipesJson => setRecipeBookList(recipesJson))
    };

    const recipesSearchList=recipeBookList?.map(recipeToSearch=>{
            const handleAdding = ()=> {
            const url = "http://localhost:5000/api/planner"
            MealPlannerService.createRecipe(recipeToSearch, url)
            } 

            const handleClick = ()=>{
                window.location.href = "/recipebook/" + recipeToSearch._id
            }
            return(
                <>
                <div className="recipe-group">
                    <div onClick={handleClick} className="recipe" >
                         <img className="image" src={recipeToSearch.image} width="70px"/>
                         <p>{recipeToSearch.name}</p>
                    </div>
                    <div>
                        <button onClick={handleAdding}>Add to Meal Plan</button>
                    </div>  
                </div>
                </> 
            )
        });    


    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        
        const newFilter = recipeBookList.filter((value) => {
          return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setRecipeBookList([]);
        } else {
            setRecipeBookList(newFilter);
        }
      };

    const clearInput = () => {
        setWordEntered("");
        setRecipeBookList([]);
      };
        
    const plannerList= useMemo(() => recipesList?.map(recipe=>{

        const recipeId = recipe._id;
        return(
        <>
                <div className="button-group">
                    <img className="button-image" src={recipe.image} width="100px"/>
                    <p className="button-text">{recipe.name}</p>
                    <img onClick={()=>{
                        // console.log(recipeId);
                        const url = 'http://localhost:5000/api/planner/';
                        MealPlannerService.deleteRecipe(recipeId,url);
                        // console.log("You clicked the delete button");
                        // console.log(url + recipeId);
                        var array = [...recipesList]; 
                        var index = array.indexOf(recipe)
                        if (index !== -1) {
                          array.splice(index, 1);
                          setRecipesList(array);
                        }
                    }} src="https://findicons.com/files/icons/1262/amora/256/delete.png" width="25px"/>
                </div>
        </>
    )}), [recipesList]);


    return(
        <>
            <h1>Planner</h1>
            <div className="link-container">
                {plannerList}
            </div>

            <div className="search">
                <div className="searchInput">
                    <input onChange = {handleFilter}
                           type="text" 
                           value={wordEntered}
                           placeholder="Enter a recipe to search ..." />
                    <div className="searchButton">
                        <button >Search</button>
                        <button onClick={clearInput}>Clear</button>
                     </div>
                </div>
              
                <div className="dataResult">
                {recipesSearchList}
                </div>
            </div>
        </>
    )
};

export default Planner; 