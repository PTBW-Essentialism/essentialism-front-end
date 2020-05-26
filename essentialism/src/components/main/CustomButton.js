import React from "react";
import styled from "styled-components";

export const CustomButton = styled.button`
    font-family: 'Vibur', cursive;
    font-size: 1.5rem;
    width: auto;
    height: 50px;
    background-color: #F8F8FF;
    border: 1px solid #8FCB9B;
    border-radius: 25px;
    padding: 0px 15px;
    color: #8FCB9B;
    margin: auto 5px;

    &:hover{
        color: #5B9279;
        background-color: white;
    }

    ${props => (props.type === "landing" ? `
        font-size: 2.5rem;
        text-align: center;
        height: 60px;
        width: 130px;
        border-radius: 30px;
        position: relative;
        top: -100px;
        padding: 0px;
    ` : null)}

    ${props => (props.type === "onboard" ? `
        position: relative;
        top: 5px;
        left: 10px;
    ` : null)}
`;