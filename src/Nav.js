import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Chartpage from './Covidchart'

const Nav = props => {
  return (
    <Router>
      <div className="container">
        <nav>
          <input type="checkbox" id="nav" className="hidden" />
          <label for="nav" className="nav-btn">
            <i />
            <i />
          </label>
          <div className="logo"> </div>
          <div className="nav-wrapper">
            <ul>
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                {' '}
                <Link to="/chart">chart</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Switch>
        <Route path="/chart">
          <Chartpage />
        </Route>
      </Switch>
    </Router>
  )
}

export default Nav
