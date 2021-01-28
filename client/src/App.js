// import logo from './logo.svg';
import './App.css';
// import {useEffect} from "react";
// import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from './Containers/Contact/Contact';
import About from './Containers/About/About';
import Portfolio from './Containers/Portfolio/Portfolio';
import Navbar from './Components/Navbar/Navbar';


function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
