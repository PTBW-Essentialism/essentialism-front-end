import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { CustomButton } from "../main/CustomButton";
import { Redirect } from "react-router";

const FocusForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`

const CheckboxCard = styled.div`
    width: 25vw;
    height: 25vw;
    box-sizing: border-box;
    border: 2px solid #8FCB9B;
    border-radius: 50%;
    padding: 2%;
    margin: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const CheckboxHeader = styled.input`

`

const CheckboxLabel = styled.label`
    font-size: 2.5vw;
    color: #8FCB9B;
`

const CheckboxBody = styled.p`
    font-family: 'Josefin Slab', serif;
    font-size: 2vw;
    color: #8FCB9B;
    text-align: center;
`

const OnboardingFocus = () => {
    const [focusState, setFocusState] = useState([]);

    useEffect(() => {
        axios.get("https://essentialapi.herokuapp.com/values")
            .then(res => {
                let focusArray = res.data.map(item => {
                    return {
                        id: item.id,
                        name: item.name,
                        description: item.description,
                        checked: false
                    };
                });
                setFocusState([...focusArray]);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleSubmit = () => {
        console.log("Submitted!");
    }

    return (
        <FocusForm onSubmit={handleSubmit}>
            {focusState.map((focus, i) => {
                return (
                    <CheckboxCard key={i}>
                        <CheckboxLabel htmlFor={focus.name}>
                            {focus.name}
                            <CheckboxHeader
                                type="checkbox"
                                id={focus.name}
                                name={focus.name}
                                value={focusState[i].checked}
                                onChange={e => {
                                    focusState[i].checked = !focusState[i].checked;
                                    console.log(focusState);
                                }}
                            />
                        </CheckboxLabel>
                        <CheckboxBody>{focus.description}</CheckboxBody>
                    </CheckboxCard>
                );
            })}
            <CustomButton type="submit" className="focusSelection">Submit</CustomButton>
        </FocusForm>
    );
}

export default OnboardingFocus;