import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import './App.css'

// pages and components
import Dashboard from "./pages/Dashboard/dashboard";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";
import Project from "./pages/Project/project";
import Create from "./pages/Create/create";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { useAuthContext } from './hooks/useAuthContext'


function App() {
    const { user, authIsReady } = useAuthContext()

  return (
        <div className="App">
            {authIsReady && (
                    <BrowserRouter>
                        <SideBar />
                        <div className="container">
                            <NavBar />
                            <Switch>
                                <Route exact path="/" >
                                    {!user && <Redirect to="/login" />}
                                    {user && <Dashboard />}
                                </Route>
                                <Route path="/create">
                                    {!user && <Redirect to="/login" />}
                                    {user && <Create />}
                                </Route>
                                <Route path="/projects/:id">
                                    {!user && <Redirect to="/login" />}
                                    {user && <Project />}
                                </Route>
                                <Route path="/login" >
                                    {user && <Redirect to="/" />}
                                    {!user && <Login />}
                                </Route>
                                <Route path="/signup">
                                    {user && <Redirect to="/" />}
                                    {!user && <Signup />}
                                </Route>
                            </Switch>
                        </div>
                    </BrowserRouter>
            )}
        </div>
  );
}

export default App