import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Home } from "./components/HomePage/Home";
import { CovidMap } from "./components/MapPage/Map";
import { Table } from "./components/TablePage/Table";
import { Graph } from "./components/GraphPage/Graph";
import { About } from "./components/AboutPage/About";

export const NavBar = () => {
    return (
        <Router>
            <div>
                <nav className="sidenav">
                    <h1 class="nav-title" href="#top">COVID-19 Dashboard</h1>
                    <ul className="nav-list">
                        <li className="list-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="list-item">
                            <Link className="nav-link" to="/map">Map</Link>
                        </li>
                        <li className="list-item">
                            <Link className="nav-link" to="/table">Table</Link>
                        </li>
                        <li className="list-item">
                            <Link className="nav-link" to="/graph">Graph</Link>
                        </li>
                        <li className="list-item">
                            <Link className="nav-link" to="/about">About</Link>
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
          <Route path="/table">
            <Table />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    );
}