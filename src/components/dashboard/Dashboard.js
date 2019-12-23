import React, {Component} from 'react'
import Repos from './Repos';
import Events_g from './Events_g';

class Dashboard extends Component{
    render(){
        return (
          <div className= "container-fluid d-flex justify-content-center">
              
                <div className = "col-md-4"><Repos/>  
                </div>
                <div className = "col-md-4"><Events_g />
                </div>             
              
          </div>           
           
        )    
}}export default Dashboard
