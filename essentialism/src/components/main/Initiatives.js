import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { StyledForm, StyledLabel, StyledInput} from "../onboarding/Register";
import { CustomButton } from "./CustomButton";
import axios from "axios";
import {axiosWithAuth} from "../../utils/AxiosWithAuth";
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

const Initiatives = (props) => {
    const USERID = window.localStorage.getItem("userId");
    const [userInitiatives, setUserInitiatives] = useState([]);
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
        axiosWithAuth()
            .get(`/users/${USERID}/initiatives`)
            .then(res => {
                console.log(res);
                if (res.data.length) {
                    setUserInitiatives(res.data);
                }
            })
            .catch(err => {
                console.log(err)
            });
    }, [])


    const initiativesPost = () => {
        axiosWithAuth()
            .get(`/users/${USERID}/initiatives`)
            .then(res => {
                console.log(res);
                if (res.data.length) {
                    setUserInitiatives(res.data);
                }
            })
            .catch(err => {
                console.log(err)
            });
    }

    useEffect(() => {
        axiosWithAuth()
            .get(`/users/${USERID}/focus`)
            .then(res => {
                setUserFocus(res.data);
            })
            .catch(err => {
                console.log(err)
            });
    }, []);
    
    const [formState, setFormState] = useState({
        iName: "",
        iDescription: "",
        dueDate: "",
        userId: undefined,
        userValuesId: undefined,
        completed: false,
        repeatable: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState)
        axiosWithAuth()
        .post(`/users/${USERID}/initiatives`, formState)
            .then(res => {
                console.log(res);
                initiativesPost()
            })
            .catch(err => {
                console.log(err);
            });
        setFormState({
            id: undefined,
            iName: "",
            iDescription: "",
            dueDate: "",
            userId: undefined,
            userValuesId: undefined,
            completed: false,
            repeatable: false
        });
        //window.location.reload(true);
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    const InitiativeList = () => {
        console.log(userInitiatives)
        return userInitiatives.map((item, i) => {
            return (
                    <InitiativeCard key={i}>
                        <h3>{userInitiatives[i].iName}</h3>
                        <h4>Relevent focus: {userInitiatives[i].userValuesID}</h4>
                        <p>{userInitiatives[i].iDescription}</p>
                        <p>Due: {userInitiatives[i].dueDate}</p>
                        <button
                        onClick={() => {
                            markComplete(item.id, userFocus[i].name);
                        }}
                        >
                        Mark as complete
                        </button>
                    </InitiativeCard>);
                })
    }

    const markComplete = (id, focus) => {
        console.log("Task complete!");
        axios.delete(`https://essentialapi.herokuapp.com/users/${USERID}/initiatives/${id}`)
            .then(res => {
                console.log(res);
                window.localStorage.setItem(`${focus}`, true)
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div>
            {userFocus ?
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
                            handleChange(e);
                        }}
                        />
                    <StyledLabel htmlFor="userValuesID">Relevent focus</StyledLabel>
                    <select
                        id="userValuesId"
                        name="userValuesId"
                        value={formState.userValuesID}
                        onChange={e => {
                            handleChange(e);
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
                            handleChange(e);
                        }}
                        />
                    <StyledLabel htmlFor="dueDate"></StyledLabel>
                    <StyledInput
                        type="date"
                        id="dueDate"
                        name="dueDate"
                        value={formState.dueDate}
                        onChange={e => {
                            handleChange(e);
                        }}
                        />
                    <CustomButton onSubmit={handleSubmit}>Submit</CustomButton>
                </StyledForm>
                </InitiativeAdder>
                <InitiativeList>
                    {
                        userInitiatives && userInitiatives.length ?
                        InitiativeList()
                        : null
                    }
                </InitiativeList>
            </div>
            : null}
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