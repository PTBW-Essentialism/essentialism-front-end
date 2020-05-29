import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AppLogo from "./AppLogo";
import { CustomButton } from "./CustomButton";
import {connect} from "react-redux";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Vibur', cursive;
    margin: 1%;
`;

const Header = (props) => {
    return(
        <HeaderContainer>
            <Link to={`/users/${props.userId}/initiatives`}>
                <CustomButton>initiatives</CustomButton>
            </Link>
            <Link to={`/users/${props.userId}/focus`}> {/* This url needs to have the id being filled in */}
                <CustomButton>areas of focus</CustomButton>
            </Link>
        </HeaderContainer>
    );
}

const mapStateToProps = state => {
    return{
        userId: state.userId
    }
}

export default connect(mapStateToProps, {})(Header);