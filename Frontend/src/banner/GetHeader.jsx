import { NavLink } from "react-router-dom"
import logoPortfolio from "../assets/logoPortfolio.png"

export function GetHeader () {
    return (
        <header>
            <img src={logoPortfolio} alt="Coding Developers"/>
            <nav>
                <NavLink exact="true" to="/" activeclassname="active">Introduction</NavLink>
                <NavLink to="/Projets" activeclassname="active">Projets</NavLink>
                <NavLink to="/Contact" activeclassname="active">Contact</NavLink>
            </nav>
        </header>
    )
}