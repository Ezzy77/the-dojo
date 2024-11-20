import {BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css'

// pages and components
import Dashboard from "./pages/Dashboard/dashboard";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";
import Project from "./pages/Project/project";
import Create from "./pages/Create/create";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import {AuthContextProvider} from "./context/AuthContext";


function App() {
  return (
      <AuthContextProvider>
        <div className="App">
          <BrowserRouter>
              <SideBar />
            <div className="container">
                <NavBar />
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/create" component={Create} />
                <Route path="/projects/:id" component={Project} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </AuthContextProvider>

  );
}

export default App