import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SideBar from "./components/layout/Sidebar";
import Users from "./pages/Users";
import UserTable from "./components/layout/UserTable";

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <Switch>
          <Home />
          <Route exact path="/users" component={Users} />
          {/* <Route exact path="/users" component={UserTable} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
