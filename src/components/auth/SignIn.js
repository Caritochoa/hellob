import React, {Component } from "react";
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Form, FormGroup, Label, Input, Button, Container, Col} from 'reactstrap';



class SignIn extends Component{
    state = {
        user:'',
        password:''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render(){
        const {authError} = this.props;
        return(        
                   

        <Container className="form container">
        <h2>Sign In</h2>
         <Form className="form" onSubmit={this.handleSubmit}>
           <Col>
             <FormGroup>
               <Label>Email</Label>
               <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                onChange = {this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                onChange = {this.handleChange}
              />
               <Button>Submit</Button>
            </FormGroup>
           
          </Col>
          
        </Form>
      </Container>


        )
    }
}

const mapStatetoProps = (state) =>{
    return{
        authError: state.auth.authError
    }
}

const mapDisptachToProps = (dispatch) =>{
    return{
        signIn: (creds) => dispatch(signIn(creds))
}
}

export default connect(mapStatetoProps, mapDisptachToProps)(SignIn)