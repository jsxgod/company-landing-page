import React from 'react';
import GlobalStyle from './globalStyles';
import {Navbar, Footer, SignUp} from './components';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/HomePage/Home';
import SignUpPage from './pages/SignUp/SignUpPage';
import { Element } from 'react-scroll';
import ScrollUp from './components/ScrollUp';

function App() {

  return (
    <Router>
      <GlobalStyle />
      <ScrollUp />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/sign-up" exact component={SignUpPage}/>
      </Switch>
      <Element name="sign-up">
        <SignUp />
      </Element>
      <Footer />
    </Router>
  );
}

export default App;
