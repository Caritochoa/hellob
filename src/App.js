import React,  { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import Dashboard from './components/dashboard/Dashboard.js';
import SignIn from "./components/auth/SignIn.js";
import SignUp from "./components/auth/SignUp.js";



class App extends Component{
  render(props){
  return(
    
    <BrowserRouter>      
    
        <Navbar />    
        <div className= "container-fluid d-flex justify-content-center"> 
        
        <Switch>      
                
          <Route path = " " Component = {Dashboard} />
          <Route path = '/signin' component = {SignIn} />
          <Route path = '/signup' component = {SignUp} />
        <Dashboard/>   
        </Switch>  
      </div>
    </BrowserRouter>
   

  
  );
}}
export default App;
