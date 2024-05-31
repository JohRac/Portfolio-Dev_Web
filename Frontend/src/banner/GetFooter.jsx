import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Link, NavLink, useLocation } from "react-router-dom"

export function GetFooter() {

    const location = useLocation()
    
    return (
        <footer>
            <div>
                <Link to="https://github.com/JohRac" target="_blank"><FontAwesomeIcon icon={faGithub} /></Link>
                <Link to="https://www.linkedin.com/in/joh-rackelboom/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Link>
            </div>
            {!location.pathname.includes("/Contact") && (
                <div id="contactBanner">
                    <span>blabla</span>

                    <NavLink to="/Contact" activeclassname="active">Contactez Moi</NavLink>
                </div>
            )}
        </footer>
    )
}