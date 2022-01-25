import react from "react";


const NavBar = ()=>{
    return(
        <>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/recipebook">Recipe Book</a>
            </li>
            <li>
                <a href="/planner">Meal Planner</a>
            </li>
            <li>
                <a href="/shoppingList">Shopping List</a>
            </li>
            
        </ul>
        </>
    );
};

export default NavBar;