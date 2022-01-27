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
        <div onClick={() => handleClick("/")}>
            <h1>Home Page</h1>
        </div>

        <div className="link-container">
            <div className="button-group" onClick={() => handleClick("/addrecipe")}>
                <p className="button-title" >Add Recipe</p>
                <img className="button-image" src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-add-icon.png" width="100px" height="100px"/>
            </div>

            <div className="button-group" onClick={() => handleClick("/recipebook")}>
                <p className="button-title" >Recipe Book</p>
                <img className="button-image"src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Book-icon-bible.png" width="100px" height="100px"/>
            </div>

            <div className="button-group" onClick={() => handleClick("/planner")}>
                <p className="button-title" >Weekly Planner</p>
                <img className="button-image" src="https://i.pinimg.com/originals/d2/28/d0/d228d012b5f3852abb2b66d9da526801.png" width="100px" height="100px"/>
            </div>

            <div className="button-group" onClick={() => handleClick("/shoppingList")}>
                <p className="button-title" >Shopping List</p>
                <img className="button-image" src="https://cdn.iconscout.com/icon/free/png-256/shopping-list-2923133-2434627.png" width="100px" height="100px"/>
            </div>
        </div>
        </>
    );
};

export default HomePage;