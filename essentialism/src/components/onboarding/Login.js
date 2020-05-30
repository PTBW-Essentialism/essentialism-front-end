import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../../utils/AxiosWithAuth";
import { LandingContainer, LandingTitle, LandingButton, ButtonLink } from "../main/Landing";
import { CustomButton } from "../main/CustomButton";
import styled from "styled-components";
import * as yup from "yup";
import { StyledForm, StyledLabel, StyledInput, handleChange, validate } from "../onboarding/Register";
import {connect} from "react-redux";
import {setUserId} from "../../state/Actions";
import axios from "axios";


const Login = (props) => {
    const [formState, setFormState] = useState({
        username: "",
        password: ""
    });

    const [focusTrue, setFocusTrue] = useState(false);

    const userRouter = (userId) => {
        axiosWithAuth().get(`/users/${userId}/focus`)
        .then(res => {
            console.log(res);
            if (!window.localStorage.getItem('token')) {
                window.localStorage.setItem('token', res.data.token)
                props.history.push(`/focus`)
            } else if (window.localStorage.getItem('token') && res.data.length > 0) {
                props.history.push(`/users/${userId}/focus`)
            } else if (window.localStorage.getItem('token')) {
                props.history.push(`/focus`)
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

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
                 props.setUserId(res.data.userId)
                 userRouter(res.data.userId);
                 window.localStorage.setItem("userId", res.data.userId)

                 if (!window.localStorage.getItem('token')) {
                    window.localStorage.setItem('token', res.data.token)
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

export default connect(null, {setUserId})(Login);