import React, { useState } from "react";
import styled from "styled-components";
import { StyledForm, StyledLabel, StyledInput, handleChange } from "../onboarding/Register";
import { CustomButton } from "./CustomButton";

const InitiativeAdder = styled.div`
    border: 1px solid black;
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InitiativeList = styled.div`

`

const StyledTextArea = styled.textarea`

`

const Initiatives = () => {
    const [initiativeState, setInitiativeState] = useState({
        iName: "",
        iDescription: "",
        dueDate: "",
        userID: undefined,
        userValuesID: undefined,
        completed: false,
        repeatable: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted!");
    }

    return (
        <div>
            <InitiativeAdder>
                <StyledForm type="initiative" onSubmit={handleSubmit}>
                    <h2>New Initiative</h2>
                    <StyledLabel htmlFor="iName">Initiative name</StyledLabel>
                    <StyledInput
                        id="iName"
                        name="iName"
                        placeholder="initiative title"
                        value={initiativeState.iName}
                        onChange={e => {
                            handleChange(e, initiativeState, setInitiativeState);
                        }}
                    />
                    <StyledLabel htmlFor="userValuesID">Relevent focus</StyledLabel>
                    <select
                        id="userValuesID"
                        name="userValuesID"
                        value={initiativeState.userValuesID}
                        onChange={e => {
                            handleChange(e, initiativeState, setInitiativeState);
                        }}
                    >
                        <option value={1}>Focus 1</option>
                        <option value={2}>Focus 2</option>
                        <option value={3}>Focus 3</option>
                        <option value="Other">Other</option>
                    </select>
                    <StyledLabel htmlFor="iDescriptions">Initiative description</StyledLabel>
                    <StyledTextArea
                        id="iDescription"
                        name="iDescription"
                        placeholder="initiative description"
                    />
                    <StyledLabel htmlFor="dueDate"></StyledLabel>
                    <StyledInput
                        type="date"
                        id="dueDate"
                        name="dueDate"
                    />
                    <CustomButton>Submit</CustomButton>
                </StyledForm>
            </InitiativeAdder>
            <InitiativeList>

            </InitiativeList>
        </div>
    );
}

export default Initiatives;