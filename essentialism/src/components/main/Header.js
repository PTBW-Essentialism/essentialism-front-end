import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AppLogo from "./AppLogo";
import { CustomButton } from "./CustomButton";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Vibur', cursive;
    margin: 1%;
`;

const Header = () => {
    return(
        <HeaderContainer>
            <Link to="/initiatives">
                <CustomButton>initiatives</CustomButton>
            </Link>
            <Link to="areas-of-focus">
                <CustomButton>areas of focus</CustomButton>
            </Link>
        </HeaderContainer>
    );
}

export default Header;