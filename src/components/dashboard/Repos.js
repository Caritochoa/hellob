import React, {Component} from 'react'
import imgrepos from './assets_d/imgrepos.jpg';



class Repos extends Component{
    constructor(props){
        super(props);
        this.state = {
            repos:[],
            isLoaded: false

        }
    }

    componentDidMount(){       
        fetch('https://api.github.com/users/Caritochoa/repos')
        .then(res => res.json())
        .then(json=>{
            this.setState({
                isLoaded: true,
                items: json,
            })
        });   

    }

    render(){
        var {isLoaded, items} = this.state;
        if (!isLoaded){
            return <div>Loading....</div>
        }
        else{
        
        return (
            <div className = "card text-center">     
            <div classNmae = "overFlow">
            <img src = {imgrepos} className = "card-img-top" height = "300px"/>
            </div>
            <div className= "card-body text-dark">    
            <h4 className = "card-title">check your Repos from Github</h4>           
         
            
        <ul>{items.map(item => (
            <p className = "card-text text-secondary" key= {item.id}>
                {item.name}
            </p>
        ))}
        </ul>
        </div>
        </div>  
           

        )    
}}

}export default Repos
