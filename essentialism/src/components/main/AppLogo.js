import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoStyling = styled.div`
    text-decoration: none;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: #8FCB9B;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    color: #F8F8FF;
    margin: auto 5px;
`;

const AppLogo = () => {
    return(
        <Link to="/">
            <LogoStyling>es</LogoStyling>
        </Link>
    );
}

export default AppLogo;