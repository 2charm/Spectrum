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

import { css } from '@emotion/core';
import { BarLoader } from 'react-spinners';

const SESSION_TOKEN = "sessionID";

const override_load = css`
  position: fixed; /* or absolute */
  left: 25.7%;
`;

export class LoginForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            hasError:false,
            hasLoaded:false,
            email:"",
            password:"",
        };
    }

    submitHandler(event) {
        event.preventDefault();
        this.setState({
            hasLoaded:true
        })
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
            if(response.status != 201) {
                this.setState({
                    hasLoaded:false
                })
                throw new Error(response.status)
            } else {
                let sid = response.headers.get("Authorization")
                sessionStorage.setItem(SESSION_TOKEN, sid)
                this.props.changeStatus(true)
                return response.json();
            }
        })
        .then((data) => {
            let username = data['userName']
            this.props.changeUser(data);
            sessionStorage.setItem("username", username)         
            window.location.href = "/"
        })
        .catch((error) => {
            this.setState({
                hasError:true
            })
        })
    }

    changeHandler(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <MDBContainer>
                {
                    this.state.hasError && 
                    <div className="alert alert-danger" role="alert">
                        Incorrect password and/or email!
                    </div>
                }
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
                                        <MDBBtn className="btn peach-gradient" type="submit">Sign In</MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                {
                    this.state.hasLoaded &&
                    <div className='sweet-loading'>
                        <BarLoader
                        css={override_load}
                        sizeUnit={"px"}
                        height={5}
                        width={540}
                        color={'#E08D4F'}
                        loading={this.state.loading}
                        />
                    </div> 
                }
            </MDBContainer>
        );
    }
}

export default LoginForm;
