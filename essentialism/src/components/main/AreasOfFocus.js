import React, {useEffect, useState} from "react";
import axios from "axios";
import FocusTracker from "./FocusTracker";
import styled from "styled-components";
import {connect} from "react-redux";
import { axiosWithAuth } from "../../utils/AxiosWithAuth";

const FocusWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const FocusHeader = styled.h1`
    font-family: 'Vibur', cursive;
    font-size: 4rem;
    color: #8FCB9B;
`;

const AreasOfFocus = (props) => {
    const USERID = window.localStorage.getItem("userId");
    const [userFocus, setUserFocus] = useState()

    useEffect(() => {
        axiosWithAuth()
        .get(`/users/${USERID}/focus`)
        .then((res) => {
            console.log(res)
            dataParser(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const dataParser = (oldArray) => {
        const newObj = {}

        const newArray = oldArray.filter(current => {
            if (!newObj[current.valuesId]){
                newObj[current.valuesId] = true
                return true
            }
            return false
        })
        setUserFocus(newArray);
    }

    return(
        <div>
        <FocusHeader>Areas of Focus</FocusHeader>
        {userFocus ?
            <FocusWrapper>
                <FocusTracker
                    focus={userFocus[0].name}
                    type="area"
                    importance={userFocus[0].importance}
                    />
                <FocusTracker
                    focus={userFocus[1].name}
                    type="area"
                    importance={userFocus[1].importance}
                    />
                <FocusTracker
                    focus={userFocus[2].name}
                    type="area"
                    importance={userFocus[2].importance}
                    />
            </FocusWrapper>
            : null}
        </div>
    );

}

const mapStateToProps = (state) => {
    return{
        userId: state.userId
    }
}

export default connect(mapStateToProps, {})(AreasOfFocus);