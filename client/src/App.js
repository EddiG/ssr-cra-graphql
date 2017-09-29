import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import logo from './logo.svg';
import './App.css';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>My Title</title>
          <meta
            name="description"
            content="The React with Server Side Rendering"
          />
        </Helmet>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Switch>
            {routes.map(route => <Route key={route.name} {...route} />)}
          </Switch>
        </p>
      </div>
    );
  }
}

export default App;
