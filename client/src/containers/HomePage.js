import react from "react";
import { useNavigate } from "react-router-dom";

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
            <div onClick={() => handleClick("/addrecipe")}>
                <p>Add Recipe</p>
            </div>
            <div onClick={() => handleClick("/recipebook")}>
                <p>Recipe Book</p>
            </div>
            <div onClick={() => handleClick("/planner")}>
            <p>Weekly Planner</p>
            </div>
            <div onClick={() => handleClick("/shoppingList")}>
                <p>Shopping List</p>
            </div>
        </>
    );
};

export default HomePage;