import React, { useState } from "react";
import { SplashContainer, SplashTitle, SplashButton, ButtonLink } from "../main/Landing";
import styled from "styled-components";
import * as yup from "yup";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-evenly;
`;

export const StyledLabel = styled.label`

`;

export const StyledInput = styled.input`
    background-color: #8FCB9B;
    color: white;
`;

export const handleChange = (e, stateObj, setterCB) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setterCB({
        ...stateObj,
        [e.target.name]: value
    });
    console.log(stateObj);
    //validate();
}

export const validate = () => {

}

export const handleSubmit = (e, setterCB) => {
    e.preventDefault();
    setterCB({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
    });
}

const Register = () => {
    
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
    });

    return (
        <SplashContainer>
            <SplashTitle>essentialism</SplashTitle>
            <StyledForm onSubmit={e => {
                handleSubmit(e, setFormState);
            }}>
                <label htmlFor="firstName">
                    <input
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={formState.firstName}
                        onChange={e => {
                            handleChange(e, formState, setFormState);
                        }}
                    />
                </label>
                <label htmlFor="lastName">
                    <input
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={formState.lastName}
                        onChange={e => {
                            handleChange(e, formState, setFormState);
                        }}
                    />
                </label>
                <label htmlFor="email">
                    <input
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formState.email}
                        onChange={e => {
                            handleChange(e, formState, setFormState);
                        }}
                    />
                </label>
                <label htmlFor="username">
                    <input
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={formState.username}
                        onChange={e => {
                            handleChange(e, formState, setFormState);
                        }}
                    />
                </label>
                <label htmlFor="password">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formState.password}
                        onChange={e => {
                            handleChange(e, formState, setFormState);
                        }}
                    />
                </label>
                <button>Submit</button>
            </StyledForm>
        </SplashContainer>
    );
}

export default Register;