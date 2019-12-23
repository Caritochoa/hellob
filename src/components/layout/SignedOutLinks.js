import React, {Component} from 'react';
import  {NavLink }from 'react-router-dom';


const SignedOutLinks = () => {    
        return(       
            <div className = "Navbar">
           
            <ul className = "right">         
            
                 <li> <NavLink to = "/"> Home </NavLink></li> 
                 <li><NavLink to = "/signup" > Sign up</NavLink></li>
                <li> <NavLink to = "/signin" > Sing in</NavLink></li>              
                
            </ul>   
          
            </div>
        )
        
    }
export default SignedOutLinks