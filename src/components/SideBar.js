import './SideBar.css'

import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'
import { NavLink} from "react-router-dom";
import Avatar from "./Avatar";
import {useAuthContext} from "../hooks/useAuthContext";

export default function SideBar() {
    const {user} = useAuthContext();
    return(
        <div className="sidebar">
            <div className="sidebar-content">
                <div className="user">
                    <Avatar src={user.photoURL} />
                    <p>Hey User</p>
                </div>
            </div>
            <nav className="links">
                <ul>
                    <li>
                        <NavLink exact to="/">
                            <img src={DashboardIcon} alt="dashboard icon" />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/create">
                            <img src={AddIcon} alt="add icon" />
                            <span>New Project</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}