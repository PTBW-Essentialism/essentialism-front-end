import React, { useState } from "react";
import { SplashContainer, SplashTitle, SplashButton, ButtonLink } from "../main/Landing";
import styled from "styled-components";
import * as yup from "yup";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-evenly;
    position: relative;
    top: -150px;
`;

export const StyledLabel = styled.label`

`;

export const StyledInput = styled.input`
    background-color: #8FCB9B;
    color: white;
    border: 1px solid white;
    border-radius: 7px;
    font-family: 'Josefin Slab', serif;
    font-size: 1.4rem;
    font-weight: 900;
    width: 100%;
    margin: 2%;
    text-align: center;

    &:focus {
        background-color: white;
        color: #8FCB9B;
    }

    ::placeholder {
        color: white;
        text-align: center;
    }
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

const handleSubmit = (e, setterCB) => {
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
                <StyledLabel htmlFor="firstName">
                    <StyledInput
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={formState.firstName}
                        onChange={e => {
                            handleChange(e, formState, setFormState);
                        }}
                    />
                </StyledLabel>
                <StyledLabel htmlFor="lastName">
                    <StyledInput
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={formState.lastName}
                        onChange={e => {
                            handleChange(e, formState, setFormState);
                        }}
                    />
                </StyledLabel>
                <StyledLabel htmlFor="email">
                    <StyledInput
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formState.email}
                        onChange={e => {
                            handleChange(e, formState, setFormState);
                        }}
                    />
                </StyledLabel>
                <StyledLabel htmlFor="username">
                    <StyledInput
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={formState.username}
                        onChange={e => {
                            handleChange(e, formState, setFormState);
                        }}
                    />
                </StyledLabel>
                <StyledLabel htmlFor="password">
                    <StyledInput
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formState.password}
                        onChange={e => {
                            handleChange(e, formState, setFormState);
                        }}
                    />
                </StyledLabel>
                <SplashButton>Submit</SplashButton>
            </StyledForm>
        </SplashContainer>
    );
}

export default Register;