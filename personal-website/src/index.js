import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Education from "./components/pages/Education"
// import $ from 'jquery';

// the exact prefix for component allows subdomains to be used

ReactDOM.render(
    <div>
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} /> 
                    <Route path="/Projects" component={Projects} />
                    <Route path="/Education" component={Education} />
                </Switch>
            </div>
        </Router>
    </div>, 
document.getElementById("root"));