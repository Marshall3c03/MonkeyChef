import React from "react";
import { useNavigate } from "react-router-dom";
import Monkey from '../static/CSS/graphics/Monkey.wav';

import '../static/CSS/homepage.css';

const HomePage = ()=>{

    const monkey = new Audio (Monkey);

    React.useEffect(() => {
        monkey.play()
    }, [])

    const navigate = useNavigate();

    const handleClick = (url) => {
        navigate(url); // This is react routers cleaner way of doing window.location.href... use this!!.
    }

    return(
        <>
        <div className = "homepage-banner">
            <img className = "banner-image" src={require('../static/CSS/graphics/MonkeyChefLogo.png')}/>
                <div className = "banner-message">
                    Welcome to Monkey Chef!
                </div>
        </div>

        <div className="link-container">
            <div className="home-button-group" onClick={() => handleClick("/addrecipe")}>
                <img className="home-button-image" src={require('../static/CSS/graphics/AddRecipe.png')} width="100%"/>
                <p className="home-button-title" >Add <br />Recipe</p>
            </div>

            <div className="home-button-group" onClick={() => handleClick("/recipebook")}>
                <img className="home-button-image" src={require('../static/CSS/graphics/RecipeBook.png')} width="100%"/>
                <p className="home-button-title" >Recipe <br />Book</p>
            </div>

            <div className="home-button-group" onClick={() => handleClick("/planner")}>
                <img className="home-button-image" src={require('../static/CSS/graphics/WeeklyPlanner.png')} width="100%"/>
                <p className="home-button-title" >Weekly <br />Planner</p>
            </div>

            <div className="home-button-group" onClick={() => handleClick("/shoppingList")}>
                <img className="home-button-image" src={require('../static/CSS/graphics/ShoppingList.png')} width="100%"/>
                <p className="home-button-title" >Shopping <br />List</p>
            </div>
        </div>
        </>
    );
};

export default HomePage;