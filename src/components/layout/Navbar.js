import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';


const  Navbar = () => {  
        return(

        <div className = "Header" >            
            <ul className = "menu-ul">              
                
                {/*<SignedInLinks />*/}
                <SignedOutLinks />
            </ul>            
        </div>
        )           
    }
const mapStateToProps = (state) =>{
    console.log(state);
    return{
    }
}


export default connect(mapStateToProps)(Navbar);
