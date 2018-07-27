import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPage from './LoginPage.js';
import RegisterPage from './RegisterPage.js';
import { connect } from 'react-redux';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <LoginPage/>
  },
  {
    path: "/register",
    main: () => <RegisterPage/>
  }
];

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (<Router>
    <div style={{ display: "flex" }}>
      <div style={{padding: '10px', width: '10%', background: '#f0f0f0'}}>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        </div>
        <div style={{flex: 1, padding: '10px'}}>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
    );
  }
}

export default App;
