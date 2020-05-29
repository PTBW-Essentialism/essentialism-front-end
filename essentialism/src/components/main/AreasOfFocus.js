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

const AreasOfFocus = (props) => {
    const [userFocus, setUserFocus] = useState()

    useEffect(() => {
        axiosWithAuth()
        .get(`https://essentialapi.herokuapp.com/users/${props.userId}/focus`)
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
        <h1>Areas of Focus</h1>
        {userFocus ?
            <FocusWrapper>
                <FocusTracker
                    focus={userFocus[0].name}
                    type="area"
                    />
                <FocusTracker
                    focus={userFocus[1].name}
                    type="area"
                    />
                <FocusTracker
                    focus={userFocus[2].name}
                    type="area"
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