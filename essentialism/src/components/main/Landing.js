import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const SplashContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: #8FCB9B;
    border: 3px solid black;
    width: 500px;
    height: 500px;
    border-radius: 250px;
    margin: auto auto;
`;

const SplashTitle = styled.h1`
    font-size: 7rem;
    font-family: 'Vibur', cursive;
    color: white;
    width: 100%;
    -webkit-text-stroke: 1px black;
`;

const SplashButton = styled.button`
    width: 25%;
    font-family: 'Vibur', cursive;
    font-size: 2rem;
    background-color: white;
    border: 3px solid black;
    border-radius: 20px;
    margin: 0% 1% 5% 1%;
`;

const Landing = props => {
    return (
        <SplashContainer>
            <SplashTitle>essentialism</SplashTitle>
            <Link>
                <SplashButton>Sign In</SplashButton>
            </Link>
            <Link>
                <SplashButton>Sign Up</SplashButton>
            </Link>
        </SplashContainer>
    );
};

export default Landing;