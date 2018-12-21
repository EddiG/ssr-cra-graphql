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
        <div className="App-intro">
          |<Link className="App-links" children to="/">Home</Link>
          |<Link className="App-links" to="/about">About</Link>
          |<Link className="App-links" to="/person/1">Person 1</Link>
          |<Link className="App-links" to="/person/2">Person 2</Link>
          |<Link className="App-links" to="/person/3">Person 3</Link>|
          <Switch>
            {routes.map(route => <Route key={route.name} {...route} />)}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
