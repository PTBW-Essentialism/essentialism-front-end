import styled from "styled-components";
import React from "react";
import { Link, Redirect } from "react-router-dom";

export const SplashContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    background: #8FCB9B;
    border: 3px solid black;
    width: 500px;
    height: 500px;
    border-radius: 250px;
    margin: auto auto;
`;

const SplashTitle = styled.h1`
    font-size: 6.5rem;
    font-family: 'Vibur', cursive;
    color: white;
    width: 100%;
    letter-spacing: 7px;
    -webkit-text-stroke: 1px black;
    padding: 50px;
`;

const ButtonLink = styled.a`
    width: 25%;
    margin: 0% 1% 10% 1%;

    &:hover{
        color: white;
    }
`;

const SplashButton = styled.button`
    width: 100%;
    font-family: 'Vibur', cursive;
    font-size: 2rem;
    background-color: white;
    border: 3px solid black;
    border-radius: 20px;
    
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