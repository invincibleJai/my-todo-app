import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import Todo from './components/lsComponenets/Todo';
import TodoRedux from './components/reduxComponents/TodoRedux';
import TodoContextApi from './components/contextApiComponents/TodoContextApi';
import TodoProvider from './components/contextApiComponents/TodoProvider';

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
            <li>
              <Link to="/redux">With Redux</Link>
            </li>
            <li>
              <Link to="/contextapi">With Context API</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/localstorage'>
            <Todo />
          </Route>
          <Route path='/redux'>
            <TodoRedux />
          </Route>
          <Route path='/contextapi'>
            <TodoProvider>
              <TodoContextApi />
            </TodoProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
