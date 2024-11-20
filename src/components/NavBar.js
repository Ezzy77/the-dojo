import './NavBar.css'
import Temple from '../assets/temple.svg'
import {Link} from "react-router-dom";
import {useLogout} from "../hooks/useLogout";

export default function NavBar() {
    const {logout, isPending, error} = useLogout();
    return(
        <div className="navbar">
            <ul>
                <li className="logo">
                    <img src={Temple} alt="dojo logo" />
                    <span>The Dojo</span>
                </li>
                <li><Link to="/login"></Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li>
                    {!isPending && <button className="btn" onClick={logout}>Logout</button>}
                    {isPending && <button className="btn" onClick={logout} disabled>Logging out...</button>}
                </li>
            </ul>
        </div>
    )
}