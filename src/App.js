import React from 'react';
import GlobalStyle, { Button } from './globalStyles';
import {Navbar, Footer} from './components';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/HomePage/Home';

function App() {

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
