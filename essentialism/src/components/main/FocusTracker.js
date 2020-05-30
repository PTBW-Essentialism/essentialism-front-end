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

    ${props => (props.type === "completed" ? `
        background: pink;
    ` : null)}
`
const TrackerHeader = styled.div`
    font-size: 4vw;
    margin-top: 20%;

    ${props => (props.type === "area" ? `

    ` : null)}
`;

const FocusTracker = ({type, focus, importance}) => {
    return (
        <TrackerContainer type={type}>
            <TrackerHeader type={type}>{focus}</TrackerHeader>
            {/*importance ?
                <div>{importance}<div> :
                <label htmlFor="importance">
                    In a few sentences, describe why the selected values are important to you. Focus on your thoughts/feelings, and don’t worry about spelling, grammar, or how well-written it is.
                    <textarea
                        id="importance"
                    />
                <label>*/}
        </TrackerContainer>
    );
}

export default FocusTracker;