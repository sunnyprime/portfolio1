import React from 'react';
import './App.css';
import Home from './Pages/Home'
import Navbar from './Component/Header/Navbar';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Experiences from './Pages/Experiences';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
// import Gridtes from './Pages/Gridtes';


function App() {

  return (
    <div>
    <Router>
      <Navbar />

    
     <Switch>
    <div className="content">
     <Route exact path="/"><Home /></Route>
     <Route exact path="/skills"><Skills /></Route>
     <Route exact path="/exp"><Experiences /></Route>
     <Route exact path="/contact"><Contact /></Route>
     {/* <Route exact path="/grid"><Gridtes /></Route> */}
     
     </div>
     </Switch>
     
     </Router>
     
      
     </div>
  );
}

export default App;
