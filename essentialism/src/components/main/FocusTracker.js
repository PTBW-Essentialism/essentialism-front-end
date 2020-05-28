import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TrackerContainer = styled.div`
    width: 17vw;
    height: 17vw;
    border-radius: 50%;
    background: #F8F8FF;
    color: #8FCB9B;
    border: 2px solid #8FCB9B;
    margin: 2%;

    ${props => (props.type === "area" ? `
        width: 30vw;
        height: 30vw;
    ` : null)}
`
const TrackerHeader = styled.div`
    font-size: 4vw;
    margin-top: 20%;

    ${props => (props.type === "area" ? `

    ` : null)}
`;

const FocusTracker = (props) => {
    return (
        <TrackerContainer type={props.type}>
            <TrackerHeader type={props.type}>{props.focus}</TrackerHeader>
        </TrackerContainer>
    );
}

export default FocusTracker;