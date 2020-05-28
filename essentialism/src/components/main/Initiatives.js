import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { StyledForm, StyledLabel, StyledInput, handleChange } from "../onboarding/Register";
import { CustomButton } from "./CustomButton";
import axios from "axios";

const InitiativeAdder = styled.div`
    border: 1px solid black;
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InitiativeList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InitiativeCard = styled.div`
    border: 1px solid black;
    width: 60vw;
    margin: 2%;
`

const StyledTextArea = styled.textarea`

`

const Initiatives = () => {
    const [userInitiatives, setUserInitiatives] = useState([{
        iName: "Dummy Data",
        iDescription: "This isn't real data.",
        dueDate: "Never",
        userID: 1,
        userValuesID: 1,
        completed: false,
        repeatable: false
    }])
    
    // useEffect(() => {
    //     axios.get("https://essentialapi.herokuapp.com/users/:id/initiatives/")
    //         .then(res => {
    //             console.log(res) //get the number of initiatives here?
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         });
    // }, []);

    // useEffect(() => {
    //     axios.get("https://essentialapi.herokuapp.com/users/:id/initiatives/:id")
    //         .then(res => {
    //             let initiativesArray = res.data.map(item => { //set userInitiatives state here
    //                 return {

    //                 }
    //             })
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         });
    // }, []);
    
    const [formState, setFormState] = useState({
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

    console.log(userInitiatives);

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
                        value={formState.iName}
                        onChange={e => {
                            handleChange(e, formState, setFormState);
                        }}
                    />
                    <StyledLabel htmlFor="userValuesID">Relevent focus</StyledLabel>
                    <select
                        id="userValuesID"
                        name="userValuesID"
                        value={formState.userValuesID}
                        onChange={e => {
                            handleChange(e, formState, setFormState);
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
                {userInitiatives.map((item, i) => {
                    return (
                        <InitiativeCard>
                            <h3>{userInitiatives[i].iName}</h3>
                            <p>{userInitiatives[i].iDescription}</p>
                            <p>Due: {userInitiatives[i].dueDate}</p>
                            <button>Mark as complete</button>
                        </InitiativeCard>
                    );
                })}
            </InitiativeList>
        </div>
    );
}

export default Initiatives;