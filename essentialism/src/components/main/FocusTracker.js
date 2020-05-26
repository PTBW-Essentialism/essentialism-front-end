import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TrackerContainer = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background: #F8F8FF;
    color: #8FCB9B;
    border: 2px solid #8FCB9B;
`
const TrackerHeader = styled.div`

`;

const FocusTracker = (props) => {
    return (
        <TrackerContainer>
            <h2>{props.focus}</h2>
        </TrackerContainer>
    );
}

export default FocusTracker;