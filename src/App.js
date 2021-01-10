import React from 'react';
import GlobalStyle, { Button } from './globalStyles';
import {Navbar, Footer, SignUp} from './components';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/HomePage/Home';
import { Element } from 'react-scroll';

function App() {

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
      <Element name="sign-up">
        <SignUp />
      </Element>
      <Footer />
    </Router>
  );
}

export default App;
