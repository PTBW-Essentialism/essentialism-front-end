import React, { useState } from "react";
import { SplashContainer } from "../main/Landing";
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

const Register = () => {
    
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
    });
    
    const handleChange = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({
            ...formState,
            [e.target.name]: value
        });
        console.log(formState);
        //validate();
    }

    const validate = () => {

    }

    const handleSubmit = e => {
        e.preventDefault();
        setFormState({
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: ""
        });
    }

    return (
        <SplashContainer>
            <StyledForm onSubmit={handleSubmit}>
                <label htmlFor="firstName">
                    <input
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={formState.firstName}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="lastName">
                    <input
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={formState.lastName}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="email">
                    <input
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="username">
                    <input
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={formState.username}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="password">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formState.password}
                        onChange={handleChange}
                    />
                </label>
                <button>Submit</button>
            </StyledForm>
        </SplashContainer>
    );
}

export default Register;