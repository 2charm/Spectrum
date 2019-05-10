import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody } from 'mdbreact';

export class SignupForm extends Component  {
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
        fetch('https://api.spectrumnews.me/v1/users', {
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
        .then((response) => {
            let status = response.status
            if(status === 201) {
                console.log("Account created");
                this.props.history.push("/login")
            } else if (status === 415) {
                console.log("Unsupported media-type");
            } else if(status === 500) {
                console.log("Internal server error");
            }
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    changeHandler(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <MDBContainer>
            <MDBRow>
                <MDBCol md="3"></MDBCol>
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody>
                            <form onSubmit={(event) => this.submitHandler(event)}>
                                <p className="h5 text-center mb-4">Sign Up</p>
                                <div className="grey-text">
                                <MDBInput
                                    name="email"
                                    label="Your email"
                                    onChange={(event) => this.changeHandler(event)}
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    name="password"
                                    label="Your password"
                                    onChange={(event) => this.changeHandler(event)}
                                    group
                                    type="password"
                                    validate
                                />
                                <MDBInput
                                    name="passwordConf"
                                    label="Confirm your password"
                                    onChange={(event) => this.changeHandler(event)}
                                    group
                                    type="password"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    name="username"
                                    label="Username"
                                    onChange={(event) => this.changeHandler(event)}
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    name="firstName"
                                    label="First Name"
                                    onChange={(event) => this.changeHandler(event)}
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                <MDBInput
                                    name="lastName"
                                    label="Last Name"
                                    onChange={(event) => this.changeHandler(event)}
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                />
                                </div>
                                <div className="text-center">
                                    <MDBBtn type="submit">Sign Up</MDBBtn>
                                </div>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        );
    };
}
export default SignupForm;
