import React from "react";

import { Route, Switch} from 'react-router-dom';

import Beer from "./brew";
import DogList from "./Dogs";
import Home from "./Home";
import About from "./About";
import Navbar from "./NavBar";
import Error from "./Error";



function App(props) {
  return (
    <div className="todoapp stack-large">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path='/dogs' component={DogList} />
        <Route path='/beer' component={Beer} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
