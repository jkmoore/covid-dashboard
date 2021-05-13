import "./Navbar.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Home } from "./components/HomePage/Home";
import { CovidMap } from "./components/MapPage/Map";
import { Graph } from "./components/GraphPage/Graph";
import { About } from "./components/AboutPage/About";

export default function NavBar() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/map">Map</Link>
                        </li>
                        <li>
                            <Link to="/graph">Graph</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>

      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/graph">
            <Graph />
          </Route>
          <Route path="/map">
            <CovidMap />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
        /*
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/map" component={CovidMap}></Route>
                <Route exact path="/graph" component={Graph}></Route>
                <Route exact path="/about" component={About}></Route>

            </Switch>
        </Router>*/
    );
}