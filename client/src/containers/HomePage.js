import react from "react";
import { useNavigate } from "react-router-dom";

import '../static/CSS/homepage.css';

const HomePage = ()=>{
    const navigate = useNavigate();

    const handleClick = (url) => {
        navigate(url); // This is react routers cleaner way of doing window.location.href... use this!!.
    }

    return(
        <>
        <div className="banner-container">
            <div className="banner-group">
                <div className="banner-company-text">
                    <h2 className="banner-company-name">Rossipy</h2>
                    <h4 className="banner-company-slogan">Plan like a <b>BOSS,</b></h4>
                </div>
                <div className="banner-instructions">
                    <ul>
                        <li className="instruction1">
                            <a href="/addrecipe">Add a recipe</a>
                        </li>
                        <li className="instruction2">
                            <a href="/planner">Plan your meals</a>
                        </li>
                        <li className="instruction3">
                            <a href="/shoppinglist">Check your shoppinglist</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="link-container">
            <div className="home-button-group" onClick={() => handleClick("/addrecipe")}>
                <img className="home-button-image" src={require('../static/CSS/graphics/AddRecipe.png')} width="100%"/>
                <p className="button-title" >Add <br />Recipe</p>
            </div>

            <div className="home-button-group" onClick={() => handleClick("/recipebook")}>
                <img className="home-button-image" src={require('../static/CSS/graphics/RecipeBook.png')} width="100%"/>
                <p className="button-title" >Recipe <br />Book</p>
            </div>

            <div className="home-button-group" onClick={() => handleClick("/planner")}>
                <img className="home-button-image" src={require('../static/CSS/graphics/WeeklyPlanner.png')} width="100%"/>
                <p className="button-title" >Weekly <br />Planner</p>
            </div>

            <div className="home-button-group" onClick={() => handleClick("/shoppingList")}>
                <img className="home-button-image" src={require('../static/CSS/graphics/ShoppingList.png')} width="100%"/>
                <p className="button-title" >Shopping <br />List</p>
            </div>
        </div>
        </>
    );
};

export default HomePage;