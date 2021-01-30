import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import Todo from './components/lsComponenets/Todo';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/localstorage">With LocalStorage</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/localstorage'>
            <Todo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
