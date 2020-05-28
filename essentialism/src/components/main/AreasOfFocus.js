import React, {useEffect, useState} from "react";
import axios from "axios";
import FocusTracker from "./FocusTracker";
import styled from "styled-components";

const FocusWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const AreasOfFocus = (props) => {
    const [userFocus, setUserFocus] = useState([])
    //console.log(props.match.params);

    useEffect(() => {
        axios
        .get('https://essentialapi.herokuapp.com/users/:id/focus')
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return(
        <div>
        <h1>Areas of Focus</h1>
        <FocusWrapper>
            <FocusTracker
                focus="Focus 1"
                type="area"
            />
            <FocusTracker
                focus="Focus 2"
                type="area"
            />
            <FocusTracker
                focus="Focus 3"
                type="area"
            />
        </FocusWrapper>
        </div>
    );

}

export default AreasOfFocus;