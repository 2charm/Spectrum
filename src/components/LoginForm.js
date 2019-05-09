import React, {Component} from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn
} from "mdbreact";

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
        fetch('api.spectrumnews.me/v1/sessions', {
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
    }

    changeHandler(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody>
                        <MDBCardHeader className="form-header warm-flame-gradient rounded">
                            <h3 className="my-3">
                            <MDBIcon icon="lock" /> Login:
                            </h3>
                        </MDBCardHeader>
                        <form action="" onSubmit="">
                            <label
                            htmlFor="defaultFormEmailEx"
                            className="grey-text font-weight-light"
                            >
                            Your email
                            </label>
                            <input
                            type="email"
                            onChange={this.changeHandler}
                            name="email"
                            id="defaultFormEmailEx"
                            className="form-control"
                            />
                            
                            <label
                            htmlFor="defaultFormPasswordEx"
                            className="grey-text font-weight-light"
                            >
                            Your password
                            </label>
                            <input
                            type="password"
                            onChange={this.changeHandler}
                            name="password"
                            id="defaultFormPasswordEx"
                            className="form-control"
                            />
                        </form>

                        <div className="text-center mt-4">
                            <MDBBtn color="deep-orange" className="mb-3" type="submit">
                            Login
                            </MDBBtn>
                        </div>

                        <MDBModalFooter>
                            <div className="font-weight-light">
                            <p>Not a member? Sign Up</p>
                            <p>Forgot Password?</p>
                            </div>
                        </MDBModalFooter>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default LoginForm;
