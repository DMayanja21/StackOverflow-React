// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

// Import pages
import Nav from './Components/Views/Features/Nav';
import Home from './Components/Views/Pages/Home';
import About from './Components/Views/Pages/About';
import Profile from './Components/Views/Pages/Profile.js';
import Details from './Components/Views/Pages/Details';
// import Err from './Components/Views/Pages/Error';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/About" exact component={About}/>
          <Route path="/Profile" exact component={Profile}/>          
          <Route path="/:question_id" exact component={Details}/>
        </Switch>
        

      </div>
    </Router>
  );
}
// <Route path="/#" exact component={Err}/>

export default App;
