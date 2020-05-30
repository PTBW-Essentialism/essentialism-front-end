import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppLogo from "./AppLogo";
import FocusTracker from "./FocusTracker";
import { axiosWithAuth } from "../../utils/AxiosWithAuth";

const DashboardContainer = styled.div`
    width: 24%;
    height: 100vw;
    background: #F8F8FF;
    font-family: 'Vibur', cursive;
    color: #8FCB9B;
    border-right: 2px solid #8FCB9B;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DashboardHeader = styled.div`
    display: flex;
    justify-content: center;
    line-height: 0.2;
    font-size: 1.25rem;
    margin: 2%;
    width: 90%;
    height: auto;
`;


const Dashboard = (props) => {
    const [userFocus, setUserFocus] = useState([]);
    const [completed, setCompleted] = useState([]);
    const USERID = window.localStorage.getItem("userId");

    useEffect(() => {
        axiosWithAuth()
        .get(`/users/${USERID}/focus`)
        .then((res) => {
            console.log(res)
            setUserFocus(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        if (userFocus && userFocus.length) {
            userFocus.map((focus) => {
                const completedFocus = window.localStorage.getItem(`${focus.name}`);
                if(completedFocus) {
                    setCompleted([...completed, focus.name])
                }
            })
        }
    }, [userFocus])

    return(
        userFocus.length ? 
        <DashboardContainer>
                <DashboardHeader>
                <AppLogo>es</AppLogo>
                <h2>essentialism</h2>
            </DashboardHeader>
            <FocusTracker type={completed.includes(userFocus[0].name) ? 'completed' : null} focus={userFocus[0].name} />
            <FocusTracker type={completed.includes(userFocus[1].name) ? 'completed' : null} focus={userFocus[1].name} />
            <FocusTracker type={completed.includes(userFocus[2].name) ? 'completed' : null} focus={userFocus[2].name} />
        </DashboardContainer>
        : null
    );
}

export default Dashboard;