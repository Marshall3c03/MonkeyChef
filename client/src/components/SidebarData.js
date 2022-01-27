import React from 'react'

export const SidebarData = [
    {
        onClick: (navigate) => navigate('/'),
        icon: 'https://icons.iconarchive.com/icons/graphicloads/100-flat/48/home-icon.png',
        cName: 'nav-text'
    },
    {
        onClick: (navigate) => navigate('/addrecipe'),
        icon: 'https://icons.iconarchive.com/icons/martz90/circle-addon1/48/text-plus-icon.png',
        cName: 'nav-text'
    },
    {
        onClick: (navigate) => navigate('/recipebook'),
        icon: 'https://icons.iconarchive.com/icons/iconsmind/outline/48/Books-2-icon.png',  
        cName: 'nav-text'  
    },
    {
        onClick: (navigate) => navigate('/planner'),
        icon: 'https://icons.iconarchive.com/icons/youthedesigner/new-year/48/calendar-icon.png', 
        cName: 'nav-text'   
    },
    {
        onClick: (navigate) => navigate('/shoppinglist'),
        icon: 'https://icons.iconarchive.com/icons/graphicloads/100-flat/48/cart-icon.png',
        cName: 'nav-text'    
    },
]