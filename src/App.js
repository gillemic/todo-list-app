import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


//Pages
import MainPage from './pages';
import NotFoundPage from './pages/404';
import TodoList from './pages/todoList';
import ResumePage from './pages/resume';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/todo" component={TodoList} />
          <Route exact path="/404" component={NotFoundPage} />
          <Route exact path="/resume" component={ResumePage} />
          <Redirect to="/404" />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;