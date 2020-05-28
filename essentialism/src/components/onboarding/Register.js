import React, { useState } from "react";
import { LandingContainer, LandingTitle, ButtonLink } from "../main/Landing";
import { CustomButton } from "../main/CustomButton";
import styled from "styled-components";
import * as yup from "yup";
import axios from "axios"
import {Redirect} from "react-router-dom";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-evenly;
    position: relative;
    top: -150px;

    ${props => (props.type === "initiative" ? `
        top: 0px;
        width: 80%;
    ` : null)}
`;

export const StyledLabel = styled.label`
    display: none;
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


const Register = (props) => {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        role: "user"
    });


const handleSubmit = (e, setterCB) => {
    e.preventDefault();

    userRegister();

    setterCB({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        role: "user"
    });
}

    const userRegister = () => {
        axios
        .post("https://essentialapi.herokuapp.com/auth/register", formState)
        .then((res) => {
            console.log(res)
            props.history.push('/login')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <LandingContainer>
            <LandingTitle>essentialism</LandingTitle>
            <StyledForm onSubmit={e => {
                handleSubmit(e, setFormState, formState);
            }}>
                <StyledLabel htmlFor="firstName"></StyledLabel>
                <StyledInput
                    id="firstName"
                    name="firstName"
                    placeholder="enter first name"
                    value={formState.firstName}
                    onChange={e => {
                        handleChange(e, formState, setFormState);
                    }}
                />
                <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
                <StyledInput
                    id="lastName"
                    name="lastName"
                    placeholder="enter last name"
                    value={formState.lastName}
                    onChange={e => {
                        handleChange(e, formState, setFormState);
                    }}
                />
                <StyledLabel htmlFor="email">Email</StyledLabel>
                <StyledInput
                    id="email"
                    name="email"
                    placeholder="enter email"
                    value={formState.email}
                    onChange={e => {
                        handleChange(e, formState, setFormState);
                    }}
                />
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
                <CustomButton type="onboard">register</CustomButton>
            </StyledForm>
        </LandingContainer>
    );
}

export default Register;