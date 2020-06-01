import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { handleChange } from "../onboarding/Register";
import { CustomButton } from "./CustomButton";

const TrackerContainer = styled.div`
    width: 17vw;
    height: 17vw;
    border-radius: 50%;
    background: #F8F8FF;
    color: #8FCB9B;
    border: 2px solid #8FCB9B;
    margin: 2%;
    display: flex;
    flex-direction: column;

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

const Importance = styled.p`
    font-size: 2vw;
    padding: 2%;
`;

const FocusTracker = (props) => {
    const [formState, setFormState] = useState({
        importance: ""
    });

    const [importance, setImportance] = useState(); //creating this slice of state just to get this working at the last minute. You would normally post importance to backend, which is then used in rendering the focus trackers

    const handleSubmit = (e) => {
        e.preventDefault();
        setImportance(formState.importance);
    }

    return (
        <TrackerContainer type={props.type}>
            <TrackerHeader type={props.type}>{props.focus}</TrackerHeader>
            { props.type === "area" ?
                importance ?
                    <Importance>{importance}</Importance> :
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="importance">
                            In a few sentences, describe why the selected values are important to you. Focus on your thoughts/feelings, and don’t worry about spelling, grammar, or how well-written it is.
                            <br />
                            <textarea
                                id="importance"
                                name="importance"
                                value={formState.importance}
                                onChange={e => {
                                    handleChange(e, formState, setFormState);
                                }}
                            />
                        </label>
                        <CustomButton>Submit</CustomButton>
                    </form>
                : null}
        </TrackerContainer>
    );
}

export default FocusTracker;