import styled from "styled-components";
import React from "react";
import { Link, Redirect } from "react-router-dom";
import { CustomButton } from "./CustomButton";

export const LandingContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    background: #8FCB9B;
    width: 500px;
    height: 500px;
    border-radius: 250px;
    margin: 7% auto;
`;

export const LandingTitle = styled.h1`
    font-size: 6.5rem;
    font-family: 'Vibur', cursive;
    color: #F8F8FF;
    width: 100%;
    letter-spacing: 2px;
    padding: 50px;
`;

export const ButtonLink = styled.a`
    width: 25%;
    margin: 0% 1% 10% 1%;
`;

const Landing = props => {
    return (
        <LandingContainer>
            <LandingTitle>essentialism</LandingTitle>
            <ButtonLink href="/login">
                <CustomButton type="landing">login</CustomButton>
            </ButtonLink>
            <ButtonLink href="/register">
                <CustomButton type="landing">register</CustomButton>
            </ButtonLink>
        </LandingContainer>
    );
};

export default Landing;