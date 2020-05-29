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

const Dashboard = ({userId}) => {
    const [userFocus, setUserFocus] = useState();

    useEffect(() => {
        axiosWithAuth()
        .get(`https://essentialapi.herokuapp.com/users/${userId}/focus`)
        .then((res) => {
            console.log(res)
            setUserFocus(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return(
        <DashboardContainer>
            <DashboardHeader>
                <AppLogo>es</AppLogo>
                <h2>essentialism</h2>
            </DashboardHeader>
            <FocusTracker focus="1" />
            <FocusTracker focus="2" />
            <FocusTracker focus="3" />
        </DashboardContainer>
    );
}

export default Dashboard;