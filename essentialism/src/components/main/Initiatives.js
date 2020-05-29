import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { StyledForm, StyledLabel, StyledInput, handleChange } from "../onboarding/Register";
import { CustomButton } from "./CustomButton";
import axios from "axios";
import { connect } from "react-redux";

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
    box-sizing: border-box;
    margin: 2%;
    padding: 2%;
`

const StyledTextArea = styled.textarea`

`

const Initiatives = ({userId}) => {
    const [userInitiatives, setUserInitiatives] = useState();
    const [userFocus, setUserFocus] = useState();
    const dummyData = [
        {
            id: 1,
            iName: "Dummy Data",
            iDescription: "This isn't real data.",
            dueDate: "Never",
            userId: 1,
            userValuesId: 1,
            completed: false,
            repeatable: false
        },
        {
            id: 2,
            iName: "Dummy Data 2",
            iDescription: "This also isn't real data.",
            dueDate: "Never",
            userId: 1,
            userValuesId: 1,
            completed: false,
            repeatable: false
        },
        {
            id: 3,
            iName: "Dummy Data 3",
            iDescription: "This also isn't real data.",
            dueDate: "Never",
            userId: 1,
            userValuesId: 1,
            completed: false,
            repeatable: false
        },
    ];
    
    useEffect(() => {
        axios.get(`https://essentialapi.herokuapp.com/users/${userId}/initiatives`)
            .then(res => {
                setUserInitiatives(res.data);
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    useEffect(() => {
        axios.get(`https://essentialapi.herokuapp.com/users/${userId}/focus`)
            .then(res => {
                setUserFocus(res.data);
            })
            .catch(err => {
                console.log(err)
            });
    }, []);
    
    const [formState, setFormState] = useState({
        id: undefined, //how to set this to the initiative id?
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
        axios.post(`https://essentialapi.herokuapp.com/users/${userId}/initiatives`, formState)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
        setFormState({
            id: undefined,
            iName: "",
            iDescription: "",
            dueDate: "",
            userID: undefined,
            userValuesID: undefined,
            completed: false,
            repeatable: false
        });
    }

    const markComplete = (id) => {
        console.log("Task complete!");
        axios.delete(`https://essentialapi.herokuapp.com/users/${userId}/initiatives/${id}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
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
                        <option value={0}>Please select a relevent focus</option>
                        <option value={1}>{userFocus[0].name}</option>
                        <option value={2}>{userFocus[1].name}</option>
                        <option value={3}>{userFocus[2].name}</option>
                        <option value="Other">Other</option>
                    </select>
                    <StyledLabel htmlFor="iDescriptions">Initiative description</StyledLabel>
                    <StyledTextArea
                        id="iDescription"
                        name="iDescription"
                        placeholder="initiative description"
                        value={formState.iDescription}
                        onChange={e => {
                            handleChange(e, formState, setFormState);
                        }}
                    />
                    <StyledLabel htmlFor="dueDate"></StyledLabel>
                    <StyledInput
                        type="date"
                        id="dueDate"
                        name="dueDate"
                        value={formState.dueDate}
                        onChange={e => {
                            handleChange(e, formState, setFormState);
                        }}
                    />
                    <CustomButton onSubmit={handleSubmit}>Submit</CustomButton>
                </StyledForm>
            </InitiativeAdder>
            <InitiativeList>
                {dummyData.map((item, i) => {
                    return (
                        <InitiativeCard key={i}>
                            <h3>{userInitiatives[i].iName}</h3>
                            <h4>Relevent focus: {userInitiatives[i].userValuesID}</h4>
                            <p>{userInitiatives[i].iDescription}</p>
                            <p>Due: {userInitiatives[i].dueDate}</p>
                            <button
                                onClick={() => {
                                    markComplete(userInitiatives.id);
                                }}
                            >
                                Mark as complete
                            </button>
        </InitiativeCard>
                    );
                })}
            </InitiativeList>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {userId: state.userId}
}

export default connect(mapStateToProps, {})(Initiatives);

// {dummyData.map((item, i) => {
//     {const markComplete = () => {

//     return (
//         <InitiativeCard key={i}>
//             <h3>{dummyData[i].iName}</h3>
//             <h4>Relevent focus: {dummyData[i].userValuesID}</h4>
//             <p>{dummyData[i].iDescription}</p>
//             <p>Due: {dummyData[i].dueDate}</p>
//             <button onClick={() =>{
//                 markComplete(dummyData.id);
//             }}>Mark as complete</button>
//         </InitiativeCard>
//     );
// }}})}