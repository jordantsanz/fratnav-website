import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Main from './main';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
