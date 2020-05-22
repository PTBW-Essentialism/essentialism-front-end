import React from "react"
import {axiosWithAuth} from "../../utils/AxiosWithAuth";

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        //make a post request and send the credentials object to the API
        axiosWithAuth()
        .post('/api/login', this.state.credentials)
        .then((res) => {
            console.log(res);
            if (!window.localStorage.getItem('token')) {
                window.localStorage.setItem('token', res.data.payload)
                //navigate the user to the /protectedRoute (whatever landing page you have for login)
                this.props.history.push('/')
            } else {
                this.props.history.push('/')
            }
        })
        .catch(err => console.log(err))
    };

    render() {
        return(
            <div>
                <form onSubmit={this.login}>
                    <input type='text' name='username' value={this.state.credentials.username} onChange={this.handleChange} />

                    <input type='password' name='password' value={this.state.credentials.password} onChange={this.handleChange} />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
};

export default Login;

// import React, { useState } from "react";
// import { SplashContainer } from "../main/Landing";
// import styled from "styled-components";
// import * as yup from "yup";
//import { StyledForm, StyledLabel, StyledInput, handleChange, handleSubmit, validate } from "../onboarding/Register";

// const Login = () => {
    
//     const [formState, setFormState] = useState({
//         username: "",
//         password: ""
//     });

//     return (
//         <SplashContainer>
//             <StyledForm onSubmit={handleSubmit}>
//                 <label htmlFor="username">
//                     <input
//                         id="username"
//                         name="username"
//                         placeholder="Username"
//                         value={formState.username}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label htmlFor="password">
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         placeholder="Password"
//                         value={formState.password}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <button>Submit</button>
//             </StyledForm>
//         </SplashContainer>
//     );
// }

// export default Login;