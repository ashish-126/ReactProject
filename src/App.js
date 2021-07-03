import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Service from './component/Service';
import Navbar from './component/Navbar';
import Footer from './component/Footer';


const App = () => {

  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/service" component={Service}/>
        <Redirect to="/"/>        
      </Switch>
      <Footer/>
    </>
    
  )
}

export default App

