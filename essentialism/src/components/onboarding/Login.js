import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../../utils/AxiosWithAuth";
import { LandingContainer, LandingTitle, LandingButton, ButtonLink } from "../main/Landing";
import { CustomButton } from "../main/CustomButton";
import styled from "styled-components";
import * as yup from "yup";
import { StyledForm, StyledLabel, StyledInput, handleChange, validate } from "../onboarding/Register";
import {Redirect} from "react-router-dom";


const Login = (props) => {
    const [formState, setFormState] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = (e, setterCB) => {
        e.preventDefault();

        loginAuth();

        setterCB({
            username: "",
            password: ""
        });
    }

    const loginAuth = () => {
        axiosWithAuth()
             .post('/auth/login', formState)
             .then((res) => {
                 console.log(res);
                 console.log(res.data.userId);
                 if (!window.localStorage.getItem('token')) {
                    window.localStorage.setItem('token', res.data.token)
                    props.history.push(`/focus`)
                } else if (window.localStorage.getItem('token')) {
                    props.history.push(`/focus`)
                }
             })
             .catch(err => console.log(err))
    }
    

    return (
        <LandingContainer>
            <LandingTitle>essentialism</LandingTitle>
            <StyledForm onSubmit={e => {
                handleSubmit(e, setFormState);
            }}>
                <StyledLabel htmlFor="username">Username</StyledLabel>
                <StyledInput
                    id="username"
                    name="username"
                    placeholder="enter username"
                    value={formState.username}
                    onChange={e => {
                        handleChange(e, formState, setFormState);
                    }}
                />
                <StyledLabel htmlFor="password">Password</StyledLabel>
                <StyledInput
                    type="password"
                    id="password"
                    name="password"
                    placeholder="enter password"
                    value={formState.password}
                    onChange={e => {
                        handleChange(e, formState, setFormState);
                    }}
                />
                <CustomButton type="onboard">login</CustomButton>
            </StyledForm>
        </LandingContainer>
    );
}

export default Login;

// import React from "react"
// import {axiosWithAuth} from "../../utils/AxiosWithAuth";

// class Login extends React.Component {
//     state = {
//         credentials: {
//             username: '',
//             password: ''
//         }
//     }

//     handleChange = e => {
//         this.setState({
//             credentials: {
//                 ...this.state.credentials,
//                 [e.target.name]: e.target.value
//             }
//         });
//     };

//     login = e => {
//         e.preventDefault();
//         //make a post request and send the credentials object to the API
//         axiosWithAuth()
//         .post('/api/login', this.state.credentials)
//         .then((res) => {
//             console.log(res);
//             if (!window.localStorage.getItem('token')) {
//                 window.localStorage.setItem('token', res.data.payload)
//                 //navigate the user to the /protectedRoute (whatever landing page you have for login)
//                 this.props.history.push('/')
//             } else {
//                 this.props.history.push('/')
//             }
//         })
//         .catch(err => console.log(err))
//     };

//     render() {
//         return(
//             <div>
//                 <form onSubmit={this.login}>
//                     <input type='text' name='username' value={this.state.credentials.username} onChange={this.handleChange} />

//                     <input type='password' name='password' value={this.state.credentials.password} onChange={this.handleChange} />
//                     <button>Log in</button>
//                 </form>
//             </div>
//         )
//     }
// };

// export default Login;