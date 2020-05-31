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
    font-size: 2vw;
    font-weight: 900;
    width: 25vw;
    margin: 2%;
    text-align: center;

    &:focus {
        background-color: white;
        color: #8FCB9B;

        ::placeholder {
            color: #8FCB9B;
            text-align: center;
        }
    }

    ::placeholder {
        color: white;
        text-align: center;
    }
`;

const ErrorMessage = styled.div`
    color: red;
    position: relative;
    top: 80px;
    width: 25vw;
`;

export const handleChange = (e, stateObj, setterCB) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setterCB({
        ...stateObj,
        [e.target.name]: value
    });
    console.log(stateObj);
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

    const registerSchema = yup.object().shape({
        firstName: yup.string().min(2, "Your first name must be at least 2 characters.").required("You must enter your first name."),
        lastName: yup.string().min(2, "Your last name must be at least 2 characters.").required("You must enter your last name."),
        email: yup.string().email("Please enter a valid email.").required("You must enter an email address."),
        username: yup.string().min(5, "Your username must be at least 5 characters.").required("You must enter a username."),
        password: yup.string().min(5, "Your password must be at least 5 characters.").required("You must enter a password."),
        role: yup.string()
    });

    const [errorState, setErrorState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        role: ""
    })

    const validate = (e) => {
        e.persist();
        yup.reach(registerSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: ""
                });
                console.log(errorState);
            })
            .catch(err => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: err.errors[0]
                });
                console.log(errorState);
            });
    }

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
                        validate(e);
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
                        validate(e);
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
                        validate(e);
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
                        validate(e);
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
                        validate(e);
                    }}
                />
                <CustomButton type="onboard">register</CustomButton>
                {errorState.firstName ? <ErrorMessage>{errorState.firstName}</ErrorMessage> : null}
                {errorState.lastName ? <ErrorMessage>{errorState.lastName}</ErrorMessage> : null}
                {errorState.email ? <ErrorMessage>{errorState.email}</ErrorMessage> : null}
                {errorState.username ? <ErrorMessage>{errorState.username}</ErrorMessage> : null}
                {errorState.password ? <ErrorMessage>{errorState.password}</ErrorMessage> : null}
            </StyledForm>
        </LandingContainer>
    );
}

export default Register;