import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

class SignupForm extends Component  {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            passwordConf:"",
            username:"",
            firstName:"",
            lastName:"",
        }
    }
    submitHandler(event) {
        event.preventDefault();
        fetch('api.spectrumnews.me/v1/sessions', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                passwordConf: this.state.passwordConf,
                username:this.state.username,
                firstName:this.state.firstName,
                lastName:this.state.lastName
            })
        })
    }

    changeHandler(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    
    render() {
        return (
            <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                <form onSubmit={this.submitHandler}>
                    <p className="h5 text-center mb-4">Sign up</p>
                    <div className="grey-text">
                    <MDBInput
                        name="email"
                        label="Your email"
                        icon="envelope"
                        onChange={this.changeHandler}
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                    />
                    <MDBInput
                        name="password"
                        label="Your password"
                        icon="lock"
                        onChange={this.changeHandler}
                        group
                        type="password"
                        validate
                    />
                    <MDBInput
                        name="passwordConf"
                        label="Confirm your password"
                        icon="lock"
                        onChange={this.changeHandler}
                        group
                        type="password"
                        validate
                        error="wrong"
                        success="right"
                    />
                    <MDBInput
                        name="username"
                        label="Username"
                        icon="user"
                        onChange={this.changeHandler}
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                    />
                    <MDBInput
                        name="firstName"
                        label="First Name"
                        icon="user"
                        onChange={this.changeHandler}
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                    />
                    <MDBInput
                        name="lastName"
                        label="Last Name"
                        icon="user"
                        onChange={this.changeHandler}
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                    />
                    </div>
                    <div className="text-center">
                    <MDBBtn type="submit" color="primary">Register</MDBBtn>
                    </div>
                </form>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        );
    };
}
export default SignupForm;
