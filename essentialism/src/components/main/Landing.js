import styled from "styled-components";
import React from "react";
import { Link, Redirect } from "react-router-dom";

export const SplashContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    background: #8FCB9B;
    width: 500px;
    height: 500px;
    border-radius: 250px;
    margin: 2% auto;
`;

export const SplashTitle = styled.h1`
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

export const SplashButton = styled.button`
    width: 100%;
    font-family: 'Vibur', cursive;
    font-size: 2rem;
    background-color: #F8F8FF;
    border: 1px solid white;
    border-radius: 20px;
    padding: 5px;
    color: #8FCB9B;

    &:hover{
        color: #5B9279;
        background-color: white;
    }
`;

const Landing = props => {
    return (
        <SplashContainer>
            <SplashTitle>essentialism</SplashTitle>
            <ButtonLink href="/login">
                <SplashButton>login</SplashButton>
            </ButtonLink>
            <ButtonLink href="/register">
                <SplashButton>register</SplashButton>
            </ButtonLink>
        </SplashContainer>
    );
};

export default Landing;