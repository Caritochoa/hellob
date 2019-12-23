import React, {Component } from "react";
import { Form, FormGroup, Label, Input, Button, Container, Col} from 'reactstrap';

class SignUp extends Component{
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
        console.log(this.state);
    }
    render(){
        return(
            <Container className="form container">
        <h2>Sign Up</h2>
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
}export default SignUp