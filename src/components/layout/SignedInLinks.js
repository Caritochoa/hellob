import React from 'react';
import  { NavLink }from 'react-router-dom';


const SignedInLinks = () => {    
        return(       
            
           
            <ul className = "right"> 
                <li><h2> <NavLink to = "/" > Home</NavLink></h2></li>
                <li><h2> <NavLink to = "/signin" > Log Out</NavLink></h2></li>
                
                
            </ul>            
       
        )
        
    }
export default SignedInLinks