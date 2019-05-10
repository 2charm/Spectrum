import React, {Component} from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn
} from "mdbreact";

const SESSION_TOKEN = "sessionID";
export class LoginForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            email:"",
            password:"",
        };
    }

    submitHandler(event) {
        event.preventDefault();
        fetch('https://api.spectrumnews.me/v1/sessions', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        })
        .then((response) => {
            let sid = response.headers.get("Authorization")
            sessionStorage.setItem(SESSION_TOKEN, sid)
            this.props.changeStatus(true)
            return response.json();
        })
        .then((data) => {
            this.props.changeUser(data);
            window.location.href = "/"
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    changeHandler(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        //let showHideClassName = this.props.show ? "modal display-block" : "modal display-none"
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="3">
                    </MDBCol>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                <form onSubmit={(event) => this.submitHandler(event)}>
                                    <p className="h5 text-center mb-4">Sign in</p>
                                    <div className="grey-text">
                                    <MDBInput
                                        label="Type your email"
                                        name="email"
                                        onChange={(event) => this.changeHandler(event)}
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                    />
                                    <MDBInput
                                        label="Type your password"
                                        name="password"
                                        onChange={(event) => this.changeHandler(event)}
                                        group
                                        type="password"
                                        validate
                                    />
                                    </div>
                                    <div className="text-center">
                                        <MDBBtn type="submit">Login</MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default LoginForm;
