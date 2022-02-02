import React, {useState, useEffect, useMemo} from "react";
import MealPlannerService from "./MealPlannerService";
import '../static/CSS/planner.css'
import { useNavigate } from "react-router-dom";
import MealRecipeService from "./MealRecipeService";
import { nanoid } from 'nanoid'
import swal from "sweetalert";


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

    const [recipesInPlannerList, setrecipesInPlannerList] = useState([]);
    const [recipeBookList, setRecipeBookList] = useState([]);
    const [plannerDBList, setPlannerDBList] = useState([]);
    const [filteredRecipeBookList, setFilteredRecipeBookList] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    useEffect(() => {
        loadAllRecipes(PlannerApi[1].url);
    },[]);

    const loadAllRecipesInPlanner = (url, allRecipes) => {
        fetch(url)
            .then(result => result.json())
            .then(response => {
                const allRecipesInPlanner = allRecipes
                    .filter(r => response.some(p => p.recipeId === r._id));

                setrecipesInPlannerList(allRecipesInPlanner);
                setPlannerDBList(response);
                setRecipeBookList(allRecipes);
                setFilteredRecipeBookList(allRecipes);
            });
    };

    const loadAllRecipes = url => {
        fetch(url)
            .then(result => result.json())
            .then(async (allRecipes) => {
                await loadAllRecipesInPlanner(PlannerApi[0].url, allRecipes);
            })
    };

    const recipesSearchList = filteredRecipeBookList?.map(recipe=>{
            const handleAdding = ()=> {
                MealPlannerService.create(recipe)
                .then(savedRecipe => setrecipesInPlannerList([...recipesInPlannerList, savedRecipe]))
            } 
            return(
                <div className="planner-recipe-group" key={recipe._id}>
                    <div className="planner-recipe">
                        <img className="image" src={recipe.image} width="70px"/>
                        <p>{recipe.name}</p>
                        <img className="planner-button-add"onClick={() => {swal({
                        title: "Recipe added to meal planner!",
                        icon: "success",
                        timer: 2000,
                        buttons: false,
                        className: "swal"
                    })}, handleAdding} 
                        src="https://icons.iconarchive.com/icons/martz90/circle-addon1/48/text-plus-icon.png" width="25px"/>
                    </div>
                </div>
            )
        });    


    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        if (searchWord === "") {
            setFilteredRecipeBookList(recipeBookList);
        } else {
            setFilteredRecipeBookList(recipeBookList.filter((value) => {
                return value.name.toLowerCase().includes(searchWord.toLowerCase())
            }));
        }
    };

    const clearInput = () => {
        setWordEntered("");
        setFilteredRecipeBookList(recipeBookList);
    };
        
    const displayrecipesInPlannerList= useMemo(() => recipesInPlannerList?.map(recipe=>{

        const recipeId = recipe._id;

        const handleImageClick = ()=>{
            window.location.href = "/recipebook/" + recipe._id
        }

        return(
            <div className="button-group" key={ nanoid() }>
                <img onClick = {handleImageClick} className="button-image" src={recipe.image} width="100px"/>
                <p className="button-text">{recipe.name}</p>
                <img className="planner-button-delete"
                onClick={()=>{
                    swal({
                        title: "Are you sure?",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                        buttons: ['No!', 'Yes..'],
                        className: "swal-sure"
                    })
                    .then((willDelete) => {
                        if (willDelete) {
                            const plannerId = plannerDBList.find(p => p.recipeId === recipe._id)._id;

                            MealPlannerService.delete(plannerId).then(() => {
                                var array = [...recipesInPlannerList]; 
                                var index = array.indexOf(recipe)
                                if (index !== -1) {
                                    array.splice(index, 1);
                                    setrecipesInPlannerList(array);
                                }
                                });
                          swal("Poof! Recipe deleted!", {
                            icon: "error",
                            confirmButtonColor: '#329e75',
                            buttons: false,
                            timer: 1500,
                            className: "swal-delete"
                          });
                      }});;
                }} 
                src="https://findicons.com/files/icons/1262/amora/256/delete.png" width="25px"/>
            </div>
    )}), [recipesInPlannerList, plannerDBList]);

    return(
        <div>
            <div className="planner-overall-container">

                <div className="search">
                <div className="search">
                    <div className="searchInput">
                        <input onChange = {handleFilter}
                            type="text" 
                            value={wordEntered}
                            placeholder="Enter a recipe to search ..." /><button id = "clear-button" onClick={clearInput}>X</button>
                    </div>
                    </div>
                
                    <div className="data-result">
                    {recipesSearchList}
                    </div>
                </div>

                <div className="planner-overall">
                    <h1 className="planner-pagetitle">Planner</h1>
                    <div className="planner-link-container">
                        {displayrecipesInPlannerList}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Planner; 