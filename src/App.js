import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/auth/Login';
import Abonados from './components/paginas/Abonados';
import Home from './components/paginas/Home';
import Reportes from './components/paginas/Reportes'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/abonados" component={Abonados} />
        <Route exact path="/reportes" component={Reportes} />
      </Switch>
    </Router>
  );
}

export default App;
