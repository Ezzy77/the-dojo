import './NavBar.css'
import Temple from '../assets/temple.svg'
import {Link} from "react-router-dom";

export default function NavBar() {
    return(
        <div className="navbar">
            <ul>
                <li className="logo">
                    <img src={Temple} alt="dojo logo" />
                    <span>The Dojo</span>
                </li>
                <li><Link to="/login"></Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><button className="btn">Logout</button></li>
            </ul>
        </div>
    )
}