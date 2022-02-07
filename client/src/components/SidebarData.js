import React from 'react'
import add from '../static/CSS/graphics/AddRecipeIcon.png'
import book from '../static/CSS/graphics/RecipeBookIcon.png'
import planner from '../static/CSS/graphics/WeeklyPlannerIcon.png'
import shoppinglist from '../static/CSS/graphics/ShoppingListIcon.png'
import logo from '../static/CSS/graphics/MonkeyChefLogoIcon.png'


export const SidebarData = [
    {
        onClick: (navigate) => navigate('/'),
        icon: logo,
        cName: 'nav-text'
    },
    {
        onClick: (navigate) => navigate('/addrecipe'),
        icon: add,
        cName: 'nav-text'
    },
    {
        onClick: (navigate) => navigate('/recipebook'),
        icon: book,
        cName: 'nav-text'  
    },
    {
        onClick: (navigate) => navigate('/planner'),
        icon: planner, 
        cName: 'nav-text'
    },
    {
        onClick: (navigate) => navigate('/shoppinglist'),
        icon: shoppinglist,
        cName: 'nav-text'    
    },
]