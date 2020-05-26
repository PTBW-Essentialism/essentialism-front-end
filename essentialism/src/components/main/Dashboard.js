import React from "react";
import styled from "styled-components";
import AppLogo from "./AppLogo";
import FocusTracker from "./FocusTracker";

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

const Dashboard = () => {
    return(
        <DashboardContainer>
            <DashboardHeader>
                <AppLogo>es</AppLogo>
                <h2>essentialism</h2>
            </DashboardHeader>
            <FocusTracker focus="Focus 1" />
            <FocusTracker focus="Focus 2" />
            <FocusTracker focus="Focus 3" />
        </DashboardContainer>
    );
}

export default Dashboard;