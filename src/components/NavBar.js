import './NavBar.css'
import Temple from '../assets/temple.svg'
import {Link} from "react-router-dom";
import {useLogout} from "../hooks/useLogout";
import {useAuthContext} from "../hooks/useAuthContext";

export default function NavBar() {
    const {logout, isPending, error} = useLogout();
    const {user} = useAuthContext();
    return(
        <div className="navbar">
            <ul>
                <li className="logo">
                    <img src={Temple} alt="dojo logo" />
                    <span>The Dojo</span>
                </li>

                {!user && (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </>
                )}

                {user && (
                <>
                    <li>
                        {!isPending && <button className="btn" onClick={logout}>Logout</button>}
                        {isPending && <button className="btn" onClick={logout} disabled>Logging out...</button>}
                    </li>
                </>
                )}

            </ul>
        </div>
    )
}