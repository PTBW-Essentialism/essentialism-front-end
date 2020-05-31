import React from "react";
import styled from "styled-components";

export const CustomButton = styled.button`
    font-family: 'Vibur', cursive;
    font-size: 2vw;
    width: 20vw;
    height: 4vw;
    background-color: #F8F8FF;
    border: 1px solid #8FCB9B;
    border-radius: 25px;
    padding: 0px 15px;
    color: #8FCB9B;
    margin: auto 0px;

    &:hover{
        color: #5B9279;
        background-color: white;
    }

    ${props => (props.type === "landing" ? `
        font-size: 4vw;
        text-align: center;
        width: 12vw;
        height: auto;
        border-radius: 30px;
        position: relative;
        top: -10%;
        padding: 0px;
    ` : null)}

    ${props => (props.type === "onboard" ? `
        position: relative;
        top: 5px;
        left: 25px;
        font-size: 3vw;
        line-height: .8;
    ` : null)}

    ${props => (props.className === "focusSelection" ? `
        width: 25%;
        font-size: 3vw;
        margin: 3%;
    ` : null)}
`;