import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import contact from './component/contact';
import data_component from './component/data_component';
import main from './component/main';

function App() {
  return (
    <Router>
        <div>
          {/* <h2>Welcome to React Router Tutorial</h2> */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/data'} className="nav-link">Data</Link></li>
          </ul>
          </div>
          </nav>
          <hr />
          <div className="container">
          <Switch>
              <Route exact path='/' component={main} />
              <Route path='/contact' component={contact} />
              <Route path='/data' component={data_component} />
          </Switch>
          </div>
          
        </div>
      </Router>
  );
}

export default App;
