import react from "react";
import { SidebarData } from "./SidebarData";
import { useNavigate } from "react-router-dom";
import '../static/CSS/sidenav.css'

const SideNav = ( {})=>{

    const navigate = useNavigate();
    
    return(
        <>
        <nav className="nav-menu">
            <ul className="nav-menu-items">
                {SidebarData.map((item, index)=>{
                    return(
                        <li onClick={()=>item.onClick(navigate)} key={index} className={item.cName}>
                            <img className="navIcon" src={item.icon}/>
                        </li>
                    )})
                }
            </ul>
        </nav>
        </>
    );
};

export default SideNav;